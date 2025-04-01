
import CategoryCard from "./CategoryCard";

const categories = [
  {
    title: "Tomates",
    image: "https://images.unsplash.com/photo-1592924357229-3cd69c11f822?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    color: "tomato",
    link: "/products?category=tomates"
  },
  {
    title: "Légumes",
    image: "https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    color: "leafgreen",
    link: "/products?category=legumes"
  },
  {
    title: "Fruits",
    image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    color: "fruitorange",
    link: "/products?category=fruits"
  },
  {
    title: "Jus Naturels",
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2187&q=80",
    color: "berryblue",
    link: "/products?category=jus"
  },
  {
    title: "Fruits Secs",
    image: "https://images.unsplash.com/photo-1574723507015-7c5a74f4abb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    color: "nutbrown",
    link: "/products?category=fruits-secs"
  }
];

const Categories = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nos Catégories de Produits</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explorez notre large gamme de produits frais organisés par catégories
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
