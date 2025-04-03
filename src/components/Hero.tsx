
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-amber-100 to-amber-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-amber-800">Authentique</span> et{" "}
              <span className="text-amber-600">Traditionnel</span>, Directement du Marché
            </h1>
            <p className="text-amber-900 text-lg md:text-xl mt-4 mb-6">
              Des produits frais, des légumes, des fruits et des mets traditionnels 
              soigneusement sélectionnés par nos vendeuses du marché.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                className="bg-amber-700 hover:bg-amber-800 text-amber-50 px-6 py-2 rounded-full text-lg"
                asChild
              >
                <Link to="/products">
                  Nos Produits
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                className="border-amber-700 text-amber-700 hover:bg-amber-100 px-6 py-2 rounded-full text-lg"
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
              <div className="absolute top-0 left-0 w-32 h-32 bg-amber-300/40 rounded-full animate-bounce-slow" style={{ animationDelay: '0.2s' }}></div>
              <div className="absolute top-20 right-16 w-48 h-48 bg-amber-700/30 rounded-full animate-bounce-slow" style={{ animationDelay: '0.7s' }}></div>
              <div className="absolute bottom-0 left-20 w-40 h-40 bg-amber-500/30 rounded-full animate-bounce-slow" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute bottom-10 right-0 w-28 h-28 bg-amber-600/30 rounded-full animate-bounce-slow" style={{ animationDelay: '0.9s' }}></div>
              <div className="absolute top-10 left-40 w-36 h-36 bg-amber-200/40 rounded-full animate-bounce-slow" style={{ animationDelay: '0.3s' }}></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Traditional pattern decoration at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-repeat-x" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"12\" viewBox=\"0 0 40 12\"><path d=\"M0,6 C10,0 10,12 20,6 C30,0 30,12 40,6\" fill=\"none\" stroke=\"%23d97706\" stroke-width=\"1\"/></svg>')" }}></div>
    </div>
  );
};

export default Hero;
