import { useParams } from "react-router-dom";

const TrajetDetailsPage = () => {
  const { trajetId } = useParams();
  return <div>TrajetDetailsPage {trajetId}</div>;
};

export default TrajetDetailsPage;
