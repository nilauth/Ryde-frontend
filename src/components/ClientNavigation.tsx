import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import UserService from "@/services/userService";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserNav } from "./UserNav";
import { Button } from "./ui/button";

const UserNavigation = ({ isAuth }: { isAuth: boolean }) => {
  const { toast } = useToast();
  const [isLoggedIn, setIsLoggedIn] = useState(isAuth);
  const [currentUser, setCurrentUser] = useState(null);
  const [demandeEnvoye, setDemandeEnvoye] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const user = await UserService.getCurrentUser();
        setCurrentUser(user);
        const demandeEnvoyeKey = `demandeEnvoye_${user.id}`;
        const demandeEnvoyeValue = localStorage.getItem(demandeEnvoyeKey);
        setDemandeEnvoye(demandeEnvoyeValue === "true");
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await UserService.devenirConducteur(
        currentUser.id,
        localStorage.getItem("token") || ""
      );
      const demandeEnvoyeKey = `demandeEnvoye_${currentUser.id}`;
      setDemandeEnvoye(true);
      localStorage.setItem(demandeEnvoyeKey, "true"); // Persist the state for the current user
      toast({
        description: "Votre demande a été envoyée.",
      });
    } catch (error) {
      console.error("Error adding ride:", error);
    }
  };

  const { pathname } = useLocation();
  const activeRoute = pathname.split("/").at(-1);

  const routes = [
    {
      slug: "recherche-offres",
      label: "Recherche d'offres",
    },
    {
      slug: "reservations",
      label: "Mes reservations",
    },
    {
      slug: "historique-voyages",
      label: "Historique des voyages",
    },
    {
      slug: "recharge-compte",
      label: "Recharger votre compte",
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
              {routes.map((route) => (
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
              ))}
            </div>
            {!demandeEnvoye && (
              <div className="h-full flex justify-center items-center w-52">
                <Button onClick={handleSubmit}>Devenir conducteur</Button>
              </div>
            )}
            <div className="flex h-full justify-center items-center px-4 pt-2"></div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="flex items-center space-x-4">
              <UserNav />
            </div>
          </div>
        </div>
      </div>
      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 pb-4 pt-2">
          {routes.map((route) => (
            <Link
              key={route.slug}
              to={route.slug}
              className={cn(
                "block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700",
                {
                  "border-indigo-500 bg-indigo-50 text-indigo-700":
                    activeRoute === route.slug,
                }
              )}
            >
              {route.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

function XIcon(props) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
export default UserNavigation;
