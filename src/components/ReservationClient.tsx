import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import DatePicker from "@/components/DatePicker";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function ReservationClient() {
  return (
    <section className=' dark:bg-gray-800 pt-5 pb-20 bg-yellow-300'>
      <h2 className='text-4xl md:text-4xl font-bold mb-6 text-center'>Trouvez votre prochain trajet</h2>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='max-w-6xl mx-auto bg-white dark:bg-gray-900 rounded-2xl lg:shadow-md p-6 md:p-8 lg:p-10'>
          <form className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-6 mx-4'>
            <div className='space-y-2'>
              <label className='text-sm font-medium' htmlFor='start-city'>
                Ville de départ
              </label>
              <Input
                className='w-full px-4 py-3 rounded-md border border-gray-300 focus:border-primary focus:ring-primary dark:bg-gray-800 dark:border-gray-700 dark:focus:border-primary'
                id='start-city'
                placeholder='Entrer ville de départ'
                type='text'
              />
            </div>
            <div className='space-y-2'>
              <label className='text-sm font-medium' htmlFor='end-city'>
                Ville d'arrivée
              </label>
              <Input
                className='w-full px-4 py-3 rounded-md border border-gray-300 focus:border-primary focus:ring-primary dark:bg-gray-800 dark:border-gray-700 dark:focus:border-primary'
                id='end-city'
                placeholder="Entrer Ville d'arrivée"
                type='text'
              />
            </div>
            <div className='space-y-2 flex justify-between items-center md:block md:w-fit'>
              <label className='text-sm font-medium' htmlFor='date'>
                Date
              </label>
              <DatePicker />
            </div>
            <div
              className='space-y-2
            '
            >
              <label className='text-sm font-medium' htmlFor='passengers'>
                Passagers
              </label>
              <Input
                className='w-full px-4 py-3 rounded-md border border-gray-300 focus:border-primary focus:ring-primary dark:bg-gray-800 dark:border-gray-700 dark:focus:border-primary'
                id='passengers'
                min='1'
                placeholder='Nombres de passagers'
                type='text'
              />
            </div>
            <div className='flex items-end w-full '>
              <Link className='w-full' to='/course/reservation'>
                <Button type='submit' className='w-full'>
                  <div className=' flex gap-6 justify-between items-center'>
                    Rechercher
                    <Search className='h-4 w-4' />
                  </div>
                </Button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
