import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AdminDashboardLayoutPage from "@/admin/pages/adminDashboardLayoutPage";

import AdminProfile from "@/admin/pages/adminProfilePage";
import AnalyticsPage from "@/admin/pages/analyticsPage";
import ClientProfilePage from "@/admin/pages/clientProfilePage";
import ClientsListPage from "@/admin/pages/clientsListPage";
import DashboardOverviewPage from "@/admin/pages/dashboardOverviewPage";
import DriverProfilePage from "@/admin/pages/driverProfilePage";
import DriversListPage from "@/admin/pages/driversListPage";
import PaymentsPage from "@/admin/pages/paymentsPage";
import RideDetailsPage from "@/admin/pages/rideDetailsPage";
import RidesListPage from "@/admin/pages/ridesListPage";
import SettingsPage from "@/admin/pages/settingsPage";
import AcceuilClient from "@/client/pages/acceuilClientPage";
import ReservationClientPage from "@/client/pages/reservationClientPage";
import Error404Page from "@/common/error404Page";
import LoginPage from "@/common/loginPage";
import RegisterPage from "@/common/registerPage";

import ClientDashboardLayoutPage from "./client/pages/clientDashboardLayoutPage";
import ClientHistoriqueVoyagesPage from "./client/pages/clientHistoriqueVoyagesPage";
import ClientReservationsPage from "./client/pages/clientReservationsPage";
import TestPage from "./client/pages/testPage";
import TrajetDetailsPage from "./client/pages/trajetDetailsPage";
import AjouterTrajetPage from "./conducteur/ajouterTrajetPage";
import ClientRechercheOffresPage from "./client/pages/clientRechercheOffresPage";
import ConducteurDashboardLayoutPage from "./conducteur/conducteurDashboardLayoutPage";
import ConducteurCreerOffre from "./conducteur/conducteurCreerOffre";
import ConducteurMesOffres from "./conducteur/conducteurMesOffres";
import ConducteurHistoriqueVoyages from "./conducteur/conducteurHistoriqueVoyages";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error404Page />, // catch-all 404, due to error bubbling. Works for now, need to catch other types of errors tho
    element: <AcceuilClient />,
  },

  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/test",
    element: <TestPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },

  // course routes
  {
    // path: "/course/ajouter-trajet",
    // element: <AjouterTrajetPage />,
  },

  {
    path: "/course/trajets",
    element: <ReservationClientPage />,
    children: [{ path: ":trajetId", element: <TrajetDetailsPage /> }],
  },
  {
    path: "/course/reservations",
    element: <ReservationClientPage />,
  },

  // admin routes
  {
    path: "/admin/dashboard",
    element: <AdminDashboardLayoutPage />,
    children: [
      { path: "overview", element: <DashboardOverviewPage /> },
      { path: "profile", element: <AdminProfile /> },
      { path: "rides", element: <RidesListPage /> },
      { path: "rides/:rideId", element: <RideDetailsPage /> },
      { path: "drivers", element: <DriversListPage /> },
      { path: "drivers/:driverId", element: <DriverProfilePage /> },
      { path: "clients", element: <ClientsListPage /> },
      { path: "clients/:clientId", element: <ClientProfilePage /> },
      { path: "settings", element: <SettingsPage /> },
      { path: "analytics", element: <AnalyticsPage /> },
      { path: "payments", element: <PaymentsPage /> },
    ],
  },
  // conducteur routes

  {
    path: "/conducteur",
    element: <ConducteurDashboardLayoutPage />,
    children: [
      { path: "creer-offre", element: <ConducteurCreerOffre /> },
      {
        path: "mes-offres",
        element: <ConducteurMesOffres />,
      },
      { path: "historique-voyages", element: <ConducteurHistoriqueVoyages /> },
    ],
  },

  // client routes
  {
    path: "/client",
    element: <ClientDashboardLayoutPage />,
    children: [
      { path: "reservations", element: <ClientReservationsPage /> },
      {
        path: "recherche-offres",
        element: <ClientRechercheOffresPage />,
      },
      { path: "historique-voyages", element: <ClientHistoriqueVoyagesPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
