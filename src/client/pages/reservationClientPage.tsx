import ReservationCard from "@/components/ReservationCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import ReservationDetailsPage from "./ReservationDetailsPage";
import trajets from "@/data/trajets";

const ReservationClient = () => {
  const reservationCards = trajets.map((trajet) => (
    <ReservationCard
      key={trajet.trajetIndex}
      villeDepart={trajet.departureCity}
      villeArrivee={trajet.arrivalCity}
      tempsTrajet={trajet.travelTime}
      indiceTrajet={trajet.trajetIndex}
    />
  ));

  return (
    <div className='grid grid-cols-3'>
      <div className='flex flex-col justify-center items-center w-fit'>
        <ScrollArea className='h-screen min-w-[640px] px-20'>{reservationCards}</ScrollArea>
      </div>
      <div className='flex justify-center pt-20 relative border-l col-span-2'>
        <ReservationDetailsPage />
      </div>
    </div>
  );
};

export default ReservationClient;
