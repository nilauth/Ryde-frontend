import { cn } from "@/lib/utils";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { UserNav } from "./UserNav";

const ConducteurNavigation = ({ isAuth }: { isAuth: boolean }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(isAuth);

  const { pathname } = useLocation();

  const activeRoute = pathname.split("/").at(-1);

  const routes = [
    {
      slug: "creer-offre",
      label: "Créer offre",
    },
    {
      slug: "mes-offres",
      label: "Mes Offres",
    },
    {
      slug: "historique-voyages",
      label: "Historique des voyages",
    },
  ];
  return (
    <nav className="bg-white shadow">
      <div className="mx-auto container px-2 sm:px-6">
        <div className="relative flex h-16 justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>

              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>

              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Link className="flex items-center gap-2 font-semibold" to="/">
                <img src="/src/assets/ribe.svg" className="h-8 w-8" />
                <span className="text-2xl">Ryde</span>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8 w-full lg:justify-around lg:px-28">
              {/* <Link
                to='#'
                className='inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900'
              >
                Mes reservations
              </Link>
              <Link
                to='#'
                className='inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700'
              >
                Historique des voyages
              </Link>
              <Link
                to='#'
                className='inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700'
              >
                Recherche d'offres
              </Link> */}
              {routes.map((route) => {
                return (
                  <Link
                    key={route.slug}
                    to={route.slug}
                    className={cn(
                      "inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300",
                      {
                        "border-indigo-500 text-gray-700 hover:border-indigo-500":
                          activeRoute === route.slug,
                      }
                    )}
                  >
                    {route.label}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* <button
              type='button'
              className='rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
            >
              <span className='sr-only'>View notifications</span>
              <svg
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0'
                />
              </svg>
            </button> */}

            <div className="relative ml-3">
              <UserNav />
            </div>
          </div>
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 pb-4 pt-2">
          <Link
            to="#"
            className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
          >
            Mes reservations
          </Link>
          <Link
            to="#"
            className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
          >
            Historique de voyages
          </Link>
          <Link
            to="#"
            className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
          >
            Recherche d'offres
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default ConducteurNavigation;
