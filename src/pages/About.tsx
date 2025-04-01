
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";

const About = () => {
  const values = [
    {
      title: "Fraîcheur",
      description: "Nous garantissons la fraîcheur de tous nos produits, livrés directement des fermiers à votre table."
    },
    {
      title: "Qualité",
      description: "Nous sélectionnons rigoureusement les meilleurs produits pour vous offrir une qualité exceptionnelle."
    },
    {
      title: "Local",
      description: "Nous travaillons avec des producteurs locaux pour soutenir l'économie locale et réduire notre empreinte écologique."
    },
    {
      title: "Service",
      description: "Nous nous engageons à offrir un service client exceptionnel et une expérience d'achat agréable."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <div className="bg-gradient-to-r from-leafgreen/10 to-tomato/10 py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">À Propos de Nous</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez l'histoire de Marche Mamelles et notre engagement envers la qualité et la fraîcheur.
            </p>
          </div>
        </div>
        
        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Notre Histoire</h2>
                <p className="text-gray-600 mb-4">
                  Marche Mamelles a été fondé avec une mission simple : apporter des produits frais et de qualité directement des producteurs aux consommateurs. Situé derrière l'école Saint-Matte, notre marché combine les traditions du commerce local avec la commodité des achats en ligne.
                </p>
                <p className="text-gray-600 mb-4">
                  En tant que membre du groupe Mitson, nous sommes fiers de notre engagement envers la qualité et le service client. Notre équipe travaille sans relâche pour sélectionner les meilleurs produits et vous les livrer dans les meilleures conditions.
                </p>
                <p className="text-gray-600">
                  Aujourd'hui, Marche Mamelles est devenu une référence pour les amateurs de produits frais au Sénégal, offrant une large gamme de tomates, légumes, fruits, jus naturels et fruits secs.
                </p>
              </div>
              
              <div className="relative">
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80" 
                    alt="Fresh market" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-1/2 rounded-lg overflow-hidden shadow-xl hidden md:block">
                  <img 
                    src="https://images.unsplash.com/photo-1557844352-761f2f84d3c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="Farmers market" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Nos Valeurs</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Ces principes guident tout ce que nous faisons chez Marche Mamelles
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-tomato/10 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="text-tomato" />
                  </div>
                  <h3 className="font-bold text-xl mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Our Team */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Notre Équipe</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Rencontrez les personnes passionnées qui font de Marche Mamelles une réalité
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1961&q=80" 
                    alt="Team member" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-lg">Marie Diop</h3>
                <p className="text-gray-600">Fondatrice & Directrice</p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2187&q=80" 
                    alt="Team member" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-lg">Amadou Sall</h3>
                <p className="text-gray-600">Responsable des Achats</p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2187&q=80" 
                    alt="Team member" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-lg">Fatou Ndiaye</h3>
                <p className="text-gray-600">Responsable Clientèle</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
