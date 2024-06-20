import React from "react";

const ContactPage = () => {
  return (
    <main className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <section className="container mx-auto py-16 px-4 md:px-6 lg:py-24">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
          Nous Contacter
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Si vous avez des questions, des commentaires ou des préoccupations,
          n'hésitez pas à nous contacter. Remplissez simplement le formulaire
          ci-dessous et nous vous répondrons dès que possible.
        </p>

        <form className="max-w-lg mx-auto">
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Nom
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Votre nom"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Votre email"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Votre message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Envoyer
          </button>
        </form>
      </section>
    </main>
  );
};

export default ContactPage;
