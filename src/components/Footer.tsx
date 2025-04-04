
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="flex flex-col">
                <div className="flex items-center">
                  <span className="text-xl font-bold text-tomato">Marche</span>
                  <span className="text-xl font-bold text-leafgreen ml-1">Mamelles</span>
                  <span className="text-sm font-bold text-fruitorange">.sn</span>
                </div>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              Votre marché en ligne de produits frais, fruits, légumes et jus naturels.
            </p>
            <p className="text-gray-600 font-bold flex items-center">
              <span>By</span>
              <img 
                src="/lovable-uploads/mitson-logo.png" 
                alt="MITSON GROUP" 
                className="ml-2 h-6" 
              />
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contactez-nous</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="text-tomato mr-2" size={18} />
                <span className="text-gray-600">Derrière l'école CEMAD</span>
              </div>
              <div className="flex items-center">
                <Phone className="text-tomato mr-2" size={18} />
                <span className="text-gray-600">+221 78 105 42 01</span>
              </div>
              <div className="flex items-center">
                <Mail className="text-tomato mr-2" size={18} />
                <span className="text-gray-600">contact@marchemamelles.sn</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Liens rapides</h3>
            <div className="space-y-2">
              <div>
                <Link to="/" className="text-gray-600 hover:text-tomato transition-colors">
                  Accueil
                </Link>
              </div>
              <div>
                <Link to="/products" className="text-gray-600 hover:text-tomato transition-colors">
                  Nos produits
                </Link>
              </div>
              <div>
                <Link to="/about" className="text-gray-600 hover:text-tomato transition-colors">
                  À propos
                </Link>
              </div>
              <div>
                <Link to="/contact" className="text-gray-600 hover:text-tomato transition-colors">
                  Contact
                </Link>
              </div>
              <div>
                <Link to="/login" className="text-gray-600 hover:text-tomato transition-colors">
                  Créer un compte
                </Link>
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="text-lg font-bold mb-3">Suivez-nous</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-tomato transition-colors">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-gray-600 hover:text-tomato transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-gray-600 hover:text-tomato transition-colors">
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-10 pt-6 text-center">
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} Marche Mamelles. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
