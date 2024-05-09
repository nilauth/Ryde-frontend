import { columns as clientColumns, Client } from "@/common/table/columnsClient";
import { DataTable } from "@/common/table/data-table";

const clients: Client[] = [
  {
    id: "1",
    cin: "12345678",
    nomComplet: "Jean Dupont",
    email: "jean@example.com",
  },
  {
    id: "2",
    cin: "87654321",
    nomComplet: "Marie Martin",
    email: "marie@example.com",
  },
];

const ClientsList = () => {
  return (
    <div>
      <DataTable columns={clientColumns} data={clients} />
    </div>
  );
};

export default ClientsList;
