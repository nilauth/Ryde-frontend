import { Button } from "@/components/ui/button";
import UserService from "@/services/userService";
import { ColumnDef } from "@tanstack/react-table";

export type Demande = {
  id: string;
  driverId: string;
  status: string;
  nomDriver: string;
};

const handleSubmitAccepter = async (
  e: React.MouseEvent<HTMLButtonElement>,
  rowId: string,
  token = localStorage.getItem("token") || ""
) => {
  e.preventDefault();
  console.log(rowId);

  try {
    await UserService.accepterDemande(rowId, token);
    //  reload the page
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
};

const handleSubmitRefuser = async (
  e: React.MouseEvent<HTMLButtonElement>,
  rowId: string,
  token = localStorage.getItem("token") || ""
) => {
  e.preventDefault();
  console.log(rowId);

  try {
    await UserService.refuserDemande(rowId, token);
    //  reload the page
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
};

export const columns: ColumnDef<Demande>[] = [
  {
    accessorKey: "id",
    header: "Id demande",
  },
  {
    accessorKey: "driverId",
    header: "Id client",
  },
  {
    accessorKey: "nomDriver",
    header: "Nom conducteur",
  },
  {
    accessorKey: "status",
    header: "Statue demande",
    cell: ({ row }) => {
      const value = row.original.status;
      return (
        <div
          className={`w-fit px-2 py-1 rounded-full ${
            value === "pending"
              ? "bg-yellow-200 text-yellow-800"
              : value === "accepted"
              ? "bg-green-200 text-green-800"
              : "bg-red-200 text-red-800"
          }`}
        >
          {value === "pending"
            ? "En attente"
            : value === "accepted"
            ? "Acceptée"
            : "Refusée"}
        </div>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const demande = row.original;

      return (
        demande.status === "pending" && (
          <div className="space-x-5 flex justify-end">
            <Button
              variant="outline"
              onClick={(e) => handleSubmitAccepter(e, demande.id)}
            >
              Accepter
            </Button>
            <Button
              variant="outline"
              onClick={(e) => handleSubmitRefuser(e, demande.id)}
            >
              Refuser
            </Button>
          </div>
        )
      );
    },
  },
];
