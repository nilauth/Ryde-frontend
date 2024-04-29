import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type TrajetProps = {
  villeDepart: string;
  villeArrivee: string;
  tempsTrajet: number;
  indiceTrajet: number;
};

const ReservationCard = ({ villeDepart, villeArrivee, tempsTrajet, indiceTrajet }: TrajetProps) => {
  return (
    <Link to={`/course/trajets/${indiceTrajet}`}>
      <Card className='px-4 py-5 wfit my-6 hover:bg-slate-50/70'>
        <CardHeader className='p-0'>
          <CardTitle className='text-3xl pl-6'>Votre trajet</CardTitle>
        </CardHeader>
        <CardContent className='flex gap-x-6 py-0 pt-2'>
          <div className=''>
            <div className='font-semibold'>Ville depart</div>
            <div className=''>{villeDepart}</div>
          </div>
          <div>
            <div className='font-semibold'>Temps de trajet</div>
            <div>{tempsTrajet}</div>
          </div>
          <div>
            <div className='font-semibold'>Ville d'arrivee</div>
            <div>{villeArrivee}</div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ReservationCard;
