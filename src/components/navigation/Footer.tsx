import { Mail, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-blue-400 mb-4">Venturly</h2>
            <p className="text-gray-300 mb-4">
              Connecting innovative startups with visionary investors to build the future together.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/venturlyinvestments/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/venturly_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/people/Venturly/61577697775632/?mibextid=wwXIfr&rdid=jgudE6VX482ywpDj&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CWgAqhX2i%2F%3Fmibextid%3DwwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact & Location</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-blue-400" />
                <a href="mailto:info@venturlyinvestments.com" className="text-gray-300 hover:text-white">info@venturlyinvestments.com</a>
              </li>
              
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-blue-400 mt-1" />
                <span className="text-gray-300">Worcester Polytechnic Institute</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Educational/demo disclaimer */}
        <div className="mt-8 text-sm text-gray-500 max-w-2xl mx-auto text-center">
          <p>
            Venturly is a student-led project at Worcester Polytechnic Institute, built for educational and demonstration purposes only. 
            None of the content here is intended as financial, legal, or investment advice. All services and information are provided "as-is" 
            and "as available," without any warranty. Venturly disclaims any liability for losses or damages arising from your use of this site.
          </p>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Venturly. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
