import { SidebarNav } from "@/components/SidebarNav";
import { UserNav } from "@/components/UserNav";
import { Card } from "@/components/ui/card";
import { Package2Icon } from "lucide-react";
import { Link, Outlet } from "react-router-dom";

export default function AdminDashboardLayout() {
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r lg:block dark:bg-gray-800/40">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center border-b px-6">
            <Link className="flex items-center gap-2 font-semibold" to="/">
              <img src="/src/assets/ribe.svg" className="h-8 w-8" />
              <span className="text-2xl">Ryde</span>
            </Link>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <SidebarNav />
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b  px-6 dark:bg-gray-800/40">
          <Link className="lg:hidden" to="#">
            <Package2Icon className="h-6 w-6" />
            <span className="sr-only">Home</span>
          </Link>
          <div className="w-full flex-1"></div>
          <UserNav />
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6 bg-gray-100/40">
          <Card className="h-full p-10 border shadow-sm rounded-md">
            <Outlet />
          </Card>
        </main>
      </div>
    </div>
  );
}
