import UserService from "@/services/userService";
import { useEffect, useState } from "react";
import ReservationCardDone from "../components/ReservationCardDone";
import { ScrollArea } from "@/components/ui/scroll-area";
const ClientReservationsPage = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [reservationList, setReservationList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const user = await UserService.getCurrentUser();
        setCurrentUser(user);
        if (user) {
          const resList = await UserService.getAllOffresClient(
            user.id,
            localStorage.getItem("token") || ""
          );

          const filteredResList = resList.filter((reservation) => {
            console.log(reservation);
            return reservation.statusVoyages === true;
          });

          setReservationList(filteredResList);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }

    fetchData();
  }, []);

  // console.log(reservationList);
  return (
    <div className="container">
      <ScrollArea className="h-[calc(100vh-74px)] pr-10">
        {reservationList.length > 0 ? (
          <ul className="flex justify-center items-center flex-col space-y-4 pt-4">
            {reservationList.map((reservation, index) => (
              <li key={index} className="w-1/3">
                <ReservationCardDone
                  id={reservation.id}
                  date={reservation.date}
                  driverId={reservation.driverId}
                  placeDispo={reservation.placeDispo}
                  prix={reservation.prix}
                  villeDepart={reservation.villeDepart}
                  villeArrv={reservation.villeArriv}
                  heureDepart={reservation.heureDepart}
                  heureArriv={reservation.heureArriv}
                  idReservation={reservation.idReservation}
                  statusVoyage={reservation.statusVoyages}
                />
              </li>
            ))}
          </ul>
        ) : null}
      </ScrollArea>
    </div>
  );
};

export default ClientReservationsPage;
