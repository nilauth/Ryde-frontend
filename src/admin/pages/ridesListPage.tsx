import { columns as rideColumns, Trajet } from "@/common/table/columnsTrajet";
import { DataTable } from "@/common/table/data-table";
import UserService from "@/services/userService";
import { useEffect, useState } from "react";

const ListeTrajets = () => {
  // importing the rides

  const [trajets, setTrajets] = useState<Trajet[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTrajets = async () => {
      try {
        const token = localStorage.getItem("token") || "";
        const res = await UserService.getAllTrajets(token);
        setTrajets(res);
        setLoading(false);
        console.log(res);
      } catch (error) {
        setError("Error fetching trajet");
        setLoading(false);
      }
    };

    fetchTrajets();

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
      <DataTable columns={rideColumns} data={trajets} filterBy="villeDepart" />
    </div>
  );
};

export default ListeTrajets;
