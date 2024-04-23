import { useParams } from "react-router-dom";

const DriverProfile = () => {
  const { driverId } = useParams();
  return <div>DriverProfile {driverId}</div>;
};

export default DriverProfile;
