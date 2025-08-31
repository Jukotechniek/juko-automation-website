import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  MessageSquare,
  ArrowRight
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Bericht verzonden!",
        description: "Dank je wel voor je bericht. We nemen zo snel mogelijk contact met je op.",
      });
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "info@jukoautomation.nl",
      description: "Stuur ons een email voor vragen"
    },
    {
      icon: Phone,
      title: "Telefoon",
      content: "+31 (0)6 12345678",
      description: "Bel ons voor direct contact"
    },
    {
      icon: MapPin,
      title: "Locatie",
      content: "Nederland",
      description: "Wij werken landelijk"
    },
    {
      icon: Clock,
      title: "Openingstijden",
      content: "Ma-Vr: 9:00-17:00",
      description: "Buiten kantooruren? Laat een bericht achter!"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 to-transparent"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/20 rounded-full mb-6">
              <MessageSquare className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Neem <span className="text-primary">Contact</span> Op
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
              Klaar om uw bedrijf te transformeren? Laten we een vrijblijvend gesprek inplannen 
              om uw uitdagingen en mogelijkheden te bespreken.
            </p>
            <div className="flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-card border-0 shadow-corporate">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold flex items-center">
                    <MessageSquare className="w-8 h-8 text-primary mr-3" />
                    Stuur ons een bericht
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Vul het formulier in en we nemen binnen 24 uur contact met u op.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Naam *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Uw volledige naam"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="transition-all duration-300 focus:shadow-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="uw.email@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="transition-all duration-300 focus:shadow-primary"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="company">Bedrijf</Label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          placeholder="Uw bedrijfsnaam"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="transition-all duration-300 focus:shadow-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefoon</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+31 6 12345678"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="transition-all duration-300 focus:shadow-primary"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Onderwerp *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="Waar kunnen we u mee helpen?"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="transition-all duration-300 focus:shadow-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Bericht *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Vertel ons meer over uw project of vraag..."
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="transition-all duration-300 focus:shadow-primary resize-none"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      variant="hero" 
                      size="lg" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Versturen..."
                      ) : (
                        <>
                          Verstuur Bericht
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="text-center lg:text-left mb-8">
                <h2 className="text-3xl font-bold mb-4">Contactgegevens</h2>
                <p className="text-muted-foreground">
                  Kies de manier die het beste bij u past om contact met ons op te nemen.
                </p>
              </div>

              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-card border-0 shadow-corporate hover:shadow-primary transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">{info.title}</h3>
                        <p className="text-primary font-medium mb-1">{info.content}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Quick Response Promise */}
              <Card className="bg-gradient-primary text-white border-0">
                <CardContent className="p-6 text-center">
                  <Clock className="w-12 h-12 mx-auto mb-4 opacity-80" />
                  <h3 className="text-xl font-bold mb-2">Snelle Reactie</h3>
                  <p className="opacity-90">
                    Wij streven ernaar om binnen 24 uur te reageren op uw bericht. 
                    Voor urgente zaken kunt u ons altijd bellen.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                Veelgestelde <span className="text-primary">Vragen</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Heeft u nog vragen? Hier vindt u antwoorden op de meest gestelde vragen.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  question: "Hoe lang duurt een typisch project?",
                  answer: "De duur hangt af van de complexiteit, maar de meeste projecten duren 2-12 weken."
                },
                {
                  question: "Bieden jullie ondersteuning na oplevering?",
                  answer: "Ja, wij bieden verschillende ondersteuningspakketten voor na de oplevering."
                },
                {
                  question: "Werken jullie met kleine bedrijven?",
                  answer: "Absoluut! Wij werken met bedrijven van alle groottes, van startups tot enterprises."
                },
                {
                  question: "Kunnen jullie bestaande systemen integreren?",
                  answer: "Ja, wij zijn gespecialiseerd in het integreren van nieuwe oplossingen met bestaande systemen."
                }
              ].map((faq, index) => (
                 <Card key={index} className="bg-card border-0 shadow-corporate hover:shadow-primary transition-all duration-300 group">
                   <CardContent className="p-6">
                     <h3 className="text-lg font-semibold mb-3 text-primary group-hover:text-primary/80 transition-colors">{faq.question}</h3>
                     <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                   </CardContent>
                 </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Klaar om te <span className="text-primary">Starten</span>?
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Laten we uw ideeën omzetten in werkelijke oplossingen. 
              Neem vandaag nog contact op voor een vrijblijvend gesprek.
            </p>
             <Button variant="hero" size="lg" className="text-lg px-8 py-4" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
               Scroll naar Formulier
               <ArrowRight className="ml-2 h-5 w-5" />
             </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;