import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import jusFruitsRougesImg from "@/assets/jus-fruits-rouges.jpg";
import jusGingembreImg from "@/assets/jus-gingembre.jpg";
import dattesImg from "@/assets/dattes.jpg";

// Updated product data with 5 examples for each category
const allProducts = [
  // Légumes - 5 examples
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
    id: 6,
    name: "Tomates Cerises",
    price: 1800,
    image: "https://images.unsplash.com/photo-1558818498-28c1e002b655?auto=format&fit=crop&w=2070&q=80",
    category: "Légumes",
    unit: "kg"
  },
  {
    id: 7,
    name: "Poivrons Multicolores",
    price: 1200,
    image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=2187&q=80",
    category: "Légumes",
    unit: "kg"
  },
  {
    id: 9,
    name: "Concombres",
    price: 900,
    image: "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    category: "Légumes",
    unit: "kg"
  },

  // Fruits - 5 examples
  {
    id: 3,
    name: "Oranges Juteuses",
    price: 1500,
    image: "https://images.unsplash.com/photo-1547514701-42782101795e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2187&q=80",
    category: "Fruits",
    unit: "kg"
  },
  {
    id: 10,
    name: "Bananes",
    price: 1100,
    image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2127&q=80",
    category: "Fruits",
    unit: "kg"
  },
  {
    id: 13,
    name: "Mangues",
    price: 2000,
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    category: "Fruits",
    unit: "kg"
  },
  {
    id: 14,
    name: "Ananas",
    price: 1800,
    image: "https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    category: "Fruits",
    unit: "kg"
  },
  {
    id: 15,
    name: "Pommes Rouges",
    price: 1700,
    image: "https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Fruits",
    unit: "kg"
  },

  // Jus Naturels - 5 examples
  {
    id: 4,
    name: "Jus d'Ananas",
    price: 1500,
    image: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?auto=format&fit=crop&w=2070&q=80",
    category: "Jus",
    unit: "L"
  },
  {
    id: 8,
    name: "Jus de Fruits Rouges",
    price: 1500,
    image: jusFruitsRougesImg,
    category: "Jus",
    unit: "L"
  },
  {
    id: 12,
    name: "Jus de Mangue",
    price: 1500,
    image: "https://images.unsplash.com/photo-1546173159-315724a31696?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2187&q=80",
    category: "Jus",
    unit: "L"
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
    id: 17,
    name: "Jus de Gingembre",
    price: 1500,
    image: jusGingembreImg,
    category: "Jus",
    unit: "L"
  },

  // Fruits Secs - 5 examples
  {
    id: 5,
    name: "Amandes Séchées",
    price: 3500,
    image: "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&w=2070&q=80",
    category: "Fruits Secs",
    unit: "kg"
  },
  {
    id: 11,
    name: "Noix de Cajou",
    price: 4000,
    image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=1974&q=80",
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
    id: 19,
    name: "Raisins Secs",
    price: 3200,
    image: "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?auto=format&fit=crop&w=2070&q=80",
    category: "Fruits Secs",
    unit: "kg"
  },
  {
    id: 20,
    name: "Dattes",
    price: 3000,
    image: dattesImg,
    category: "Fruits Secs",
    unit: "kg"
  }
];

// Updated categories without "Tomates"
const categories = ["Tous", "Légumes", "Fruits", "Jus", "Fruits Secs"];

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("Tous");
  const location = useLocation();

  useEffect(() => {
    // Check if there's a category in the URL query params
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get("category");
    
    if (categoryParam) {
      // Map URL param to category name
      const categoryMap: Record<string, string> = {
        "legumes": "Légumes",
        "fruits": "Fruits",
        "jus": "Jus",
        "fruits-secs": "Fruits Secs"
      };
      
      const mappedCategory = categoryMap[categoryParam];
      if (mappedCategory && categories.includes(mappedCategory)) {
        setActiveCategory(mappedCategory);
      }
    }
  }, [location]);

  // Filter products based on search term and category
  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "Tous" || product.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <div className="bg-gradient-to-r from-leafgreen/10 to-tomato/10 py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Nos Produits</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez notre large sélection de produits frais, directement de notre marché à votre cuisine.
            </p>
          </div>
        </div>
        
        {/* Products Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {/* Search Bar */}
            <div className="max-w-md mx-auto mb-8">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Rechercher un produit..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full rounded-full border border-gray-300 focus:border-tomato focus:ring-1 focus:ring-tomato"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
            
            {/* Category Tabs */}
            <Tabs defaultValue={activeCategory} value={activeCategory} onValueChange={setActiveCategory} className="w-full">
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
              
              <TabsContent value={activeCategory} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <ProductCard key={product.id} {...product} />
                  ))
                ) : (
                  <div className="col-span-full text-center py-12">
                    <p className="text-lg text-gray-600">Aucun produit trouvé pour votre recherche.</p>
                    <Button 
                      variant="outline" 
                      className="mt-4"
                      onClick={() => {
                        setSearchTerm("");
                        setActiveCategory("Tous");
                      }}
                    >
                      Réinitialiser les filtres
                    </Button>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Products;
