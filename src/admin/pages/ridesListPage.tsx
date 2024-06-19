import {
  columns as trajetColonnes,
  Trajet,
} from "@/common/table/columnsTrajet"; // Supposons que vous avez un module pour les colonnes de trajet
import { DataTable } from "@/common/table/data-table";
import UserService from "@/services/userService";
import { useEffect, useState } from "react";

const ListeTrajets = () => {
  // importing the rides

  const [trajets, setTrajets] = useState<Trajet[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTrajects = async () => {
      try {
        const token = localStorage.getItem("token") || "";
        const res = await UserService.getAllTrajets(token);
        setTrajets(res);
        setLoading(false);
        console.log(res);
      } catch (error) {
        setError("Error fetching clients");
        setLoading(false);
      }
    };

    fetchTrajects();

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
      <DataTable columns={trajetColonnes} data={trajets} filerBy="driverName" />
    </div>
  );
};

export default ListeTrajets;
