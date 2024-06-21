import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";

export default function Apropos() {
  return (
    <main className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <section className="container mx-auto py-16 px-4 md:px-6 lg:py-24">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              À propos de Ryde
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Ryde est une plateforme de covoiturage visant à rendre les trajets
              plus économiques, écologiques et conviviaux. Nous facilitons la
              mise en relation entre conducteurs et passagers pour partager des
              trajets quotidiens ou de longues distances.
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Notre Mission
            </h2>
            <p className="text-lg md:text-xl mb-6">
              Promouvoir un transport durable et accessible en connectant les
              voyageurs pour réduire les coûts, les embouteillages et
              l'empreinte carbone.
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Nos Valeurs</h2>
            <ul className="list-disc pl-5 mb-6">
              <li>
                <strong>Communauté :</strong> Créer des connexions humaines et
                partager des valeurs communes.
              </li>
              <li>
                <strong>Sécurité :</strong> Assurer des trajets sereins grâce à
                des profils vérifiés et des avis.
              </li>
              <li>
                <strong>Durabilité :</strong> Réduire les émissions de CO2 par
                le partage des trajets.
              </li>
              <li>
                <strong>Économie :</strong> Réduire les frais de déplacement
                pour tous.
              </li>
            </ul>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Les avantages du covoiturage
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <WalletIcon className="w-6 h-6 text-primary" />
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-2">
                      Économies de carburant
                    </h3>
                    <p>
                      Partager les frais de carburant permet de réaliser des
                      économies substantielles.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <LeafIcon className="w-6 h-6 text-primary" />
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-2">
                      Réduction de l'empreinte carbone
                    </h3>
                    <p>
                      Réduire le nombre de véhicules sur la route diminue les
                      émissions de gaz à effet de serre.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <UsersIcon className="w-6 h-6 text-primary" />
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-2">
                      Rencontres et connexions
                    </h3>
                    <p>
                      Le covoiturage permet de rencontrer de nouvelles personnes
                      et de créer des liens.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-8 md:gap-12 lg:gap-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Notre équipe
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  {
                    name: "Krami Kamal",
                    avatar: "/avatars/01.png",
                    initials: "KK",
                    quote:
                      "J'ai créé Ryde pour permettre aux gens de se connecter et de réduire leur impact environnemental. Le covoiturage est une solution simple et efficace pour construire une communauté plus durable.",
                  },
                  {
                    name: "Zrira Nizar ",
                    avatar: "/avatars/02.png",
                    initials: "ZN",
                    quote:
                      "Chez Ryde, nous croyons que le covoiturage peut changer la façon dont les gens se déplacent. En partageant nos trajets, nous pouvons construire une communauté plus connectée et plus durable.",
                  },
                  {
                    name: "Anejdam Ayoub",
                    avatar: "/avatars/03.png",
                    initials: "AA",
                    quote:
                      "La mission de Ryde est de rendre le covoiturage accessible et sûr pour tous, tout en réduisant notre empreinte carbone collective.",
                  },
                  {
                    name: "Belhaj Soulami Mehdi",
                    avatar: "/avatars/04.png",
                    initials: "BSM",
                    quote:
                      "Nous voulons transformer chaque trajet en une opportunité de créer des connexions humaines et de contribuer à la durabilité.",
                  },
                  {
                    name: "Meriaf Youness",
                    avatar: "/avatars/05.png",
                    initials: "MY",
                    quote:
                      "Ensemble, nous pouvons faire du covoiturage une norme pour le transport quotidien, bénéfique pour l'économie et l'environnement.",
                  },
                  {
                    name: "Bennani Baiti Mohammed Amine",
                    avatar: "/avatars/06.png",
                    initials: "BBMA",
                    quote:
                      "Ryde est conçu pour offrir une alternative de transport pratique et respectueuse de l'environnement, tout en connectant les gens.",
                  },
                ].map(({ name, avatar, initials, quote }) => (
                  <div key={name} className="flex items-center gap-4">
                    <Avatar className="w-16 h-16 border bg-gray-200">
                      <AvatarImage alt={name} src={avatar} />
                      <AvatarFallback>{initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold">
                        {name}
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Co-fondateur
                      </p>
                      <p>{quote}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function LeafIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function WalletIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    </svg>
  );
}
