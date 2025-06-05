import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../../contexts/UserContext';
import { ArrowRight, Eye, EyeOff, Check, X } from 'lucide-react';

const RegisterPage = () => {
  /* ─── shared state ─────────────────────────────────────── */
  const [step, setStep]           = useState(1);
  const [email, setEmail]         = useState('');
  const [password, setPassword]   = useState('');
  const [confirmPassword, setCPW] = useState('');
  const [showPassword, setShowPW] = useState(false);
  const [userType, setUserType]   = useState<'startup' | 'investor'>('startup');
  const [name, setName]           = useState('');          // full name for startup or just placeholder
  const [agreeTerms, setAgree]    = useState(false);
  const [isLoading, setLoading]   = useState(false);
  const [error, setError]         = useState('');

  /* ─── startup-specific fields ───────────────────────────── */
  const [startupLocation, setStartupLocation] = useState('');
  const [startupLinkedIn, setStartupLinkedIn] = useState('');

  /* ─── investor-specific fields ──────────────────────────── */
  const [invType, setInvType]           = useState('');
  const [investmentRange, setInvRange]   = useState('');
  const [wallet, setWallet]             = useState('');
  const [investorLinkedIn, setInvestorLinkedIn] = useState('');

  const { login } = useUser();
  const navigate  = useNavigate();

  /* ─── password tests ───────────────────────────────────── */
  const tests = {
    lower: /[a-z]/.test(password),
    upper: /[A-Z]/.test(password),
    num:   /\d/.test(password),
    len:   password.length >= 8,
    match: password === confirmPassword,
  };

  /* ─── typed checklist to silence the TS key error ──────── */
  const checklist: [boolean, string][] = [
    [tests.lower, 'Lowercase letter'],
    [tests.upper, 'Uppercase letter'],
    [tests.num,   'Number'],
    [tests.len,   'At least 8 characters'],
    [tests.match, 'Passwords match'],
  ];

  /* ─── step navigation ──────────────────────────────────── */
  const handleNext = () => {
    if (step !== 1) return;
    const ok = tests.lower && tests.upper && tests.num && tests.len && tests.match;
    if (!email || !password || !confirmPassword || !ok) {
      setError('Please fill all fields correctly before continuing.');
      return;
    }
    setError('');
    setStep(2);
  };
  const handleBack = () => { setStep(1); setError(''); };

  /* ─── submit ───────────────────────────────────────────── */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // role-specific checks
    if (!agreeTerms) { 
      setError('You must agree to the terms.'); 
      return; 
    }
    if (!name) {
      setError('Full name is required.');
      return;
    }
    if (userType === 'startup') {
      if (!startupLocation || !startupLinkedIn) {
        setError('Please complete all startup details.');
        return;
      }
    }
    if (userType === 'investor') {
      if (!invType || !investmentRange || !wallet || !investorLinkedIn) {
        setError('Please complete all investor details.');
        return;
      }
    }

    setLoading(true);
    setError('');
    try {
      await new Promise(r => setTimeout(r, 1000)); // fake API
      const uid = `${userType}-${Math.random().toString(36).slice(2, 10)}`;
      login(uid, userType);
      navigate(userType === 'startup' ? '/dashboard/startup' : '/dashboard/investor');
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  /* ─── ui ───────────────────────────────────────────────── */
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="w-full max-w-md space-y-8">
        {/* header */}
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Create your account</h2>
          <p className="mt-2 text-sm text-gray-600">
            Already have one?{' '}
            <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
              Sign in
            </Link>
          </p>
        </div>

        {/* steps */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-full flex items-center">
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full ${
                step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'
              }`}
            >
              1
            </div>
            <div className={`flex-1 h-1 mx-2 ${step >= 2 ? 'bg-blue-600' : 'bg-gray-200'}`} />
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full ${
                step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200'
              }`}
            >
              2
            </div>
          </div>
        </div>

        {/* error */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* STEP 1 ------------------------------------------------ */}
          {step === 1 && (
            <>
              {/* role */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  I am registering as a
                </label>
                <div className="flex space-x-4">
                  {(['startup', 'investor'] as const).map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setUserType(t)}
                      className={`flex-1 py-2 rounded-md border ${
                        userType === t
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {t.charAt(0).toUpperCase() + t.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-md border-gray-300 px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Email address"
                />
              </div>

              {/* password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-md border-gray-300 px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPW(!showPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-500"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* confirm */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password
                </label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={confirmPassword}
                  onChange={(e) => setCPW(e.target.value)}
                  className="w-full rounded-md border-gray-300 px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Confirm password"
                />
              </div>

              {/* checklist */}
              <div className="bg-gray-50 p-4 rounded-md">
                {checklist.map(([ok, text]) => (
                  <div key={text} className="flex items-center text-sm">
                    {ok ? (
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                    ) : (
                      <X className="h-4 w-4 text-red-500 mr-2" />
                    )}
                    {text}
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={handleNext}
                className="w-full flex justify-center items-center py-2 px-4 rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Continue <ArrowRight className="ml-2" size={16} />
              </button>
            </>
          )}

          {/* STEP 2 ------------------------------------------------ */}
          {step === 2 && (
            <>
              {/* full name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-md border-gray-300 px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your full name"
                />
              </div>

              {/* startup fields */}
              {userType === 'startup' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Location
                    </label>
                    <input
                      type="text"
                      required
                      value={startupLocation}
                      onChange={(e) => setStartupLocation(e.target.value)}
                      className="w-full rounded-md border-gray-300 px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="City, Country"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      LinkedIn Profile
                    </label>
                    <input
                      type="url"
                      required
                      value={startupLinkedIn}
                      onChange={(e) => setStartupLinkedIn(e.target.value)}
                      className="w-full rounded-md border-gray-300 px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="https://linkedin.com/in/username"
                    />
                  </div>
                </>
              )}

              {/* investor fields */}
              {userType === 'investor' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Type of Investor
                    </label>
                    <select
                      required
                      value={invType}
                      onChange={(e) => setInvType(e.target.value)}
                      className="w-full rounded-md border-gray-300 px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select type</option>
                      <option value="angel">Angel</option>
                      <option value="vc">Venture Capital</option>
                      <option value="institutional">Institutional</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Investment Range
                    </label>
                    <input
                      type="text"
                      required
                      value={investmentRange}
                      onChange={(e) => setInvRange(e.target.value)}
                      className="w-full rounded-md border-gray-300 px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="e.g. $10k–$100k"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Crypto-wallet Address
                    </label>
                    <input
                      type="text"
                      required
                      value={wallet}
                      onChange={(e) => setWallet(e.target.value)}
                      className="w-full rounded-md border-gray-300 px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="0x…"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      LinkedIn Profile
                    </label>
                    <input
                      type="url"
                      required
                      value={investorLinkedIn}
                      onChange={(e) => setInvestorLinkedIn(e.target.value)}
                      className="w-full rounded-md border-gray-300 px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="https://linkedin.com/in/username"
                    />
                  </div>
                </>
              )}

              {/* terms */}
              <div className="flex items-start">
                <input
                  id="terms"
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={(e) => setAgree(e.target.checked)}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
                <label htmlFor="terms" className="ml-2 text-sm">
                  I agree to the{' '}
                  <a href="#" className="text-blue-600 hover:text-blue-500">
                    Terms
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-blue-600 hover:text-blue-500">
                    Privacy Policy
                  </a>
                </label>
              </div>

              {/* nav buttons */}
              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={handleBack}
                  className="flex-1 py-2 px-4 rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 py-2 px-4 rounded-md text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-70"
                >
                  {isLoading ? 'Creating…' : 'Create Account'}
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
