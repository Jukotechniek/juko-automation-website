import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Target, 
  Lightbulb, 
  Users, 
  Award,
  ArrowRight,
  Zap,
  Brain,
  CheckCircle,
  TrendingUp
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovatie",
      description: "Wij blijven vooroplopen met de nieuwste technologieën en methodieken om uw bedrijf vooruit te helpen."
    },
    {
      icon: Zap,
      title: "Efficiëntie",
      description: "Onze oplossingen zijn gericht op het maximaliseren van uw bedrijfsefficiëntie en het minimaliseren van verspilling."
    },
    {
      icon: Users,
      title: "Partnership",
      description: "Wij geloven in langdurige samenwerkingen en bouwen aan sterke relaties met onze klanten."
    },
    {
      icon: Award,
      title: "Kwaliteit",
      description: "Hoge kwaliteit staat centraal in alles wat wij doen, van code tot klantenservice."
    }
  ];

  const stats = [
    { number: "50+", label: "Tevreden Klanten" },
    { number: "100+", label: "Projecten Voltooid" },
    { number: "5+", label: "Jaar Ervaring" },
    { number: "24/7", label: "Support" }
  ];

  const expertise = [
    "Modern Software Development",
    "Process Automation",
    "AI & Machine Learning",
    "No-Code/Low-Code Solutions",
    "Cloud Architecture",
    "Digital Transformation"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-100 to-gray-50 relative overflow-hidden border-b-2 border-primary">
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Icon */}
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Over <span className="text-primary">Juko Automation</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600">
              Uw partner in digitale transformatie en bedrijfsautomatisering. 
              Wij combineren innovatie met efficiëntie om uw bedrijf naar een hoger niveau te tillen.
            </p>
            {/* Gradient line */}
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="bg-card border-0 shadow-corporate">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold">Onze Missie</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Wij helpen bedrijven hun digitale potentieel te realiseren door het ontwikkelen van 
                  innovatieve softwareoplossingen en het automatiseren van bedrijfsprocessen. 
                  Ons doel is om complexe uitdagingen om te zetten in eenvoudige, efficiënte oplossingen.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-0 shadow-corporate">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold">Onze Visie</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Wij streven naar een wereld waarin elke organisatie, ongeacht grootte, 
                  toegang heeft tot geavanceerde automatisering en AI-technologieën. 
                  Door democratisering van technologie helpen we bedrijven concurrerend te blijven.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Onze <span className="text-primary">Waarden</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Deze kernwaarden vormen de basis van alles wat we doen en begeleiden ons 
              in elke beslissing en elk project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-primary transition-all duration-300 transform hover:-translate-y-2 bg-card border-0 shadow-corporate">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Onze <span className="text-primary">Resultaten</span>
            </h2>
            <p className="text-xl text-gray-300">
              Cijfers die onze toewijding en expertise bewijzen
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-6xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Onze <span className="text-primary">Expertise</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Specialisaties waarmee wij uw bedrijf kunnen helpen
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {expertise.map((skill, index) => (
                <div key={index} className="flex items-center p-4 bg-muted rounded-lg hover:bg-accent transition-colors">
                  <CheckCircle className="w-6 h-6 text-primary mr-4 flex-shrink-0" />
                  <span className="text-lg font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <TrendingUp className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Waarom <span className="text-primary">Juko Automation</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Wij onderscheiden ons door onze unieke combinatie van technische expertise, 
              strategisch inzicht en persoonlijke betrokkenheid. Elk project behandelen we 
              als een kans om echte waarde toe te voegen aan uw bedrijf.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Snelle Resultaten</h3>
                <p className="text-muted-foreground">Efficiënte implementatie met directe impact</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Persoonlijke Aanpak</h3>
                <p className="text-muted-foreground">Maatwerk oplossingen voor uw specifieke behoeften</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Bewezen Track Record</h3>
                <p className="text-muted-foreground">Succesvolle projecten bij diverse organisaties</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Klaar voor <span className="text-primary">Samenwerking</span>?
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Laten we kennismaken en ontdekken hoe wij uw bedrijf kunnen helpen groeien 
              met innovatieve technologische oplossingen.
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

export default About;