import ReservationCard from "@/components/ReservationCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import TrajetDetailsPage from "./trajetDetailsPage";
import trajets from "@/data/trajets";
import UserNavigation from "@/components/UserNavigation";

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
    <section className='h-[calc(100vh-74px)]'>
      <UserNavigation isAuth={true} />
      <div className='grid grid-cols-2 container'>
        <div className='flex flex-col justify-center items-center w-fit '>
          <ScrollArea className='h-[calc(100vh-74px)] pr-40'>{reservationCards}</ScrollArea>
        </div>
        <div className='flex justify-center pt-20 relative'>
          <TrajetDetailsPage />
        </div>
      </div>
    </section>
  );
};

export default ReservationClient;
