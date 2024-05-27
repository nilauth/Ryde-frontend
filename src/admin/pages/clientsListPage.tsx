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
        const usersWithRoleUser = res.ourUsersList.filter(
          (user: Client) => user.role === "USER"
        );
        setClients(usersWithRoleUser);
        setLoading(false);
        console.log(usersWithRoleUser);
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
