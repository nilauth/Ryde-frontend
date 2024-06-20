import {
  columns as demandeColumns,
  Demande,
} from "@/common/table/columnsDemande";
import { DataTable } from "@/common/table/data-table";
import { useEffect, useState } from "react";
import UserService from "@/services/userService";

const DemandeConducteurPage = () => {
  const [demandes, setDemandes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const token = localStorage.getItem("token") || "";
        const res = await UserService.getAllDemandes(token);
        setDemandes(res);
        console.log(demandes);
        setLoading(false);
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
    <div className="w-[80%]">
      <DataTable
        columns={demandeColumns}
        data={demandes}
        filterBy="nomDriver"
      />
    </div>
  );
};

export default DemandeConducteurPage;
