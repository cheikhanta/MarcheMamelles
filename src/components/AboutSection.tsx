
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const AboutSection = () => {
  const benefits = [
    "Produits 100% frais et naturels",
    "Directement des producteurs locaux",
    "Livraison rapide",
    "Qualité garantie"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">À Propos de Marche Mamelles</h2>
            <p className="text-gray-600 mb-4">
              Marche Mamelles est votre destination en ligne pour des produits frais, 
              directement des fermiers à votre table. Nous proposons une variété de tomates, 
              légumes, fruits, jus naturels et fruits secs de la plus haute qualité.
            </p>
            <p className="text-gray-600 mb-6">
              Situé derrière l'école Saint-Matte, notre marché combine les traditions du 
              commerce local avec la commodité des achats en ligne.
            </p>
            
            <div className="space-y-3 mb-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="text-leafgreen mr-2" size={20} />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
            
            <Button 
              className="bg-tomato hover:bg-tomato/90 text-white px-6 py-2 rounded-full"
              asChild
            >
              <Link to="/about">
                En Savoir Plus
              </Link>
            </Button>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-lg grid grid-cols-2 gap-2">
            <div className="col-span-2">
              <img 
                src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Fresh vegetables" 
                className="w-full h-48 object-cover"
              />
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Fresh fruits" 
                className="w-full h-32 object-cover"
              />
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2187&q=80" 
                alt="Natural juices" 
                className="w-full h-32 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
