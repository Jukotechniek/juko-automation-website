import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Cog, Zap, Brain } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import automationImage from "@/assets/automation.jpg";
import noCodeImage from "@/assets/no-code-tools.jpg";
import jukoBotImage from "@/assets/JukoBot.png";

const Home = () => {
  const services = [
    {
      icon: Cog,
      title: "Automatiseringen & Software",
      description: "Stroomlijn uw workflows met slimme automatiseringen en maatwerk web applicaties.",
      image: automationImage,
      link: "/diensten#automatiseringen-software"
    },
    {
      icon: Zap,
      title: "No-Code Automatiseringen",
      description: "Snelle ontwikkeling van werkende visuele automatiseringen met n8n en Make, zonder complexe programmering.",
      image: noCodeImage,
      link: "/diensten#no-code-tools"
    },
    {
      icon: Brain,
      title: "AI Implementatie",
      description: "Transformeer uw bedrijf met data gedreven chatbots, voorspellende analyse en document verwerking.",
      image: jukoBotImage,
      link: "/diensten#ai-implementatie"
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen sm:min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden py-16 sm:py-0">
        <div className="absolute inset-0 bg-black/50"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight">
              Innovatieve <span className="text-primary">Automatiseringen</span><br />
              voor Uw Bedrijf
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto px-2">
              Verhoog uw bedrijfsefficiëntie met onze expertise in automatiseringen, 
              no-code tools en AI implementatie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-2">
              <Button variant="hero" size="lg" className="text-sm sm:text-lg px-5 sm:px-8 py-2 sm:py-4 w-full sm:w-auto" asChild>
                <Link to="/diensten">
                  Ontdek Onze Oplossingen
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-sm sm:text-lg px-5 sm:px-8 py-2 sm:py-4 border-white text-black hover:bg-white hover:text-black hover:scale-105 transition-transform duration-200 w-full sm:w-auto" asChild>
                <Link to="/contact#contact-form">
                  Neem Contact Op
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-4 sm:left-10 w-12 h-12 sm:w-20 sm:h-20 bg-primary/20 rounded-full animate-float"></div>
        <div className="absolute bottom-32 right-4 sm:right-16 w-10 h-10 sm:w-16 sm:h-16 bg-primary/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-2 sm:right-8 w-8 h-8 sm:w-12 sm:h-12 bg-primary/25 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Onze <span className="text-primary">Expertise</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Van automatiseringen tot geavanceerde AI implementatie,
              wij helpen uw bedrijf groeien met de juiste technologische oplossingen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link key={index} to={service.link} className="block">
                <Card className="group hover:shadow-primary transition-all duration-300 transform hover:-translate-y-2 bg-card border-0 shadow-corporate cursor-pointer">
                  <CardContent className="p-8">
                    <div className="mb-6 relative overflow-hidden rounded-lg">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className={`w-full h-48 transition-transform duration-300 group-hover:scale-110 ${
                          service.title === 'AI Implementatie' 
                            ? 'object-contain bg-gray-50 p-2' 
                            : service.title === 'Automatiseringen & Software'
                            ? 'object-contain bg-white p-2'
                            : 'object-cover'
                        }`}
                      />
                      <div className="absolute inset-0 bg-gray-900/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <service.icon className="w-12 h-12 text-white" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="corporate" size="lg" asChild>
              <Link to="/diensten">
                Bekijk Alle Diensten
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Werkwijze Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Onze <span className="text-primary">Werkwijze</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Een persoonlijke aanpak waarbij we samen uw processen doorlopen en op maat gemaakte automatiseringsvoorstellen ontwikkelen.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Stap 1 */}
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Kennismaking</h3>
                <p className="text-gray-600 leading-relaxed">
                  We komen bij u op locatie of plannen een videocall om uw bedrijf en uitdagingen te leren kennen.
                </p>
              </div>

              {/* Stap 2 */}
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Proces Analyse</h3>
                <p className="text-gray-600 leading-relaxed">
                  Samen nemen we de relevante processen van uw bedrijf door en identificeren we kansen voor automatisering.
                </p>
              </div>

              {/* Stap 3 */}
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Voorstel op Maat</h3>
                <p className="text-gray-600 leading-relaxed">
                  We presenteren u een concreet automatiseringsvoorstel met heldere voordelen en implementatiestappen.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4" asChild>
                <Link to="/contact#contact-form">
                  Plan een Kennismaking
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-700 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Brain className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Klaar voor de <span className="text-primary">Toekomst</span>?
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Laat ons uw bedrijfsprocessen transformeren met innovatieve technologie 
              en slimme automatiseringen. Neem vandaag nog contact op voor een vrijblijvend gesprek.
            </p>
            <Button variant="hero" size="lg" className="text-lg px-8 py-4" asChild>
              <Link to="/contact#contact-form">
                Start Uw Transformatie
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;