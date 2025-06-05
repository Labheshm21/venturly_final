import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
  category: 'general' | 'investors' | 'startups' | 'milestones' | 'payments';
}

const faqs: FaqItem[] = [
  {
    question: 'What is Venturly?',
    answer: 'Venturly is a platform that connects startups with investors through a transparent, milestone-based funding approach. We provide tools for startups to showcase their progress and for investors to track their investments with clarity and confidence.',
    category: 'general',
  },
  {
    question: 'How does Venturly differ from other investment platforms?',
    answer: 'Venturly focuses on milestone-based funding, which means capital is released as startups achieve pre-defined goals. This creates accountability, reduces risk for investors, and helps startups maintain focus on key objectives.',
    category: 'general',
  },
  {
    question: 'Is Venturly available internationally?',
    answer: 'Yes, Venturly is available worldwide. However, users should ensure they comply with their local regulations regarding investments and fundraising.',
    category: 'general',
  },
  {
    question: 'How are investors vetted on the platform?',
    answer: 'Investors undergo a verification process that confirms their identity and investment capacity. We review professional backgrounds and investment history to ensure our startups connect with legitimate funding sources.',
    category: 'investors',
  },
  {
    question: 'What investment opportunities are available?',
    answer: 'Venturly hosts startups across various sectors including technology, healthcare, sustainability, finance, education, and more. Investors can filter opportunities based on industry, funding stage, location, and investment size.',
    category: 'investors',
  },
  {
    question: 'How do I track my investments?',
    answer: 'Investors have access to a dashboard that shows all their investments, milestone progress, and upcoming approvals. You\'ll receive notifications when startups complete milestones and when your approval is needed for fund releases.',
    category: 'investors',
  },
  {
    question: 'How do startups apply to be listed on Venturly?',
    answer: 'Startups can create an account and complete their profile, including business information, team details, and financial projections. Once submitted, our team reviews applications for completeness and quality before making them visible to investors.',
    category: 'startups',
  },
  {
    question: 'What information do startups need to provide?',
    answer: 'Startups should provide comprehensive business information including registration details, team backgrounds, market analysis, financial projections, and a clearly defined milestone plan with funding requirements for each stage.',
    category: 'startups',
  },
  {
    question: 'How long does the funding process typically take?',
    answer: 'The timeline varies based on the startup\'s appeal to investors and the quality of their pitch. Some startups secure funding commitments within weeks, while others may take a few months to find the right investor match.',
    category: 'startups',
  },
  {
    question: 'What are milestones and how do they work?',
    answer: 'Milestones are specific, measurable goals that startups commit to achieving. Each milestone has defined deliverables, timeline, and associated funding. As startups complete milestones, they submit proof for investor approval, which triggers the release of the next funding tranche.',
    category: 'milestones',
  },
  {
    question: 'Who defines the milestones?',
    answer: 'Startups initially propose their milestones, but these can be negotiated and finalized with investors during the deal process. This ensures both parties agree on expectations and timing.',
    category: 'milestones',
  },
  {
    question: 'What happens if a milestone is not approved?',
    answer: 'If investors reject a milestone, they must provide specific feedback. Startups then have the opportunity to address the concerns and resubmit for approval. This process ensures clear communication and alignment on expectations.',
    category: 'milestones',
  },
  {
    question: 'How are funds transferred?',
    answer: 'Venturly uses secure payment processing systems to transfer funds from investors to startups. Once a milestone is approved, funds are automatically released according to the agreed schedule.',
    category: 'payments',
  },
  {
    question: 'What payment methods are supported?',
    answer: 'Venturly supports various payment methods including bank transfers, credit cards, and cryptocurrency transactions. All financial transactions are securely processed and recorded for transparency.',
    category: 'payments',
  },
  {
    question: 'Are there any fees for using Venturly?',
    answer: 'Venturly charges a small percentage fee on successfully funded milestones. Startups pay a fee on funds received, while investors pay a fee on funds invested. Detailed fee structures are available in our terms of service.',
    category: 'payments',
  },
];

const FaqPage = () => {
  const [activeCategory, setActiveCategory] = useState<string>('general');
  const [expandedQuestions, setExpandedQuestions] = useState<string[]>([]);
  
  const toggleQuestion = (question: string) => {
    if (expandedQuestions.includes(question)) {
      setExpandedQuestions(expandedQuestions.filter(q => q !== question));
    } else {
      setExpandedQuestions([...expandedQuestions, question]);
    }
  };
  
  const filteredFaqs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);
  
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
        <p className="text-xl text-gray-600">
          Find answers to common questions about using the Venturly platform
        </p>
      </div>
      
      {/* Category tabs */}
      <div className="flex flex-wrap justify-center mb-8 border-b border-gray-200">
        {['all', 'general', 'investors', 'startups', 'milestones', 'payments'].map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 text-sm font-medium ${
              activeCategory === category
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700 hover:border-b-2 hover:border-gray-300'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      
      {/* FAQ accordion */}
      <div className="space-y-4">
        {filteredFaqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-200"
          >
            <button
              onClick={() => toggleQuestion(faq.question)}
              className="w-full flex justify-between items-center p-4 text-left font-medium focus:outline-none"
            >
              <span className="text-gray-900">{faq.question}</span>
              {expandedQuestions.includes(faq.question) ? (
                <ChevronUp className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
            </button>
            
            {expandedQuestions.includes(faq.question) && (
              <div className="p-4 pt-0 bg-gray-50">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Contact section */}
      <div className="mt-12 bg-blue-50 rounded-lg p-6 text-center">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Couldn't find what you're looking for?</h2>
        <p className="text-gray-600 mb-4">
          Our support team is here to help with any other questions you may have.
        </p>
        <a
          href="mailto:support@venturly.com"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
        >
          Contact Support
        </a>
      </div>
    </div>
  );
};

export default FaqPage;