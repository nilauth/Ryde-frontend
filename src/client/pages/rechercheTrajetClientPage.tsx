import UserNavigation from "@/components/UserNavigation";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import UserService from "@/services/userService";
import axios from "axios";
import { useState } from "react";
import ReservationCard from "../components/ReservationCard1";

export default function Component() {
  const [formData, setFormData] = useState({
    villeDepart: "",
    villeArriv: "",
    date: "",
  });

  const [searchDone, setsetsearchDone] = useState(false);

  const [offers, setOffers] = useState([]); // Renamed from `getOffers` to `setOffers` for clarity

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(localStorage.getItem("token"));
      console.log(formData);
      const response = await axios.post(`${UserService.BASE_URL}/user/offersFiltre`, formData, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token") || ""}` },
      });
      console.log("result", response.data);
      setOffers(response.data);
      setsetsearchDone(true);
      setFormData({
        villeDepart: "",
        villeArriv: "",
        date: "",
      });
      // Handle response or update UI accordingly
    } catch (err) {
      console.error("Error:", err);
      // Handle error or display error message
    }
  };

  return (
    <>
      <UserNavigation isAuth={true} />
      <main key='1' className='w-full mx-auto px-4 sm:px-6 lg:grid lg:grid-cols-2 pt-6 container'>
        <div className='flex flex-col gap-16 w-full grid-cols-1'>
          <div className='text-center space-y-2'>
            <h1 className='text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl'>Trouvez votre prochain trajet</h1>
            <p className='text-gray-500 dark:text-gray-400 max-w-md mx-auto'>
              Recherchez des trajets dans votre région et réservez votre voyage en toute simplicité.
            </p>
          </div>

          {/* form starts here */}

          <form className='grid gap-6 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg max-w-2xl' onSubmit={handleSubmit}>
            <div className='grid sm:grid-cols-2 gap-4'>
              <div className='space-y-2'>
                <label className='text-sm font-medium' htmlFor='villeDepart'>
                  Ville de départ
                </label>
                <input
                  className='w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 text-sm focus:border-primary focus:ring-primary dark:bg-gray-950 dark:text-gray-50'
                  id='villeDepart'
                  name='villeDepart'
                  value={formData.villeDepart}
                  onChange={handleChange}
                  placeholder='Entrez la ville de départ'
                  type='text'
                />
              </div>
              <div className='space-y-2'>
                <label className='text-sm font-medium' htmlFor='villeArriv'>
                  Ville d'arrivée
                </label>
                <input
                  className='w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 text-sm focus:border-primary focus:ring-primary dark:bg-gray-950 dark:text-gray-50'
                  id='villeArriv'
                  name='villeArriv'
                  value={formData.villeArriv}
                  onChange={handleChange}
                  placeholder="Entrez la ville d'arrivée"
                  type='text'
                />
              </div>
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 dark:text-gray-300' htmlFor='date'>
                Date
              </label>
              <input
                type='date'
                id='date'
                name='date'
                value={formData.date}
                onChange={handleChange}
                required
                className='w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 text-sm focus:border-primary focus:ring-primary dark:bg-gray-950 dark:text-gray-50'
              />
            </div>
            <Button className='w-full' type='submit'>
              Rechercher
            </Button>
          </form>

          {/* Render offers here */}
        </div>
        {/* <div className='bg-blue-50'>
        {offers.length > 0 ? (
          offers.map((offer) => (
            <section>
              <h1 key={offer.id}>Id offre: {offer.id}</h1>
              <h1 key={offer.date}>Date offre: {offer.date}</h1>
              <h1 key={offer.driverId}>Id conducteur{offer.driverId}</h1>
              <h1 key={offer.placeDispo}>Place dispo: {offer.placeDispo}</h1>
              <h1 key={offer.placeInitiale}>Place Init: {offer.placeInitiale}</h1>
              <h1 key={offer.prix}>Prix: {offer.prix}</h1>
              <h1 key={offer.status}>Status {offer.status ? "free" : "not free"}</h1>
              <h1 key={offer.villeDepart}>Ville dep: {offer.villeDepart}</h1>
              <h1 key={offer.villeArriv}>Ville arrivee: {offer.villeArriv}</h1>
            </section>
          ))
        ) : (
          <h1>Aucune offre disponible</h1>
        )}
      </div> */}
        <div className='flex flex-col justify-center items-center w-full'>
          <ScrollArea className='h-[calc(100vh-74px)] pr-10'>
            {searchDone ? (
              offers.length > 0 ? (
                offers.map((offer) => (
                  <ReservationCard
                    date={offer.date}
                    driverId={offer.driverId}
                    id={offer.id}
                    prix={offer.prix}
                    villeDepart={offer.villeDepart}
                    villeArrv={offer.villeArriv}
                    heureDepart={offer.heureDepart}
                    heureArriv={offer.heureArriv}
                    placeDispo={4}
                  />
                ))
              ) : (
                <h1>Aucune offre disponible</h1>
              )
            ) : null}
            {/* {offers.length > 0 ? (
              offers.map((offer) => (
                // <section>
                //   <h1 key={offer.id}>Id offre: {offer.id}</h1>
                //   <h1 key={offer.date}>Date offre: {offer.date}</h1>
                //   <h1 key={offer.driverId}>Id conducteur{offer.driverId}</h1>
                //   <h1 key={offer.placeDispo}>Place dispo: {offer.placeDispo}</h1>
                //   <h1 key={offer.placeInitiale}>Place Init: {offer.placeInitiale}</h1>
                //   <h1 key={offer.prix}>Prix: {offer.prix}</h1>
                //   <h1 key={offer.status}>Status {offer.status ? "free" : "not free"}</h1>
                //   <h1 key={offer.villeDepart}>Ville dep: {offer.villeDepart}</h1>
                //   <h1 key={offer.villeArriv}>Ville arrivee: {offer.villeArriv}</h1>
                //   <h1 key={offer.heureDepart}>heure arrivee: {offer.heureDepart}</h1>
                //   <h1 key={offer.heureArriv}>heure depp: {offer.heureArriv}</h1>
                // </section>
                <ReservationCard
                  date={offer.date}
                  driverId={offer.driverId}
                  id={offer.id}
                  prix={offer.prix}
                  villeDepart={offer.villeDepart}
                  villeArrv={offer.villeArriv}
                  heureDepart={offer.heureDepart}
                  heureArriv={offer.heureArriv}
                  placeDispo={4}
                />
              ))
            ) : (
              <h1>Aucune offre disponible</h1>
            )} */}
          </ScrollArea>
        </div>
      </main>
    </>
  );
}
