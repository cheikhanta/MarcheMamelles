
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Sample product data with pricing per unit
const products = [
  {
    id: 1,
    name: "Tomates Fraîches",
    price: 1200,
    image: "https://images.unsplash.com/photo-1518977822534-7049a61ee0c2?auto=format&fit=crop&w=2070&q=80",
    category: "Légumes",
    unit: "kg"
  },
  {
    id: 2,
    name: "Carottes Bio",
    price: 800,
    image: "https://images.unsplash.com/photo-1447175008436-054170c2e979?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2999&q=80",
    category: "Légumes",
    unit: "kg"
  },
  {
    id: 3,
    name: "Oranges Juteuses",
    price: 1500,
    image: "https://images.unsplash.com/photo-1547514701-42782101795e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2187&q=80",
    category: "Fruits",
    unit: "kg"
  },
  {
    id: 4,
    name: "Jus d'Ananas",
    price: 1500,
    image: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?auto=format&fit=crop&w=2071&q=80",
    category: "Jus",
    unit: "L"
  },
  {
    id: 5,
    name: "Amandes Séchées",
    price: 3500,
    image: "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&w=2070&q=80",
    category: "Fruits Secs",
    unit: "kg"
  },
  {
    id: 18,
    name: "Arachides",
    price: 2800,
    image: "https://images.unsplash.com/photo-1567892737950-30c4db37cd89?auto=format&fit=crop&w=2070&q=80",
    category: "Fruits Secs",
    unit: "kg"
  },
  {
    id: 16,
    name: "Jus d'Orange",
    price: 1500,
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2187&q=80",
    category: "Jus",
    unit: "L"
  },
  {
    id: 13,
    name: "Mangues",
    price: 2000,
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    category: "Fruits",
    unit: "kg"
  }
];

// Updated categories without "Tomates"
const categories = ["Tous", "Légumes", "Fruits", "Jus", "Fruits Secs"];

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
