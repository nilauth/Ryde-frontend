import { useState } from "react";
import axios from "axios";
import DatePicker from "@/components/DatePicker";
import { Button } from "@/components/ui/button";
import UserService from "@/services/userService";

export default function Component() {
  const [formData, setFormData] = useState({
    villeDep: "",
    villeArrv: "",
    date: "",
  });

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
      console.log(response.data);
      // Handle response or update UI accordingly
    } catch (err) {
      console.error("Error:", err);
      // Handle error or display error message
    }
  };

  return (
    <main key='1' className='w-full max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-20'>
      <div className='grid gap-16 justify-center'>
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
              <label className='text-sm font-medium' htmlFor='villeDep'>
                Ville de départ
              </label>
              <input
                className='w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 text-sm focus:border-primary focus:ring-primary dark:bg-gray-950 dark:text-gray-50'
                id='villeDep'
                name='villeDep'
                value={formData.villeDep}
                onChange={handleChange}
                placeholder='Entrez la ville de départ'
                type='text'
              />
            </div>
            <div className='space-y-2'>
              <label className='text-sm font-medium' htmlFor='villeArrv'>
                Ville d'arrivée
              </label>
              <input
                className='w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 text-sm focus:border-primary focus:ring-primary dark:bg-gray-950 dark:text-gray-50'
                id='villeArrv'
                name='villeArrv'
                value={formData.villeArrv}
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
            <input type='date' id='date' name='date' value={formData.date} onChange={handleChange} required />
          </div>
          <Button className='w-full' type='submit'>
            Rechercher
          </Button>
        </form>
      </div>
    </main>
  );
}
