import { columns as clientColumns, Client } from "@/common/table/columnsClient";
import { DataTable } from "@/common/table/data-table";
import { useEffect, useState } from "react";
import UserService from "@/services/userService";

const ClientsList = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const token = localStorage.getItem("token") || "";
        const res = await UserService.getAllUsers(token);
        const usersWithRoleConducteur = res.ourUsersList.filter(
          (user: Client) => user.role === "CONDUCTEUR"
        );
        setClients(usersWithRoleConducteur);
        setLoading(false);
        console.log(usersWithRoleConducteur);
      } catch (error) {
        setError("Error fetching clients");
        setLoading(false);
      }
    };

    fetchClients();

    return () => {};
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <DataTable columns={clientColumns} data={clients} filterBy="cin" />
    </div>
  );
};

export default ClientsList;
