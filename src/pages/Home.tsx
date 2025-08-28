import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Cog, Zap, Brain } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import automationImage from "@/assets/automation.jpg";
import noCodeImage from "@/assets/no-code-tools.jpg";

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
      title: "No-Code Tools",
      description: "Snelle ontwikkeling van zakelijke oplossingen met n8n en Make zonder complexe programmering.",
      image: noCodeImage,
      link: "/diensten#no-code-tools"
    },
    {
      icon: Brain,
      title: "AI Implementatie",
      description: "Transformeer uw bedrijf met chatbots, predictive analytics en document processing.",
      image: noCodeImage,
      link: "/diensten#ai-implementatie"
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Innovatieve <span className="text-primary">Automatiseringen</span><br />
              voor Uw Bedrijf
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
              Verhoog uw bedrijfsefficiëntie met onze expertise in automatiseringen, 
              no-code tools en AI implementatie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4" asChild>
                <Link to="/diensten">
                  Ontdek Onze Oplossingen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-black hover:bg-white hover:text-black hover:scale-105 transition-transform duration-200" asChild>
                <Link to="/contact">
                  Neem Contact Op
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float"></div>
        <div className="absolute bottom-32 right-16 w-16 h-16 bg-primary/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-8 w-12 h-12 bg-primary/25 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Onze <span className="text-primary">Expertise</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Van automatiseringen tot geavanceerde AI implementatie - 
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
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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

      {/* CTA Section */}
      <section className="py-20 bg-foreground text-background">
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
              <Link to="/contact">
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