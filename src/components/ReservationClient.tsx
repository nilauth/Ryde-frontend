import { Search } from "lucide-react";
import { Link } from "react-router-dom";

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
              <input
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
              <input
                className='w-full px-4 py-3 rounded-md border border-gray-300 focus:border-primary focus:ring-primary dark:bg-gray-800 dark:border-gray-700 dark:focus:border-primary'
                id='end-city'
                placeholder="Entrer Ville d'arrivée"
                type='text'
              />
            </div>
            <div className='space-y-2'>
              <label className='text-sm font-medium' htmlFor='date'>
                Date
              </label>
              <input
                className='w-full px-4 py-3 rounded-md border border-gray-300 focus:border-primary focus:ring-primary dark:bg-gray-800 dark:border-gray-700 dark:focus:border-primary'
                id='date'
                type='date'
              />
            </div>
            <div className='space-y-2'>
              <label className='text-sm font-medium' htmlFor='passengers'>
                Passagers
              </label>
              <input
                className='w-full px-4 py-3 rounded-md border border-gray-300 focus:border-primary focus:ring-primary dark:bg-gray-800 dark:border-gray-700 dark:focus:border-primary'
                id='passengers'
                min='1'
                placeholder='Nombres de passagers'
                type='text'
              />
            </div>
            <Link
              className='self-end h-fit md:col-span-1 bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-md transition-colors duration-300 flex items-center justify-center hover:bg-primary/95'
              type='submit'
              to='/course/reservation'
            >
              <div className=' flex gap-2 justify-center items-center'>
                Rechercher
                <Search className='h-4 w-4' />
              </div>
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
}
