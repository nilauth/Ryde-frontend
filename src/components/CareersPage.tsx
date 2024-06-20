import React from "react";

const CareersPage = () => {
  return (
    <main className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <section className="container mx-auto py-16 px-4 md:px-6 lg:py-24">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
          Carrières chez Ryde
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Rejoignez notre équipe passionnée et contribuez à façonner l'avenir de
          la mobilité.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Exemple de poste */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-2">
              Développeur Full-Stack
            </h2>
            <p className="text-sm text-gray-600 mb-4">Fès, Maroc</p>
            <p className="mb-4">
              Nous recherchons un développeur full-stack talentueux pour
              rejoindre notre équipe et participer au développement de notre
              plateforme de covoiturage.
            </p>
            <a href="#" className="text-blue-500 hover:underline inline-block">
              En savoir plus
            </a>
          </div>

          {/* Exemple de poste */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-2">
              Responsable Marketing
            </h2>
            <p className="text-sm text-gray-600 mb-4">Fès, Maroc</p>
            <p className="mb-4">
              Nous sommes à la recherche d'un responsable marketing créatif et
              dynamique pour diriger nos efforts de marketing et de
              communication.
            </p>
            <a href="#" className="text-blue-500 hover:underline inline-block">
              En savoir plus
            </a>
          </div>

          {/* Exemple de poste */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-2">Designer UX/UI</h2>
            <p className="text-sm text-gray-600 mb-4">Remote</p>
            <p className="mb-4">
              Nous cherchons un designer UX/UI expérimenté pour créer des
              interfaces utilisateur attrayantes et intuitives pour notre
              plateforme.
            </p>
            <a href="#" className="text-blue-500 hover:underline inline-block">
              En savoir plus
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CareersPage;
