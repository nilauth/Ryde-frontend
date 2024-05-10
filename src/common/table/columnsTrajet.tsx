import { ColumnDef } from "@tanstack/react-table";

// Définir la structure des données Trajet
export type Trajet = {
  id: string;
  villeDepart: string;
  villeArrivee: string;
  conducteur: string;
  client: string;
  marqueVoiture: string;
  immatriculation: string;
  // Ajouter d'autres propriétés au besoin
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
    accessorKey: "villeArrivee",
    header: "Ville d'arrivée",
  },
  {
    accessorKey: "conducteur",
    header: "Conducteur",
  },
  {
    accessorKey: "client",
    header: "Client",
  },
  {
    accessorKey: "marqueVoiture",
    header: "Marque de voiture",
  },
  {
    accessorKey: "immatriculation",
    header: "Immatriculation",
  },
  // Ajouter d'autres colonnes au besoin
];
