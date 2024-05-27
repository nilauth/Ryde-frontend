import ConducteurNavigation from "@/components/ConducteurNavigation";
import { Outlet } from "react-router-dom";

const conducteurDashboardLayoutPage = () => {
  return (
    <>
      <ConducteurNavigation isAuth={false} />
      <Outlet />
    </>
  );
};

export default conducteurDashboardLayoutPage;
