
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import AboutSection from "@/components/AboutSection";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Categories />
        <FeaturedProducts />
        <AboutSection />
        
        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-tomato/10 to-leafgreen/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Contactez-Nous</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Des questions ou des commandes spéciales ? N'hésitez pas à nous contacter !
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-tomato/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-tomato" />
                </div>
                <h3 className="font-bold mb-2">Adresse</h3>
                <p className="text-gray-600">Derrière l'école Saint-Matte</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-leafgreen/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="text-leafgreen" />
                </div>
                <h3 className="font-bold mb-2">Téléphone</h3>
                <p className="text-gray-600">+221 XX XXX XX XX</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-fruitorange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-fruitorange" />
                </div>
                <h3 className="font-bold mb-2">Email</h3>
                <p className="text-gray-600">contact@marchemamelles.sn</p>
              </div>
            </div>
            
            <div className="text-center mt-10">
              <Button 
                className="bg-tomato hover:bg-tomato/90 text-white px-6 py-2 rounded-full"
                asChild
              >
                <Link to="/contact">
                  Contactez-Nous
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
