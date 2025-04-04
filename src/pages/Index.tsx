
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
        <section className="py-16 african-women-bg text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Contactez-Nous</h2>
              <p className="text-gray-100 max-w-2xl mx-auto">
                Des questions ou des commandes spéciales ? N'hésitez pas à nous contacter !
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-tomato/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-white" />
                </div>
                <h3 className="font-bold mb-2">Adresse</h3>
                <p className="text-gray-100">Derrière l'école CEMAD</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-leafgreen/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="text-white" />
                </div>
                <h3 className="font-bold mb-2">Téléphone</h3>
                <p className="text-gray-100">+221 78 105 42 01</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-fruitorange/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-white" />
                </div>
                <h3 className="font-bold mb-2">Email</h3>
                <p className="text-gray-100">contact@marchemamelles.sn</p>
              </div>
            </div>
            
            <div className="text-center mt-10">
              <Button 
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/50 px-6 py-2 rounded-full"
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
