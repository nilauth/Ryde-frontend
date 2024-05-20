  import { Button } from "@/components/ui/button";
import UserService from "@/services/userService";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Component() {
  const [currentUser, setCurrentUser] = useState(null);
  const [formData, setFormData] = useState({
    id: "",
    driverId: null, // Initialize driverId with null
    villeDepart: "",
    villeArriv: "",
    heureDepart: "",
    date: "",
    heureArriv: "",
    prix: 50.0,
    placeDispo:"",
    placeInitiale:"",
    statusOffres: true,
    statusVoyages: true,
  });

  function convertTimeToISO(timeString: string) {
    // Split the time string into hours and minutes
    const [hours, minutes] = timeString.split(":");

    // Create a new Date object with today's date and the specified time
    const date = new Date();
    date.setHours(parseInt(hours, 10));
    date.setMinutes(parseInt(minutes, 10));

    // Return the ISO string representation of the date
    return date.toISOString();
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const user = await UserService.getCurrentUser();
        setCurrentUser(user);
        setFormData((prevFormData) => ({
          ...prevFormData,
          driverId: user?.id || null, // Update driverId based on currentUser
        }));
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Await for UserService.ajouterOffre to complete
      await UserService.ajouterOffre(
        {
          ...formData,
          placeInitiale:formData.placeDispo,
          // heureDepart: convertTimeToISO(formData.heureDepart),
          // heureArriv: convertTimeToISO(formData.heureArriv),
          id: uuidv4(),
        },
        localStorage.getItem("token") || ""
      );
      // Log the user
      console.log(await myFunction());
    } catch (error) {
      console.error("Error adding ride:", error);
    }
  };

  const myFunction = async () => {
    try {
      const user = await UserService.getCurrentUser();
      console.log(user);
      return user;
    } catch (error) {
      console.error("Error:", error);
      throw error; // Rethrow error to be caught by the caller
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className='flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-900'>
      <div className='bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-md'>
        <h1 className='text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100'>Créer un nouveau offre</h1>
        <form className='space-y-4' onSubmit={handleSubmit}>
          <div>
            <label className='block text-sm font-medium text-gray-700 dark:text-gray-300' htmlFor='to'>
              Ville de départ
            </label>
            <input
              className='w-full p-2 border'
              id='villeDepart'
              name='villeDepart'
              placeholder='Enter drop-off location'
              type='text'
              value={formData.villeDepart}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700 dark:text-gray-300' htmlFor='villeArriv'>
              Ville d'arrivée
            </label>
            <input
              className='w-full p-2 border'
              id='villeArriv'
              name='villeArriv'
              placeholder='Enter pickup location'
              type='text'
              value={formData.villeArriv}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700 dark:text-gray-300' htmlFor='date'>
              Date
            </label>
            <input type='date' id='date' name='date' value={formData.date} onChange={handleChange} required />
          </div>
          {/* <div>
            <label className='block text-sm font-medium text-gray-700 dark:text-gray-300' htmlFor='driverId'>
              Driver id
            </label>
            <input
              type='string'
              id='driverId'
              name='driverId'
              value={formData.driverId}
              onChange={handleChange}
              defaultValue={currentUser?.id}
            />
          </div> */}

          <div>
            <label className='block text-sm font-medium text-gray-700 dark:text-gray-300' htmlFor='heureDepart'>
              Heure de départ
            </label>
            <input
              name='heureDepart'
              id='heureDepart'
              type='time'
              value={formData.heureDepart}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700 dark:text-gray-300' htmlFor='heureArriv'>
              Heure d'arrivée
            </label>
            <input
              name='heureArriv'
              id='heureArriv'
              type='time'
              value={formData.heureArriv}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700 dark:text-gray-300' htmlFor='prix'>
              Prix
            </label>
            <div className='flex space-x-2'>
              <input
                name='prix'
                id='prix'
                type='text'
                className='w-[50px] border'
                value={formData.prix}
                onChange={handleChange}
                required
              />
              <div>DH</div>
            </div>
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700 dark:text-gray-300' htmlFor='placeDispo'>
              Nombres de place
            </label>
            <input
              name='placeDispo'
              id='placeDispo'
              type='number'
              className='border'
              value={formData.placeDispo}
              onChange={handleChange}
              required
            />
          </div>
          <Button className='w-full' type='submit'>
            Ajouter offre
          </Button>
        </form>
      </div>
    </div>
  );
}
