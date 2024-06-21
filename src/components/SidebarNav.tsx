import { cn } from "@/lib/utils";
import UserService from "@/services/userService";
import {
  Blend,
  Car,
  CreditCard,
  UserPlus,
  Users,
  UsersRound,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export function SidebarNav() {
  const { pathname } = useLocation();

  const [nombreDemandes, setNombreDemandes] = useState(0);

  useEffect(() => {
    const fetchDemandes = async () => {
      try {
        const token = localStorage.getItem("token") || "";
        const res = await UserService.getAllDemandes(token);
        // setNombreDemandes only if status is 'pending'
        const demandes = res.filter((demande) => demande.status === "pending");
        setNombreDemandes(demandes.length);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDemandes();
  }, []);
  const links = [
    { to: "/admin/dashboard", icon: Blend, text: "Aperçu général" },
    {
      to: "/admin/dashboard/clients",
      icon: Users,
      text: "Liste des clients",
    },
    {
      to: "/admin/dashboard/drivers",
      icon: UsersRound,
      text: "Liste des conducteurs",
    },
    {
      to: "/admin/dashboard/rides",
      icon: Car,
      text: "Trajets effectués",
    },
    {
      to: "/admin/dashboard/payments",
      icon: CreditCard,
      text: "Historique des payements",
    },
    {
      to: "/admin/dashboard/demande-conducteur",
      icon: UserPlus,
      text: "Demandes conducteur",
    },
    // { to: "/admin/dashboard/profile", icon: User, text: "Profil Administrateur" },
    // { to: "/admin/dashboard/settings", icon: Settings, text: "Paramètres" },
    // { to: "/admin/dashboard/analytics", icon: PieChart, text: "Statistiques" },
  ];

  return (
    <nav className="grid items-start px-4 text-sm font-medium">
      {links.map((link, index) => (
        <Link
          key={index}
          className={cn(
            "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50",
            pathname === link.to && "bg-gray-100 text-gray-900"
          )}
          to={link.to}
        >
          <link.icon className="h-4 w-4" />
          {link.text}
          {link.to === "/admin/dashboard/demande-conducteur" ? (
            <span className="inline-flex items-center justify-center w-5 h-5 ms-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
              {nombreDemandes}
            </span>
          ) : (
            ""
          )}
        </Link>
      ))}
    </nav>
  );
}
