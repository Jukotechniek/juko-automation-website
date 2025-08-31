import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { 
  Code, 
  Cog, 
  Zap, 
  Brain,
  ArrowRight,
  CheckCircle,
  Smartphone,
  Globe,
  Database,
  Workflow,
  Bot,
  Puzzle
} from "lucide-react";
import automationImage from "@/assets/automation.jpg";
import noCodeImage from "@/assets/no-code-tools.jpg";
import jukoBotImage from "@/assets/JukoBot.png";
import n8nLogo from "@/assets/n8n-logo.png";
import makeLogo from "@/assets/make-logo.png";

const Services = () => {
  useEffect(() => {
    // Handle hash navigation when component mounts
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  const mainServices = [
    {
      icon: Cog,
      title: "Automatiseringen & Software",
      description: "Stroomlijn uw workflows met slimme automatiseringen en maatwerk web applicaties die tijd en kosten besparen.",
      image: automationImage,
      features: [
        "Web applicaties",
        "Processen stroomlijnen",
        "Software koppelingen",
        "Data inzichtelijk maken",
        "Maatwerk bedrijfsapps",
        "Rapportage automatisering"
      ],
      technologies: [
        { icon: Code, name: "Webapp ontwikkeling" },
        { icon: Workflow, name: "Proces automatisering" },
      ]
    },
    {
      icon: Zap,
      title: "No-Code Tools",
      description: "Snelle ontwikkeling van zakelijke oplossingen met n8n en Make voor directe resultaten zonder complexe programmering.",
      image: noCodeImage,
      features: [
        "n8n-automatiseringen",
        "Make.com workflows",
        "Snelle implementatie",
        "Innovatieve dashboards",
        "Zelf beheren of volledig door ons verzorgd"
      ],
      technologies: [
        { icon: null, name: "n8n", logo: n8nLogo },
        { icon: null, name: "make.com", logo: makeLogo },
      ]
    },
    {
      icon: Brain,
      title: "AI Implementatie",
      description: "Transformeer uw bedrijf met de kracht van kunstmatige intelligentie",
      image: jukoBotImage,
      features: [
        "Chatbots & Virtuele assistenten",
        "Voorspellende analytics", 
        "Document verwerking",
        "Verhoogde efficiëntie",
        "24/7 beschikbaarheid",
        "Personeel ontlasten"
      ],
      technologies: [
        { icon: Bot, name: "AI Chatbots" },
        { icon: Database, name: "Data Analyse" },
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-100 to-gray-50 relative overflow-hidden border-b-2 border-primary">
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Icon */}
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Cog className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Onze <span className="text-primary">Diensten</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600">
              Ontdek hoe wij uw bedrijf kunnen helpen groeien met innovatieve 
              technologische oplossingen en slimme automatiseringen.
            </p>
            {/* Gradient line */}
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {mainServices.map((service, index) => (
              <div 
                key={index} 
                id={index === 0 ? 'automatiseringen-software' : index === 1 ? 'no-code-tools' : 'ai-implementatie'}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
              >
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative group">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className={`w-full h-96 ${
                        service.title === 'AI Implementatie' 
                          ? 'object-contain bg-gray-50' 
                          : service.title === 'Automatiseringen & Software'
                          ? 'object-contain bg-white p-4'
                          : 'object-cover'
                      } rounded-lg shadow-corporate`}
                    />
                  </div>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-4xl font-bold">{service.title}</h2>
                  </div>
                  
                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Wat wij bieden:</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Specialisaties:</h3>
                    <div className="flex flex-wrap gap-4">
                      {service.technologies.map((tech, idx) => (
                        <div key={idx} className="flex items-center bg-muted rounded-lg px-4 py-2">
                          {tech.logo ? (
                            <img src={tech.logo} alt={tech.name} className="w-7 h-7 mr-2" />
                          ) : (
                            <tech.icon className="w-5 h-5 text-primary mr-2" />
                          )}
                          <span className="text-sm font-medium">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button variant="hero" size="lg" asChild>
                    <Link to="/contact">
                      Meer Informatie
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Laten we <span className="text-primary">Samenwerken</span>
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Heeft u vragen over onze diensten of wilt u een vrijblijvend gesprek? 
              Neem contact met ons op en ontdek hoe wij uw bedrijf kunnen helpen groeien.
            </p>
            <Button variant="hero" size="lg" className="text-lg px-8 py-4" asChild>
              <Link to="/contact">
                Neem Contact Op
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;