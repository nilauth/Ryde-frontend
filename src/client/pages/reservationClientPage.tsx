import ReservationCard from "@/components/ReservationCard";

const ReservationClient = () => {
  // Create an array of ReservationCard components
  const reservationCards = Array.from({ length: 10 }, (_, index) => <ReservationCard key={index} />);

  return <div className='flex flex-col justify-center items-center gap-5 py-20'>{reservationCards}</div>;
};

export default ReservationClient;
