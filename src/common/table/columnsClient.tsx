import { ColumnDef } from "@tanstack/react-table";

// Define the shape of the Client data
export type Client = {
  id: string;
  cin: string;
  nomComplet: string;
  email: string;
  // Add more properties as needed
};

// Define columns for the Client data
export const columns: ColumnDef<Client>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "cin",
    header: "CIN",
  },
  {
    accessorKey: "nomComplet",
    header: "Nom complet",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  // Add more columns as needed
];
