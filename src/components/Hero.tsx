
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-leafgreen/10 to-tomato/10 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-leafgreen">Frais</span> et{" "}
              <span className="text-tomato">Naturel</span>, Directement à Votre Porte
            </h1>
            <p className="text-gray-600 text-lg md:text-xl mt-4 mb-6">
              Des tomates fraîches, des légumes, des fruits et des jus naturels 
              livrés de notre marché à votre cuisine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                className="bg-tomato hover:bg-tomato/90 text-white px-6 py-2 rounded-full text-lg"
                asChild
              >
                <Link to="/products">
                  Nos Produits
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                className="border-leafgreen text-leafgreen hover:bg-leafgreen/10 px-6 py-2 rounded-full text-lg"
                asChild
              >
                <Link to="/contact">
                  Contactez-nous
                </Link>
              </Button>
            </div>
          </div>
          <div className="hidden md:flex justify-end">
            <div className="relative w-full h-80">
              <div className="absolute top-0 left-0 w-32 h-32 bg-tomato/20 rounded-full animate-bounce-slow" style={{ animationDelay: '0.2s' }}></div>
              <div className="absolute top-20 right-16 w-48 h-48 bg-leafgreen/20 rounded-full animate-bounce-slow" style={{ animationDelay: '0.7s' }}></div>
              <div className="absolute bottom-0 left-20 w-40 h-40 bg-fruitorange/20 rounded-full animate-bounce-slow" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute bottom-10 right-0 w-28 h-28 bg-nutbrown/20 rounded-full animate-bounce-slow" style={{ animationDelay: '0.9s' }}></div>
              <div className="absolute top-10 left-40 w-36 h-36 bg-berryblue/20 rounded-full animate-bounce-slow" style={{ animationDelay: '0.3s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
