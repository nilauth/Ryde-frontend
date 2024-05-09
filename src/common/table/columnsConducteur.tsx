import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Conducteur = {
  id: string;
  nomComplet: string;
  cin: string;
  marqueVoiture: string;
  statut: "occupé" | "disponible" | "hors service";
  email: string;
};

export const columns: ColumnDef<Conducteur>[] = [
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
    accessorKey: "statut",
    header: "Statut",
  },
  {
    accessorKey: "marqueVoiture",
    header: "Marque de voiture",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
];
