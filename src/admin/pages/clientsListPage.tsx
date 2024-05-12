import { columns as clientColumns, Client } from "@/common/table/columnsClient";
import { DataTable } from "@/common/table/data-table";
import { useEffect, useState } from "react"; // Importing useEffect and useState
// import { Client } from "@/common/table/columnsClient";
// import { DataTable } from "@/common/table/data-table";
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
        setClients(res.ourUsersList);
        setLoading(false);
        console.log(res.ourUsersList);
      } catch (error) {
        setError("Error fetching clients");
        setLoading(false);
      }
    };

    fetchClients();

    // Clean-up function if necessary
    return () => {};
  }, []); // Empty dependency array ensures that this effect runs only once on mount

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <DataTable columns={clientColumns} data={clients} filterBy='cin' />
    </div>
  );
};

export default ClientsList;
