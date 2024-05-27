import { ColumnDef } from "@tanstack/react-table";

export type Client = {
  id: string;
  cin: string;
  nomComplet: string;
  email: string;
  solde: number;
  city: string;
  role: string;
};

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
    accessorKey: "name",
    header: "Nom complet",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "solde",
    header: "Solde",
  },
  {
    accessorKey: "city",
    header: "Ville",
  },
  {
    accessorKey: "role",
    header: "Rôle",
  },
];
