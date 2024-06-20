import { ColumnDef } from "@tanstack/react-table";

export type Trajet = {
  id: string;
  villeDepart: string;
  villeArriv: string;
  driverName: string;
  clientName: string;
  prix: number;
};

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
];
