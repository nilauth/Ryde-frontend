import { cn } from "@/lib/utils";
import { Blend, Car, CircleUser, CreditCard, PieChart, Settings, SquareUser, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export function SidebarNav() {
  const { pathname } = useLocation();

  const links = [
    { to: "/admin/dashboard/overview", icon: Blend, text: "Aperçu général" },
    { to: "/admin/dashboard/profile", icon: User, text: "Profil Administrateur" },
    { to: "/admin/dashboard/settings", icon: Settings, text: "Paramètres" },
    { to: "/admin/dashboard/analytics", icon: PieChart, text: "Statistiques" },
    { to: "/admin/dashboard/rides", icon: Car, text: "Trajets" },
    { to: "/admin/dashboard/drivers", icon: CircleUser, text: "Conducteurs" },
    { to: "/admin/dashboard/clients", icon: SquareUser, text: "Clients" },
    { to: "/admin/dashboard/payments", icon: CreditCard, text: "Paiements" },
  ];

  return (
    <nav className='grid items-start px-4 text-sm font-medium'>
      {links.map((link, index) => (
        <Link
          key={index}
          className={cn(
            "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50",
            pathname === link.to && "bg-gray-100 text-gray-900"
          )}
          to={link.to}
        >
          <link.icon className='h-4 w-4' />
          {link.text}
        </Link>
      ))}
    </nav>
  );
}
