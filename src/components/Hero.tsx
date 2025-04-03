
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
          <div className="hidden md:flex justify-end relative">
            <div className="w-full h-80 relative overflow-hidden rounded-xl shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1551248429-40975aa4de74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2090&q=80" 
                alt="Femmes au marché" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-800/30 to-transparent"></div>
            </div>
            <div className="absolute bottom-5 right-5 w-32 h-32 bg-amber-50 rounded-full overflow-hidden shadow-lg border-4 border-amber-100">
              <img 
                src="https://images.unsplash.com/photo-1583922146233-a56c6d9f0b43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2187&q=80" 
                alt="Panier de fruits" 
                className="w-full h-full object-cover"
              />
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
