
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
      {/* Traditional Senegalese market background */}
      <div className="fixed inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1551248429-40975aa4de74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2090&q=80" 
          alt="Marché traditionnel sénégalais" 
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-amber-900/30 mix-blend-multiply"></div>
      </div>
      
      <Navbar />
      
      <main className="flex-grow relative z-10">
        {/* Header - with semi-transparent background */}
        <div className="bg-amber-800/80 py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4 text-amber-50">À Propos de Nous</h1>
            <p className="text-amber-100 max-w-2xl mx-auto">
              Découvrez l'histoire de notre marché traditionnel et notre engagement envers la qualité et la fraîcheur.
            </p>
          </div>
        </div>
        
        {/* Our Story - with semi-transparent background */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-amber-50/95 p-8 rounded-lg shadow-lg">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-amber-800">Notre Histoire</h2>
                <p className="text-amber-700 mb-4">
                  Notre marché a été fondé avec une mission simple : apporter des produits frais et de qualité directement des producteurs aux consommateurs. Situé derrière l'école Saint-Matte, notre marché combine les traditions du commerce local avec la commodité des achats en ligne.
                </p>
                <p className="text-amber-700 mb-4">
                  En tant que membre du groupe Mitson, nous sommes fiers de notre engagement envers la qualité et le service client. Notre équipe travaille sans relâche pour sélectionner les meilleurs produits et vous les livrer dans les meilleures conditions.
                </p>
                <p className="text-amber-700">
                  Aujourd'hui, notre marché est devenu une référence pour les amateurs de produits frais au Sénégal, offrant une large gamme de tomates, légumes, fruits, jus naturels et fruits secs.
                </p>
              </div>
              
              <div className="relative">
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80" 
                    alt="Produits du marché" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-1/2 rounded-lg overflow-hidden shadow-xl hidden md:block">
                  <img 
                    src="https://images.unsplash.com/photo-1530171538224-a6f4ffa6e826?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="Marché traditionnel" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values - with semi-transparent background */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 bg-amber-800/90 py-8 rounded-t-lg">
              <h2 className="text-3xl font-bold mb-4 text-amber-50">Nos Valeurs</h2>
              <p className="text-amber-100 max-w-2xl mx-auto">
                Ces principes guident tout ce que nous faisons
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-amber-50/95 p-8 rounded-b-lg shadow-lg">
              {values.map((value, index) => (
                <div key={index} className="bg-white/95 p-6 rounded-lg shadow-md border border-amber-100">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="text-amber-700" />
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-amber-800">{value.title}</h3>
                  <p className="text-amber-700">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Our Team - with semi-transparent background */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 bg-amber-800/90 py-8 rounded-t-lg">
              <h2 className="text-3xl font-bold mb-4 text-amber-50">Notre Équipe</h2>
              <p className="text-amber-100 max-w-2xl mx-auto">
                Rencontrez les personnes passionnées qui font de notre marché une réalité
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto bg-amber-50/95 p-8 rounded-b-lg shadow-lg">
              <div className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-amber-200">
                  <img 
                    src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1961&q=80" 
                    alt="Membre de l'équipe" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-lg text-amber-800">Marie Diop</h3>
                <p className="text-amber-700">Fondatrice & Directrice</p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-amber-200">
                  <img 
                    src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2187&q=80" 
                    alt="Membre de l'équipe" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-lg text-amber-800">Amadou Sall</h3>
                <p className="text-amber-700">Responsable des Achats</p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-amber-200">
                  <img 
                    src="https://images.unsplash.com/photo-1589156280159-27698a70f29e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2187&q=80" 
                    alt="Membre de l'équipe" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-lg text-amber-800">Fatou Ndiaye</h3>
                <p className="text-amber-700">Responsable Clientèle</p>
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
