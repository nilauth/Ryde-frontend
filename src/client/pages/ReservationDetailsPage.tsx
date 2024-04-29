import { useParams } from "react-router-dom";

const ReservationDetailsPage = () => {
  const { reservationId } = useParams();
  return <div>ReservationDetailsPage {reservationId}</div>;
};

export default ReservationDetailsPage;
