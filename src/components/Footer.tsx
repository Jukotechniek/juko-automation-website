import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-sm"></div>
              <span className="text-xl font-bold">
                Juko <span className="text-primary">Automation</span>
              </span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Expert in softwareontwikkeling, automatiseringen, no-code tools en AI implementatie 
              voor verhoogde bedrijfsefficiëntie.
            </p>
            <p className="text-sm text-muted-foreground">
              © 2024 Juko Automation. Alle rechten voorbehouden.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigatie</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/diensten" className="text-muted-foreground hover:text-primary transition-colors">
                  Diensten
                </Link>
              </li>
              <li>
                <Link to="/over-ons" className="text-muted-foreground hover:text-primary transition-colors">
                  Over Ons
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
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
                <span className="text-muted-foreground">Softwareontwikkeling</span>
              </li>
              <li>
                <span className="text-muted-foreground">Automatiseringen</span>
              </li>
              <li>
                <span className="text-muted-foreground">No-Code Tools</span>
              </li>
              <li>
                <span className="text-muted-foreground">AI Implementatie</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;