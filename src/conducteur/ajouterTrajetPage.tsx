import { Button } from "@/components/ui/button";
import UserService from "@/services/userService";
import { useState } from "react"; // Import useState for state management

export default function Component() {
  const [formData, setFormData] = useState({
    // id: "1",
    // date: "",
    // driverId: "",
    // placeDispo: "",
    // placeInitiale: "4",
    // prix: "",
    // status: true,
    // villeDepartId: "",
    // villeArrivId: "",
    // heureArriv: "",
    // heureDepart: "",
    id: 1,
    driverId: 123,
    villeDepartId: 456,
    villeArrivId: 789,
    heureDepart: "2024-05-12T08:00:00Z",
    date: "2024-05-12",
    heureArriv: "2024-05-12T10:00:00Z",
    prix: 50.0,
    placeDispo: 3,
    placeInitiale: 5,
    status: true,
  });

  const hardOffre = {
    id: 1,
    driverId: 1,
    villeDepart: 1,
    villeArriv: 2,
    heureDepart: "2024-05-12T08:00:00Z",
    date: "2024-05-12",
    heureArriv: "2024-05-12T10:00:00Z",
    prix: 50.0,
    placeDispo: 3,
    placeInitiale: 5,
    status: true,
  };

  async function myFunction() {
    try {
      const user = await UserService.getCurrentUser();
      console.log(user);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(localStorage.getItem("token"));
    UserService.ajouterOffre(hardOffre, localStorage.getItem("token")!);
    console.log(myFunction());
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
        <h1 className='text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100'>Add New Ride</h1>
        <form className='space-y-4' onSubmit={handleSubmit}>
          <div>
            <label className='block text-sm font-medium text-gray-700 dark:text-gray-300' htmlFor='villeArrivId'>
              villeArrivId
            </label>
            <input
              className='w-full p-2 border'
              id='villeArrivId'
              name='villeArrivId'
              placeholder='Enter pickup location'
              type='text'
              value={formData.villeArrivId}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700 dark:text-gray-300' htmlFor='to'>
              villeDepartId
            </label>
            <input
              className='w-full p-2 border'
              id='villeDepartId'
              name='villeDepartId'
              placeholder='Enter drop-off location'
              type='text'
              value={formData.villeDepartId}
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
          <div>
            <label className='block text-sm font-medium text-gray-700 dark:text-gray-300' htmlFor='driverId'>
              Driver id
            </label>
            <input
              type='string'
              id='driverId'
              name='driverId'
              value={formData.driverId}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700 dark:text-gray-300' htmlFor='heureArriv'>
              heureArriv
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
            <label className='block text-sm font-medium text-gray-700 dark:text-gray-300' htmlFor='heureDepart'>
              heureDepart
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
            Add Ride
          </Button>
        </form>
      </div>
    </div>
  );
}
