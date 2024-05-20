import UserService from "@/services/userService";
import { useEffect, useState } from "react";
import ReservationCardDone from "../components/ReservationCardDone";

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
          setReservationList(resList); // Set the entire list object
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }

    fetchData();
  }, []);

  console.log(reservationList);
  return (
    <div>
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
              />
              {/* Assuming 'id' is a property */}
              {/* Add more details like name, date etc. based on your data structure */}
            </li>
          ))}
        </ul>
      ) : (
        <p>No reservations found.</p>
      )}
    </div>
  );
};

export default ClientReservationsPage;
