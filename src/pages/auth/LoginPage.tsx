import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../../contexts/UserContext';
import { ArrowRight, Eye, EyeOff, Wallet } from 'lucide-react';

/* ─── declare MetaMask type so TS is happy ─── */
declare global {
  interface Window {
    ethereum?: {
      request: (args: { method: string; params?: unknown[] }) => Promise<any>;
    };
  }
}

const LoginPage = () => {
  /* state */
  const [email, setEmail]         = useState('');
  const [password, setPassword]   = useState('');
  const [showPassword, setShowPW] = useState(false);
  const [userType, setUserType]   = useState<'startup' | 'investor'>('startup');
  const [isLoading, setLoading]   = useState(false);
  const [error, setError]         = useState('');

  const { login }  = useUser();
  const navigate   = useNavigate();

  /* email/password sign-in */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await new Promise(res => setTimeout(res, 1_000)); // fake API hit
      const id = userType === 'startup' ? 'startup-123' : 'investor-456';
      login(id, userType);
      navigate(userType === 'startup' ? '/dashboard/startup' : '/dashboard/investor');
    } catch {
      setError('Invalid email or password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  /* wallet sign-in (investor only) */
  const handleWalletLogin = async () => {
    if (!window.ethereum) {
      setError('No crypto-wallet found. Please install MetaMask or another provider.');
      return;
    }
    setLoading(true);
    setError('');
    try {
      const accounts: string[] =
        await window.ethereum.request({ method: 'eth_requestAccounts' });
      if (!accounts?.length) throw new Error('User rejected connection');
      const walletAddr = accounts[0].toLowerCase();
      login(walletAddr, 'investor');
      navigate('/dashboard/investor');
    } catch {
      setError('Wallet connection failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  /* ui */
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="w-full max-w-md space-y-8">
        {/* header */}
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Or{' '}
            <Link to="/register" className="font-medium text-blue-600 hover:text-blue-500">
              create a new account
            </Link>
          </p>
        </div>

        {/* error banner */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* choose role */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">I am a</label>
            <div className="flex space-x-4">
              {(['startup', 'investor'] as const).map(t => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setUserType(t)}
                  className={`flex-1 py-2 rounded-md border
                    ${userType === t
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'}`}
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
              onChange={e => setEmail(e.target.value)}
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
                onChange={e => setPassword(e.target.value)}
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

          {/* remember / forgot */}
          <div className="flex items-center justify-between">
            <label className="flex items-center text-sm">
              <input
                type="checkbox"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <span className="ml-2 text-gray-900">Remember me</span>
            </label>
            <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-500">
              Forgot your password?
            </a>
          </div>

          {/* primary sign-in */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center items-center py-2 px-4 rounded-md text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-70"
          >
            {isLoading ? (
              <>Signing in…</>
            ) : (
              <>
                Sign in <ArrowRight className="ml-2" size={16} />
              </>
            )}
          </button>

          {/* wallet sign-in (investor only) */}
          {userType === 'investor' && (
            <button
              type="button"
              disabled={isLoading}
              onClick={handleWalletLogin}
              className="w-full flex justify-center items-center py-2 px-4 rounded-md border border-gray-300
                         bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-70"
            >
              {isLoading ? (
                <>Connecting…</>
              ) : (
                <>
                  <Wallet className="mr-2" size={16} />
                  Connect with Wallet
                </>
              )}
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
