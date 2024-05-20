import UserService from "@/services/userService";
import { useEffect, useState } from "react";

const ClientReservationsPage = () => {
  const [currentUser, setCurrentUser] = useState(1);
  const [reservationList, setReservationList] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const user = await UserService.getCurrentUser();
        setCurrentUser(user);
        const resList = await UserService.getAllOffresClient(
          currentUser,
          localStorage.getItem("token") || ""
        );
        setReservationList(resList);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      {reservationList.map((res) => {
        <p>{res}</p>;
      })}
    </div>
  );
};

export default ClientReservationsPage;
