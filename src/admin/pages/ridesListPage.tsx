import { columns as trajetColonnes, Trajet } from "@/common/table/columnsTrajet"; // Supposons que vous avez un module pour les colonnes de trajet
import { DataTable } from "@/common/table/data-table";

const trajets: Trajet[] = [
  {
    id: "1",
    villeDepart: "Ville A",
    villeArrivee: "Ville B",
    conducteur: "Jean Dupont",
    client: "Marie Martin",
    marqueVoiture: "Toyota",
    immatriculation: "ABC123",
  },
  {
    id: "2",
    villeDepart: "Ville C",
    villeArrivee: "Ville D",
    conducteur: "Marie Durand",
    client: "Pierre Dubois",
    marqueVoiture: "Honda",
    immatriculation: "XYZ789",
  },
];

const ListeTrajets = () => {
  return (
    <div>
      <DataTable columns={trajetColonnes} data={trajets} filerBy='immatriculation' />
    </div>
  );
};

export default ListeTrajets;
