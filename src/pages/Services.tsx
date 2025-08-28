import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
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
import n8nLogo from "@/assets/n8n-logo.png";
import makeLogo from "@/assets/make-logo.png";

const Services = () => {
  const mainServices = [
    {
      icon: Cog,
      title: "Automatiseringen & Software",
      description: "Stroomlijn uw workflows met slimme automatiseringen en maatwerk web applicaties die tijd en kosten besparen.",
      image: automationImage,
      features: [
        "Web applicaties",
        "Proces automatisering",
        "Workflow optimalisatie",
        "API ontwikkeling",
        "Data integratie",
        "Rapportage automatisering"
      ],
      technologies: [
        { icon: Globe, name: "Web Development" },
        { icon: Workflow, name: "Process Automation" },
      ]
    },
    {
      icon: Zap,
      title: "No-Code Tools",
      description: "Snelle ontwikkeling van zakelijke oplossingen met n8n en Make voor directe resultaten zonder complexe programmering.",
      image: noCodeImage,
      features: [
        "n8n automatiseringen",
        "Make.com workflows",
        "Snelle prototyping",
        "Business apps",
        "Dashboard creatie",
        "Workflow tools"
      ],
      technologies: [
        { icon: null, name: "n8n Platform", logo: n8nLogo },
        { icon: null, name: "Make.com", logo: makeLogo },
        { icon: Globe, name: "Rapid Development" },
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Onze <span className="text-primary">Diensten</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Ontdek hoe wij uw bedrijf kunnen helpen groeien met innovatieve 
              technologische oplossingen en slimme automatiseringen.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {mainServices.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative group">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-80 object-cover rounded-lg shadow-corporate group-hover:shadow-primary transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-primary/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
                            <img src={tech.logo} alt={tech.name} className="w-5 h-5 mr-2" />
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

      {/* AI Integration Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto bg-card border-0 shadow-corporate">
            <CardHeader className="text-center pb-8">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-4xl font-bold mb-4">
                AI <span className="text-primary">Implementatie</span>
              </CardTitle>
              <p className="text-xl text-muted-foreground">
                Transformeer uw bedrijf met de kracht van kunstmatige intelligentie
              </p>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">AI Oplossingen:</h3>
                  <div className="space-y-3">
                    {[
                      "Chatbots & Virtual Assistants",
                      "Predictive Analytics",
                      "Document Processing"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-primary mr-3" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Voordelen:</h3>
                  <div className="space-y-3">
                    {[
                      "Verhoogde efficiëntie",
                      "Kostenbesparing",
                      "Betere besluitvorming",
                      "24/7 beschikbaarheid",
                      "Schaalbaarheid",
                      "Concurrentievoordeel"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-primary mr-3" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="text-center mt-8">
                <Button variant="corporate" size="lg" asChild>
                  <Link to="/contact">
                    Ontdek AI Mogelijkheden
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
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