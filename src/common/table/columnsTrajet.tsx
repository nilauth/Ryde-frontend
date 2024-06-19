import { ColumnDef } from "@tanstack/react-table";

// Définir la structure des données Trajet
export type Trajet = {
  id: string;
  villeDepart: string;
  villeArriv: string;
  driverName: string;
  clientName: string;
  prix: number;
};

// Définir les colonnes pour les données Trajet
export const columns: ColumnDef<Trajet>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "villeDepart",
    header: "Ville de départ",
  },
  {
    accessorKey: "villeArriv",
    header: "Ville d'arrivée",
  },
  {
    accessorKey: "driverName",
    header: "Conducteur",
  },
  {
    accessorKey: "clientName",
    header: "Client",
  },
  {
    accessorKey: "prix",
    header: "Prix",
  },

  // Ajouter d'autres colonnes au besoin
];
