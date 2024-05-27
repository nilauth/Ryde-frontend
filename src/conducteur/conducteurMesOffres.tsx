import { ScrollArea } from "@/components/ui/scroll-area";
import UserService from "@/services/userService";
import { useEffect, useState } from "react";
import ReservationCardConducteur from "./components/ReservationCardConducteur";

import { Toaster } from "sonner";

export default function ConducteurMesOffres() {
  const [currentUser, setCurrentUser] = useState(null);
  const [offers, setOffers] = useState([]);
  const [searchDone, setSearchDone] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const user = await UserService.getCurrentUser();
        setCurrentUser(user);
        console.log("Current user:", user);

        if (user) {
          const token = localStorage.getItem("token") || "";
          const offersData = await UserService.getAllOffresConducteur(
            user.id,
            token
          );

          // Filter out duplicate offers
          const uniqueOffers = Array.from(
            new Set(offersData.map((offer) => offer.id))
          ).map((id) => offersData.find((offer) => offer.id === id));

          setOffers(uniqueOffers);
          setSearchDone(true);
          console.log("Unique driver offers:", uniqueOffers);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }

    fetchData();
  }, []);

  const handleCloseOffer = async (idOffre) => {
    try {
      const token = localStorage.getItem("token") || "";
      await UserService.fermerOffre(idOffre, token);
      console.log(`Offer ${idOffre} closed successfully`);
      // Re-fetch the offers after closing one
      const updatedOffers = await UserService.getAllOffresConducteur(
        currentUser.id,
        token
      );
      const uniqueUpdatedOffers = Array.from(
        new Set(updatedOffers.map((offer) => offer.id))
      ).map((id) => updatedOffers.find((offer) => offer.id === id));
      setOffers(uniqueUpdatedOffers);
    } catch (error) {
      console.error("Error closing offer:", error);
    }
  };

  const handleCloturerVoyage = async (idOffre) => {
    try {
      const token = localStorage.getItem("token") || "";
      await UserService.cloturerVoyage(idOffre, token);
      console.log(`Voyage ${idOffre} cloturer successfully`);
      // Re-fetch the offers after closing one
      const updatedOffers = await UserService.getAllOffresConducteur(
        currentUser.id,
        token
      );
      const uniqueUpdatedOffers = Array.from(
        new Set(updatedOffers.map((offer) => offer.id))
      ).map((id) => updatedOffers.find((offer) => offer.id === id));
      setOffers(uniqueUpdatedOffers);
    } catch (error) {
      console.error("Error cloturer voyage:", error);
    }
  };

  return (
    <main className="w-full mx-auto px-4 sm:px-6 max-w-[40%] container">
      <ScrollArea className="h-[calc(100vh-74px)] pr-10 pt-8">
        {searchDone && offers.length === 0 && (
          <p className="text-center text-gray-500">Vous n'avez aucun offre.</p>
        )}
        {offers.map(
          (offer) =>
            offer.statusVoyages && (
              <ReservationCardConducteur
                key={offer.id}
                id={offer.id}
                date={offer.date}
                statusOffre={offer.statusOffres}
                statusVoyages={offer.statusVoyages}
                driverId={offer.driverId}
                placeDispo={offer.placeDispo}
                prix={offer.prix}
                villeDepart={offer.villeDepart}
                villeArriv={offer.villeArriv}
                heureDepart={offer.heureDepart}
                heureArriv={offer.heureArriv}
                handleSubmit={(e, placeReserv, totalPrice) =>
                  handleCardSubmit(
                    e,
                    placeReserv,
                    totalPrice,
                    currentUser.id,
                    offer.id
                  )
                }
                handleCloseOffer={handleCloseOffer}
                handleCloturerVoyage={handleCloturerVoyage}
              />
            )
        )}
      </ScrollArea>
      <Toaster />
    </main>
  );
}
