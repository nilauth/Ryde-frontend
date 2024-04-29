import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const ReservationCard = () => {
  return (
    <Card className='px-8 py-5 max-w-[800px]'>
      <CardHeader className='p-0'>
        <CardTitle className='text-3xl pl-6'>Votre trajet</CardTitle>
      </CardHeader>
      <CardContent className='flex gap-x-6 py-0 pt-2'>
        <div className=''>
          <div className='font-semibold'>Ville depart</div>
          <div className=''>Fes</div>
        </div>
        <div>
          <div className='font-semibold'>Temps de trajet</div>
          <div>~3H</div>
        </div>
        <div>
          <div className='font-semibold'>Ville d'arrivee</div>
          <div>Casablanca</div>
        </div>
        <div className='h-full flex justify-center items-center pl-5 gap-2 pt-2'>
          <Button>Reserver</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReservationCard;
