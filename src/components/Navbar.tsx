
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-amber-50 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo (moved to left) */}
          <div className="flex flex-col items-start">
            <Link to="/" className="text-left">
              <div className="text-2xl font-bold text-amber-900">MARCHE MAMELLES</div>
              <div className="flex items-center text-sm text-amber-800">
                <span className="font-medium mr-1">By</span>
                <span className="font-bold">MITSON GROUP</span>
              </div>
            </Link>
          </div>
          
          {/* Center section */}
          <div className="hidden md:flex items-center justify-center space-x-8">
            <Link to="/" className="text-amber-800 hover:text-amber-600 font-medium transition-colors">
              Accueil
            </Link>
            <Link to="/products" className="text-amber-800 hover:text-amber-600 font-medium transition-colors">
              Produits
            </Link>
            <Link to="/about" className="text-amber-800 hover:text-amber-600 font-medium transition-colors">
              À propos
            </Link>
            <Link to="/contact" className="text-amber-800 hover:text-amber-600 font-medium transition-colors">
              Contact
            </Link>
          </div>

          {/* Right side with Mobile Menu Button and Cart */}
          <div className="flex items-center gap-4">
            <Button className="bg-amber-700 hover:bg-amber-800 text-amber-50 rounded-full flex items-center gap-2 md:px-4 px-2">
              <ShoppingCart size={18} />
              <span className="hidden md:inline">Panier (0)</span>
            </Button>
            
            <div className="md:hidden">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={toggleMenu}
                aria-label="Toggle menu"
                className="text-amber-800"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-amber-800 hover:text-amber-600 font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link 
                to="/products" 
                className="text-amber-800 hover:text-amber-600 font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Produits
              </Link>
              <Link 
                to="/about" 
                className="text-amber-800 hover:text-amber-600 font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                À propos
              </Link>
              <Link 
                to="/contact" 
                className="text-amber-800 hover:text-amber-600 font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
