
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Message envoyé avec succès! Nous vous répondrons bientôt.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <div className="bg-gradient-to-r from-leafgreen/10 to-tomato/10 py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Contactez-Nous</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Des questions, des commentaires ou des commandes spéciales ? N'hésitez pas à nous contacter !
            </p>
          </div>
        </div>
        
        {/* Contact Information */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-tomato/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-tomato" />
                </div>
                <h3 className="font-bold mb-2">Adresse</h3>
                <p className="text-gray-600">Derrière l'école CEMAD</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-leafgreen/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="text-leafgreen" />
                </div>
                <h3 className="font-bold mb-2">Téléphone</h3>
                <p className="text-gray-600">+221 78 105 42 01</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-fruitorange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-fruitorange" />
                </div>
                <h3 className="font-bold mb-2">Email</h3>
                <p className="text-gray-600">contact@marchemamelles.sn</p>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Envoyez-nous un message</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nom complet
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="votre@email.com"
                      required
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Téléphone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+221 78 105 42 01"
                    className="w-full"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Comment pouvons-nous vous aider ?"
                    required
                    className="w-full h-32"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-tomato hover:bg-tomato/90 text-white rounded-full py-2 flex items-center justify-center gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Envoi en cours..." : (
                    <>
                      <Send size={16} />
                      Envoyer le message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">Notre Emplacement</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Venez nous rendre visite à notre marché situé derrière l'école CEMAD
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-96 bg-gray-200 flex items-center justify-center">
                <div className="text-center p-6">
                  <MapPin className="w-12 h-12 mx-auto mb-4 text-tomato" />
                  <p className="text-gray-600">
                    Carte interactive bientôt disponible. <br />
                    Notre adresse: Derrière l'école CEMAD
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
