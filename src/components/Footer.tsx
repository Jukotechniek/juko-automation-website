import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-800 to-slate-900 text-white relative overflow-hidden">
      {/* Subtle decorative element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/5 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
      <div className="container mx-auto px-4 py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigatie</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/diensten" className="text-gray-300 hover:text-primary transition-colors">
                  Diensten
                </Link>
              </li>
              <li>
                <Link to="/over-ons" className="text-gray-300 hover:text-primary transition-colors">
                  Over Ons
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Diensten</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/diensten#automatiseringen-software" className="text-gray-300 hover:text-primary transition-colors">
                  Softwareontwikkeling
                </Link>
              </li>
              <li>
                <Link to="/diensten#automatiseringen-software" className="text-gray-300 hover:text-primary transition-colors">
                  Automatiseringen
                </Link>
              </li>
              <li>
                <Link to="/diensten#no-code-tools" className="text-gray-300 hover:text-primary transition-colors">
                    Low-Code Tools
                </Link>
              </li>
              <li>
                <Link to="/diensten#ai-implementatie" className="text-gray-300 hover:text-primary transition-colors">
                  AI Implementatie
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom section with copyright and expertise */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-300 mb-2">
                Expert in softwareontwikkeling, automatiseringen, low-code tools en AI implementatie 
                voor verhoogde bedrijfsefficiëntie.
              </p>
            </div>
            <div className="text-right">
              {/* Logo above copyright */}
              <div className="flex justify-end mb-4">
                <img 
                  src="/Jukoautomation_Wit.png" 
                  alt="Juko Automation" 
                  className="h-20 w-auto"
                />
              </div>
              <p className="text-sm text-gray-400">
                © 2025 Juko Automation. Alle rechten voorbehouden.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;