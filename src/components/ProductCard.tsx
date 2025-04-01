
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const ProductCard = ({ id, name, price, image, category }: ProductCardProps) => {
  return (
    <div className="product-card bg-white">
      <div className="relative overflow-hidden">
        <div className="absolute top-2 right-2 z-10 bg-white px-2 py-1 rounded-full text-xs font-medium">
          {category}
        </div>
        <div className="h-48 overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="product-image w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1">{name}</h3>
        <div className="flex justify-between items-center mt-2">
          <span className="text-tomato font-bold">{price.toLocaleString()} FCFA</span>
          <Button className="bg-leafgreen hover:bg-leafgreen/90 h-9 w-9 p-0 rounded-full">
            <ShoppingCart size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
