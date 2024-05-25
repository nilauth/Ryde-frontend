import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import UserService from "@/services/userService";
import axios from "axios";
import { useEffect, useState } from "react";
import ReservationCard from "../components/ReservationCard1";

export default function ClientRechercheOffresPage() {
  const [formData, setFormData] = useState({
    villeDepart: "",
    villeArriv: "",
    date: "",
  });

  const [currentUser, setCurrentUser] = useState(null);
  const [searchDone, setSearchDone] = useState(false);
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const user = await UserService.getCurrentUser();
        setCurrentUser(user);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${UserService.BASE_URL}/user/offersFiltre`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
          },
        }
      );
      setOffers(response.data);
      setSearchDone(true);
      setFormData({
        villeDepart: "",
        villeArriv: "",
        date: "",
      });
    } catch (err) {
      console.error("Error:", err);
    }
  };

  const handleCardSubmit = async (
    e,
    placeReserv,
    totalPrice,
    client_id,
    offre_id
  ) => {
    e.preventDefault();
    // console.log(client_id, offre_id, placeReserv, totalPrice);
    console.log(offers);
    try {
      const response = await axios.post(
        `${UserService.BASE_URL}/user/add-reservation`,
        { offreid: offre_id, userid: client_id, placeReserv, prix: totalPrice },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
          },
        }
      );
      // console.log(currentUser);
      // console.log(response);
      console.log("total price2:", totalPrice);
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <>
      <main className="w-full mx-auto px-4 sm:px-6 lg:grid lg:grid-cols-2 container">
        <div className="flex flex-col gap-16 w-full grid-cols-1 pt-8">
          <form
            className="grid gap-6 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg max-w-2xl"
            onSubmit={handleSubmit}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="villeDepart">
                  Ville de départ
                </label>
                <input
                  className="w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 text-sm focus:border-primary focus:ring-primary dark:bg-gray-950 dark:text-gray-50"
                  id="villeDepart"
                  name="villeDepart"
                  value={formData.villeDepart}
                  onChange={handleChange}
                  placeholder="Entrez la ville de départ"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="villeArriv">
                  Ville d'arrivée
                </label>
                <input
                  className="w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 text-sm focus:border-primary focus:ring-primary dark:bg-gray-950 dark:text-gray-50"
                  id="villeArriv"
                  name="villeArriv"
                  value={formData.villeArriv}
                  onChange={handleChange}
                  placeholder="Entrez la ville d'arrivée"
                  type="text"
                />
              </div>
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                htmlFor="date"
              >
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 text-sm focus:border-primary focus:ring-primary dark:bg-gray-950 dark:text-gray-50"
              />
            </div>
            <Button className="w-full" type="submit">
              Rechercher
            </Button>
          </form>
        </div>
        <ScrollArea className="h-[calc(100vh-74px)] pr-10 pt-8">
          {searchDone && offers.length === 0 && (
            <p className="text-center text-gray-500">Aucune offre trouvée</p>
          )}
          {offers.map((offer) => (
            <ReservationCard
              key={offer.id}
              id={offer.id}
              date={offer.date}
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
            />
          ))}
        </ScrollArea>
      </main>
    </>
  );
}
