
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
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="flex items-center">
                <span className="text-sm font-medium text-amber-800 mr-2">By</span>
                <span className="text-lg font-bold text-amber-900">MITSON GROUP</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
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
            <Button className="bg-amber-700 hover:bg-amber-800 text-amber-50 rounded-full flex items-center gap-2">
              <ShoppingCart size={18} />
              <span>Panier (0)</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
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
              <Button className="bg-amber-700 hover:bg-amber-800 text-amber-50 rounded-full flex items-center gap-2 w-full justify-center">
                <ShoppingCart size={18} />
                <span>Panier (0)</span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
