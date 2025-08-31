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
            <div className="flex items-center mb-4">
              <img 
                src="/Jukoautomation_Wit.png" 
                alt="Juko Automation" 
                className="h-20 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Expert in softwareontwikkeling, automatiseringen, no-code tools en AI implementatie 
              voor verhoogde bedrijfsefficiëntie.
            </p>
            <p className="text-sm text-gray-400">
              © 2024 Juko Automation. Alle rechten voorbehouden.
            </p>
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
                <span className="text-gray-300">Softwareontwikkeling</span>
              </li>
              <li>
                <span className="text-gray-300">Automatiseringen</span>
              </li>
              <li>
                <span className="text-gray-300">No-Code Tools</span>
              </li>
              <li>
                <span className="text-gray-300">AI Implementatie</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;