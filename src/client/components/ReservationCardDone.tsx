import React, { useState } from "react";
import { CarIcon, KeySquare } from "lucide-react";
import UserService from "@/services/userService";

function formatDate(inputDate) {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const date = new Date(inputDate);
  return date.toLocaleDateString("fr-FR", options);
}

const ReservationCardDone = ({
  id,
  date,
  driverId,
  placeDispo,
  prix,
  villeDepart,
  villeArrv,
  heureDepart,
  heureArriv,
  idReservation,
  token, // Make sure the token is passed as a prop
  onDelete, // Callback to refresh the reservations list
}) => {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    console.log("Initiating delete process");
    console.log("Reservation IDaaaa:", idReservation);
    console.log("Prix:", prix);
    console.log("Token:", localStorage.getItem("token") || "");

    try {
      setLoading(true);
      console.log("Calling UserService.deleteReservation");
      await UserService.deleteReservation(
        idReservation,
        prix,
        localStorage.getItem("token") || ""
      );
      console.log("Delete successful");
      // onDelete(id); // Call the callback function to refresh the reservations list
    } catch (err) {
      console.error("Failed to delete reservation", err);
    } finally {
      setLoading(false);
      console.log("Delete process finished");
    }
  };

  return (
    <div className="w-full pb-10 min-w-[600px]">
      <div className="max-w-full bg-white flex flex-col rounded-lg overflow-hidden shadow-lg border">
        <div className="flex flex-row items-center flex-nowrap bg-gray-100 p-2">
          <CarIcon className="h-5 w-5 text-gray-500" />
          <h1 className="ml-2 uppercase font-bold text-gray-500">Voyage</h1>
          <p className="ml-2 font-normal text-gray-500">{formatDate(date)}</p>
        </div>
        <div className="mt-2 flex justify-start bg-white p-2">
          <div className="flex mx-2 ml-6 h8 px-2 flex-row items-center rounded-full bg-gray-100 p-1">
            <KeySquare className="h-4 w-4 text-gray-500" />
            <p className="font-normal text-sm ml-1 text-gray-500">
              BMW S5 - {driverId}
            </p>
          </div>
        </div>
        <div className="mt-2 flex sm:flex-row mx-6 sm:justify-between flex-wrap">
          <div className="flex flex-row place-items-center p-2">
            <img
              src="/src/assets/ribe.svg"
              className="h-8 w-8"
              alt="Ryde logo"
            />
            <div className="flex flex-col ml-2">
              <p className="text-xs text-gray-500 font-bold">Ryde</p>
              <p className="text-xs text-gray-500">
                {id.split("-")[0].toUpperCase()}
              </p>
            </div>
          </div>

          <div className="flex flex-col p-2">
            <p className="text-xs text-slate-500">Départ</p>
            <p className="text-xl font-bold">{villeDepart}</p>
            <p className="font-bold text-gray-500">{heureDepart}</p>
          </div>
          <div className="flex flex-col flex-wrap p-2">
            <p className="text-xs text-slate-500">Arrivée</p>
            <p className="text-xl font-bold">{villeArrv}</p>
            <p className="font-bold text-gray-500">{heureArriv}</p>
          </div>
        </div>
        <div className="mt-4 bg-gray-100 flex flex-row flex-wrap md:flex-nowrap justify-between items-baseline">
          <div className="md:border-l-2 mx-6 md:border-dotted flex flex-row py-4 mr-6 flex-wrap w-full justify-between">
            <div className="text-sm mx-2 flex flex-col">
              <p>Ticket Flexible</p>
              <p className="font-bold">MAD {prix + 200}</p>
              <p className="text-xs text-gray-500">Remboursable</p>
            </div>
            <button
              onClick={handleDelete}
              disabled={loading}
              className={`w-32 h-11 rounded flex border-solid border ${
                loading ? "bg-gray-400" : "bg-slate-600 text-white"
              } mx-2 justify-center place-items-center self-center`}
            >
              {loading ? "Annuler..." : "Annuler"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationCardDone;
