import { useParams } from "react-router-dom";

const RideDetails = () => {
  const { rideId } = useParams();
  return <div>RideDetails {rideId}</div>;
};

export default RideDetails;
