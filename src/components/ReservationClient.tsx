import { Link } from "react-router-dom";

export default function ReservationClient() {
  return (
    <section className=" dark:bg-gray-800 h-80 bg-yellow-300">
      {/* <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
        Trouvez votre{" "}
        <span className="ml-4 font-cormorant italic font-bold md:text-7xl">
          prochain trajet
        </span>
      </h2> */}
      <div className="h-full">
        <section className="relative z-0 h-full bg-yellow-300 pt-24">
          <div className="w-full px-4 h-full">
            <div className="text-center">
              <Link
                className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 items-center justify-center text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900 before:absolute before:inset-0 hover:before:bg-slate-900 before:-z-10 before:transition-colors before:duration-500 group"
                to="/register"
              >
                <span className="relative p-0.5 rounded-full bg-slate-200 transition duration-500 overflow-hidden flex items-center justify-center before:opacity-0 group-hover:before:opacity-100 before:absolute before:w-1/2 before:pb-[100%] before:bg-[linear-gradient(90deg,_theme(colors.indigo.500/0)_0%,_theme(colors.indigo.500)_35%,_theme(colors.indigo.200)_50%,_theme(colors.indigo.500)_65%,_theme(colors.indigo.500/0)_100%)] before:animate-[spin_3s_linear_infinite]">
                  <span className="relative whitespace-nowrap">
                    <span className="block px-8 py-6 rounded-full bg-gradient-to-r from-slate-200 to-slate-100 z-10 group-hover:opacity-0 transition-opacity duration-500 ease-in-out">
                      Reserver votre prochain voyage
                    </span>

                    <span
                      className="font-cormorant italic absolute inset-0 rounded-full bg-gradient-to-r from-slate-900 to-slate-800 z-10 inline-flex items-center whitespace-nowrap overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 before:bg-clip-text before:text-transparent before:bg-gradient-to-r before:from-indigo-500 before:to-indigo-300 after:bg-clip-text after:text-transparent after:bg-gradient-to-r after:from-indigo-500 after:to-indigo-300 before:content-['Créer_votre_compte_Ryde_dès_maintenant'] after:content-['Créer_votre_compte_Ryde_dès_maintenant'] before:px-2 after:px-2 before:animate-infinite-scroll after:animate-infinite-scroll font-extrabold"
                      aria-hidden="true"
                    ></span>
                  </span>
                </span>

                <span className="group-hover:text-slate-900 transition-colors duration-500 ease-in-out font-cormorant text-7xl">
                  Avec Ryde
                </span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
