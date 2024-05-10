import { PopoverTrigger, PopoverContent, Popover } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import DatePicker from "@/components/DatePicker";

export default function Component() {
  return (
    <main key='1' className='w-full max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-20'>
      <div className='grid gap-16 justify-center'>
        <div className='text-center space-y-2'>
          <h1 className='text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl'>Trouvez votre prochain trajet</h1>
          <p className='text-gray-500 dark:text-gray-400 max-w-md mx-auto'>
            Recherchez des trajets dans votre région et réservez votre voyage en toute simplicité.
          </p>
        </div>
        <form className='grid gap-6 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg max-w-2xl'>
          <div className='grid sm:grid-cols-2 gap-4'>
            <div className='space-y-2'>
              <label className='text-sm font-medium' htmlFor='departure'>
                Ville de départ
              </label>
              <input
                className='w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 text-sm focus:border-primary focus:ring-primary dark:bg-gray-950 dark:text-gray-50'
                id='departure'
                placeholder='Entrez la ville de départ'
                type='text'
              />
            </div>
            <div className='space-y-2'>
              <label className='text-sm font-medium' htmlFor='arrival'>
                Ville d'arrivée
              </label>
              <input
                className='w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 text-sm focus:border-primary focus:ring-primary dark:bg-gray-950 dark:text-gray-50'
                id='arrival'
                placeholder="Entrez la ville d'arrivée"
                type='text'
              />
            </div>
          </div>
          <div className='space-y-2'>
            <label className='text-sm font-medium' htmlFor='date'>
              Date
            </label>
            <DatePicker className='w-full flex justify-center items-center gap-6' />
            {/* <Popover>
              <PopoverTrigger asChild>
                <button
                  className='w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 text-sm font-medium text-left focus:border-primary focus:ring-primary dark:bg-gray-950 dark:text-gray-50'
                  type='button'
                >
                  <div className='flex items-center justify-between'>
                    <span>Sélectionnez une date</span>
                    <CalendarIcon className='h-5 w-5 text-gray-400' />
                  </div>
                </button>
              </PopoverTrigger>
              <PopoverContent className='p-0'>
                <Calendar />
              </PopoverContent>
            </Popover> */}
          </div>
          <Button className='w-full' type='submit'>
            Rechercher
          </Button>
        </form>
      </div>
    </main>
  );
}

function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M8 2v4' />
      <path d='M16 2v4' />
      <rect width='18' height='18' x='3' y='4' rx='2' />
      <path d='M3 10h18' />
    </svg>
  );
}
