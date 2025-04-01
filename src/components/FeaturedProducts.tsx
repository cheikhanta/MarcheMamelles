
import { useState } from "react";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Sample product data
const products = [
  {
    id: 1,
    name: "Tomates Fraîches",
    price: 1200,
    image: "https://images.unsplash.com/photo-1562617452-b3a0901c3f83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Tomates"
  },
  {
    id: 2,
    name: "Carottes Bio",
    price: 800,
    image: "https://images.unsplash.com/photo-1447175008436-054170c2e979?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2999&q=80",
    category: "Légumes"
  },
  {
    id: 3,
    name: "Oranges Juteuses",
    price: 1500,
    image: "https://images.unsplash.com/photo-1547514701-42782101795e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2187&q=80",
    category: "Fruits"
  },
  {
    id: 4,
    name: "Jus d'Ananas",
    price: 2000,
    image: "https://images.unsplash.com/photo-1596392301391-8a8641869abd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    category: "Jus"
  },
  {
    id: 5,
    name: "Amandes Séchées",
    price: 3500,
    image: "https://images.unsplash.com/photo-1574723507015-7c5a74f4abb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Fruits Secs"
  },
  {
    id: 6,
    name: "Tomates Cerises",
    price: 1800,
    image: "https://images.unsplash.com/photo-1592924357229-3cd69c11f822?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Tomates"
  },
  {
    id: 7,
    name: "Poivrons Multicolores",
    price: 1200,
    image: "https://images.unsplash.com/photo-1520136062128-83af875f5e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2187&q=80",
    category: "Légumes"
  },
  {
    id: 8,
    name: "Jus de Fruits Rouges",
    price: 2500,
    image: "https://images.unsplash.com/photo-1638439430466-b65db9ba96a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    category: "Jus"
  }
];

const categories = ["Tous", "Tomates", "Légumes", "Fruits", "Jus", "Fruits Secs"];

const FeaturedProducts = () => {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filteredProducts = activeCategory === "Tous" 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nos Produits Populaires</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez notre sélection de produits frais et de qualité, directement des fermiers à votre table.
          </p>
        </div>

        <Tabs defaultValue="Tous" className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-2 mb-8 bg-transparent">
            {categories.map((category) => (
              <TabsTrigger 
                key={category} 
                value={category}
                className="px-4 py-2 rounded-full border data-[state=active]:bg-tomato data-[state=active]:text-white"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent 
              key={category} 
              value={category}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {(category === "Tous" 
                ? products 
                : products.filter(product => product.category === category)).map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </TabsContent>
          ))}
        </Tabs>

        <div className="text-center mt-12">
          <Button 
            className="bg-leafgreen hover:bg-leafgreen/90 text-white px-6 py-2 rounded-full"
            asChild
          >
            <Link to="/products">
              Voir Tous Nos Produits
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
