import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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
  const location = useLocation();

  // Auto-scroll to contact form when hash is present
  useEffect(() => {
    if (location.hash === '#contact-form') {
      setTimeout(() => {
        const element = document.getElementById('contact-form');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100); // Small delay to ensure page is fully loaded
    }
  }, [location]);

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

    try {
      const payload = {
        ...formData,
        timestamp: new Date().toISOString(),
        source: 'website-contact-form'
      };

      console.log('Sending to webhook:', payload);

      const response = await fetch('https://n8n.jukotechniek.nl/webhook/9146874b-5160-4c94-9bb9-a507effe89ec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      console.log('Response status:', response.status);
      console.log('Response headers:', response.headers);

                 if (response.ok) {
             const responseText = await response.text();
             console.log('Response body:', responseText);

             toast({
               title: "✅ Bericht succesvol verzonden!",
               description: "Bedankt voor uw bericht. We nemen binnen 24 uur contact met u op.",
               className: "bg-green-50 border-green-200 text-green-800",
             });
        
        // Reset form on success
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          subject: "",
          message: ""
        });
      } else {
        const errorText = await response.text();
        console.error('Error response:', errorText);
        throw new Error(`HTTP ${response.status}: ${errorText}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "❌ Er ging iets mis",
        description: "Het bericht kon niet worden verzonden. Probeer het opnieuw of neem direct contact op via telefoon.",
        variant: "destructive",
        className: "bg-red-50 border-red-200 text-red-800",
      });
    } finally {
      setIsSubmitting(false);
    }
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
      <section className="py-20 bg-gradient-to-b from-gray-200 to-white relative overflow-hidden border-b-2 border-primary">
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Icon */}
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageSquare className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Neem <span className="text-primary">Contact</span> Op
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600">
              Klaar om uw bedrijf te transformeren? Laten we een vrijblijvend gesprek inplannen 
              om uw uitdagingen en mogelijkheden te bespreken.
            </p>
            {/* Gradient line */}
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section id="contact-section" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2" id="contact-form">
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

              {contactInfo.map((info, index) => {
                const getHref = () => {
                  if (info.title === "Email") return `mailto:${info.content}`;
                  if (info.title === "Telefoon") return `tel:${info.content.replace(/\s/g, '')}`;
                  return null;
                };

                const href = getHref();
                const CardComponent = href ? 'a' : 'div';

                return (
                  <CardComponent 
                    key={index} 
                    href={href || undefined}
                    className={`block ${href ? 'cursor-pointer' : ''}`}
                  >
                    <Card className="bg-card border-0 shadow-corporate hover:shadow-primary transition-all duration-300 h-full">
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
                  </CardComponent>
                );
              })}

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
                  question: "Wat kost een gemiddeld project??",
                  answer: "De kosten verschillen per project, maar we werken altijd transparant met duidelijke prijsafspraken."
                },
                {
                  question: "Kunnen jullie bestaande systemen integreren?",
                  answer: "Ja, wij zijn gespecialiseerd in het integreren van nieuwe oplossingen met bestaande systemen."
                }
              ].map((faq, index) => (
                <Card key={index} className="bg-card border-0 shadow-corporate">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3 text-primary">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-700 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Klaar om te <span className="text-primary">Starten</span>?
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Laten we uw ideeën omzetten in werkelijke oplossingen. 
              Neem vandaag nog contact op voor een vrijblijvend gesprek.
            </p>
            <Button variant="hero" size="lg" className="text-lg px-8 py-4" asChild>
              <Link to="/contact#contact-form">
                Ga naar Formulier
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;