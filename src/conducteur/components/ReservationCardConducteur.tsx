import { cn } from "@/lib/utils";
import { CarIcon, KeySquare } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
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

const ReservationCard = ({
  id,
  date,
  driverId,
  placeDispo,
  prix,
  villeDepart,
  villeArriv,
  heureDepart,
  heureArriv,
  statusOffre,
  statusVoyages,
  handleSubmit,
  handleCloseOffer, // Add handleCloseOffer prop
  handleCloturerVoyage,
}) => {
  const navigate = useNavigate();
  const [placeReserv, setPlaceReserv] = useState(1);
  const [totalPrice, setTotalPrice] = useState(prix);

  useEffect(() => {
    setTotalPrice(prix * placeReserv);
  }, [placeReserv, prix]);

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log("total price: ", totalPrice);
    console.log(villeArriv);
    handleSubmit(e, placeReserv, totalPrice);
  };

  console.log(statusOffre);

  return (
    <form onSubmit={onFormSubmit}>
      <div className="w-full pb-10">
        <div className="max-w-full bg-white flex flex-col rounded-lg overflow-hidden shadow-lg border">
          <div
            className={cn(
              "flex flex-row items-center flex-nowrap p-2 justify-between px-4",
              { "bg-green-200": statusOffre },
              { "bg-red-200": !statusOffre },
              { "bg-gray-100": !statusVoyages }
            )}
          >
            <div className="flex">
              <CarIcon className="h-5 w-5 text-gray-500" />
              <h1 className="ml-2 uppercase font-bold text-gray-500">Voyage</h1>
              <p className="ml-2 font-normal text-gray-500">
                {formatDate(date)}
              </p>
            </div>
            <p className="text-gray-500">
              <span className="text-2xl italic font-bold pr-1">
                {placeDispo}
              </span>{" "}
              {placeDispo > 1 ? "places restantes" : "place restante"}
            </p>
          </div>
          <div className="mt-2 flex justify-start bg-white p-2">
            <div className="flex mx-2 ml-6 h8 px-2 flex-row items-center rounded-full bg-gray-100 p-1">
              <KeySquare className="h-4 w-4 text-gray-500" />
              <p className="font-normal text-sm ml-1 text-gray-500">
                BMW S5 - {driverId}
              </p>
            </div>
          </div>
          <div className="mt-2 flex sm:flex-row mx-6 sm:justify-between flex-wrap ">
            <div className="flex flex-row place-items-center p-2">
              <img src="/src/assets/ribe.svg" className="h-8 w-8" />
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
              <p className="text-xl font-bold">{villeArriv}</p>
              <p className="font-bold text-gray-500">{heureArriv}</p>
            </div>
          </div>
          <div className="mt-4 bg-gray-100 flex flex-row flex-wrap md:flex-nowrap justify-between items-baseline">
            <div className="flex mx-6 py-4 flex-row flex-wrap">
              <div className="text-sm mx-2 flex gap-x-12"></div>
            </div>
            <div className="md:border-l-2 mx-6 md:border-dotted flex flex-row py-4 mr-6 flex-wrap">
              {statusOffre ? (
                <button
                  type="button"
                  className="w-32 h-11 rounded flex border-solid border text-white bg-red-500 mx-2 justify-center place-items-center"
                  onClick={() => handleCloseOffer(id)}
                >
                  Fermer offre
                </button>
              ) : (
                statusVoyages && (
                  <button
                    className="w-34 h-11 rounded flex border-solid border text-white bg-slate-800 mx-2 px-2 justify-center place-items-center"
                    type="button"
                    onClick={() => {
                      handleCloturerVoyage(id);
                      toast("Voyage cloturé avec succès!", {
                        description:
                          "Vous pouvez maintenant visualiser vos voyages cloturés.",
                        position: "top-right",
                        duration: 5000,
                        action: {
                          label: "Historique",
                          onClick: () =>
                            navigate("/conducteur/historique-voyages"),
                        },
                      });
                    }}
                  >
                    Cloturer voyage
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ReservationCard;