import ClientNavigation from "@/components/ClientNavigation";
import { Outlet } from "react-router-dom";

const clientDashboardLayoutPage = () => {
  return (
    <>
      <ClientNavigation isAuth={true} />
      <Outlet />
    </>
  );
};

export default clientDashboardLayoutPage;
