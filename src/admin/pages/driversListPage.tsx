import { Conducteur, columns as ConducteurColumns } from "@/common/table/columnsConducteur";
import { DataTable } from "@/common/table/data-table";

const conducteurs: Conducteur[] = [
  {
    id: "1",
    nomComplet: "Jean Dupont",
    cin: "ABC123456",
    marqueVoiture: "Toyota",
    statut: "disponible",
    email: "jean@example.com",
  },
  {
    id: "2",
    nomComplet: "Marie Martin",
    cin: "DEF789012",
    marqueVoiture: "Honda",
    statut: "occupé",
    email: "marie@example.com",
  },
];
const DriversList = () => {
  return (
    <div>
      <DataTable columns={ConducteurColumns} data={conducteurs} />
    </div>
  );
};

export default DriversList;
