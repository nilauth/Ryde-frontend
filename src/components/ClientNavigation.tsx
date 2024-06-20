import { cn } from "@/lib/utils";
import UserService from "@/services/userService";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { UserNav } from "./UserNav";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Dropdown } from "react-day-picker";
import { BellIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const UserNavigation = ({ isAuth }: { isAuth: boolean }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(isAuth);
  const [demandeEnvoye, setDemandeEnvoye] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const user = await UserService.getCurrentUser();
        setCurrentUser(user);
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
      setDemandeEnvoye(true);
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
            <div className="h-full flex justify-center items-center w-52">
              {demandeEnvoye ? (
                <span className="text-sm">Demande envoyée</span>
              ) : (
                <Button onClick={handleSubmit}>Devenir conducteur</Button>
              )}
            </div>
            <div className="flex h-full justify-center items-center px-4 pt-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="relative">
                    <BellIcon className="w-5 h-5" />
                    <div className="absolute -top-1 -right-1 bg-red-500 text-red-50 rounded-full px-1.5 py-0.5 text-xs font-medium">
                      3
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-80 p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">Notifications</h3>
                    <Button variant="ghost" size="icon">
                      <XIcon className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0">
                        <Avatar className="w-10 h-10 border">
                          <AvatarImage src="/placeholder-user.jpg" />
                          <AvatarFallback>AC</AvatarFallback>
                        </Avatar>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">
                          <Link
                            href="#"
                            className="hover:underline"
                            prefetch={false}
                          >
                            Acme Inc
                          </Link>
                          posted a new update.
                        </p>
                        <p className="text-sm text-muted-foreground">
                          2 minutes ago
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0">
                        <Avatar className="w-10 h-10 border">
                          <AvatarImage src="/placeholder-user.jpg" />
                          <AvatarFallback>AC</AvatarFallback>
                        </Avatar>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">
                          <Link
                            href="#"
                            className="hover:underline"
                            prefetch={false}
                          >
                            Acme Inc
                          </Link>
                          mentioned you in a comment.
                        </p>
                        <p className="text-sm text-muted-foreground">
                          1 hour ago
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0">
                        <Avatar className="w-10 h-10 border">
                          <AvatarImage src="/placeholder-user.jpg" />
                          <AvatarFallback>AC</AvatarFallback>
                        </Avatar>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">
                          <Link
                            href="#"
                            className="hover:underline"
                            prefetch={false}
                          >
                            Acme Inc
                          </Link>
                          shared a new post.
                        </p>
                        <p className="text-sm text-muted-foreground">
                          3 hours ago
                        </p>
                      </div>
                    </div>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
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
