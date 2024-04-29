import Footer from "@/components/Footer";
import ReservationClient from "@/components/ReservationClient";
import UserNavigation from "@/components/UserNavigation";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

export default function AcceuilClient() {
  return (
    <>
      <UserNavigation isAuth={false} />
      <section className='py-12 md:py-16'>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='grid md:grid-cols-2 gap-8 items-start '>
            <div>
              <h1 className='text-4xl lg:text-8xl font-bold mb-4 text-center md:text-start'>
                Simplifiez vos déplacements avec{" "}
                <span className='p-2 text-5xl lg:text-9xl italic bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'>
                  Ryde
                </span>
              </h1>
              <p className='text-gray-600 mb-6 md:pr-20 mt-10 text-xl leading-8 text-center md:text-start'>
                Trouvez facilement des conducteurs ou des passagers pour partager vos trajets et réduisez vos coûts de
                transport.
              </p>
            </div>
            <img
              alt='Ryde'
              className=' rounded-sm none md:block'
              height={650}
              src='/main-pic.jpg'
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width={850}
            />
          </div>
        </div>
      </section>
      <ReservationClient />
      <section className='py-12 md:pt-30 md:pb-60 bg-white'>
        <div className='container mx-auto px-4 md:px-6'>
          <h2 className='text-2xl md:text-5xl md:py-20 font-bold mb-16 text-center text-gray-950'>
            Principales fonctionnalités
          </h2>
          <div className='grid md:grid-cols-3 gap-8'>
            <div className='bg-white rounded-lg shadow-md p-6 border'>
              <MapPinIcon className='h-8 w-8 mb-4 text-blue-500' />
              <h3 className='text-xl font-bold mb-2'>Recherche de trajets</h3>
              <p className='text-gray-600'>
                Trouvez facilement des conducteurs ou des passagers pour vos trajets quotidiens ou occasionnels.
              </p>
            </div>
            <div className='bg-white rounded-lg shadow-md p-6 border'>
              <CalendarCheckIcon className='h-8 w-8 mb-4 text-blue-500' />
              <h3 className='text-xl font-bold mb-2'>Planification des trajets</h3>
              <p className='text-gray-600'>
                Planifiez vos trajets à l'avance et coordonnez-vous avec vos covoitureurs.
              </p>
            </div>
            <div className='bg-white rounded-lg shadow-md p-6 border'>
              <TextIcon className='h-8 w-8 mb-4 text-blue-500' />
              <h3 className='text-xl font-bold mb-2'>Messagerie intégrée</h3>
              <p className='text-gray-600'>Communiquez facilement avec vos covoitureurs pour organiser vos trajets.</p>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-slate-50 py-12 md:pt-30 md:pb-60'>
        <div className='container mx-auto px-4 md:px-6'>
          <h2 className='text-2xl md:text-5xl md:py-20 font-bold mb-16 text-center'>Témoignages d'utilisateurs</h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <Card>
              <CardContent className='p-6'>
                <div className='flex items-center mb-4'>
                  <Avatar className='mr-4'>
                    <AvatarImage alt='User Avatar' src='/placeholder-user.jpg' />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className='text-lg font-bold'>John Doe</h4>
                    <p className='text-gray-600'>Utilisateur depuis 1 an</p>
                  </div>
                </div>
                <p className='text-gray-600'>
                  "Ryde a complètement changé ma façon de me déplacer. Je fais des économies et je rencontre de
                  nouvelles personnes sympathiques."
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className='p-6'>
                <div className='flex items-center mb-4'>
                  <Avatar className='mr-4'>
                    <AvatarImage alt='User Avatar' src='/placeholder-user.jpg' />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className='text-lg font-bold'>Jane Smith</h4>
                    <p className='text-gray-600'>Utilisatrice depuis 6 mois</p>
                  </div>
                </div>
                <p className='text-gray-600'>
                  "L'application est très facile à utiliser et me permet de trouver facilement des covoitureurs pour mes
                  trajets. Je la recommande vivement!"
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className='p-6'>
                <div className='flex items-center mb-4'>
                  <Avatar className='mr-4'>
                    <AvatarImage alt='User Avatar' src='/placeholder-user.jpg' />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className='text-lg font-bold'>Michael Johnson</h4>
                    <p className='text-gray-600'>Utilisateur depuis 2 ans</p>
                  </div>
                </div>
                <p className='text-gray-600'>
                  "Ryde m'a permis de réduire considérablement mes dépenses de transport. C'est une excellente solution
                  pour les personnes qui cherchent à faire des économies."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className='py-12 md:pt-30 md:pb-60'>
        <div className='container mx-auto px-4 md:px-6'>
          <h2 className='text-2xl md:text-5xl md:py-20 font-bold mb-16 text-center'>Les avantages du covoiturage</h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <div className='bg-white rounded-lg shadow-md p-6 border'>
              <DollarSignIcon className='h-8 w-8 mb-4 text-blue-500' />
              <h3 className='text-xl font-bold mb-2'>Économies</h3>
              <p className='text-gray-600'>
                Partagez les frais de transport avec d'autres personnes et réduisez vos dépenses.
              </p>
            </div>
            <div className='bg-white rounded-lg shadow-md p-6 border'>
              <RecycleIcon className='h-8 w-8 mb-4 text-blue-500' />
              <h3 className='text-xl font-bold mb-2'>Écologie</h3>
              <p className='text-gray-600'>
                Contribuez à la réduction de l'empreinte carbone en partageant vos trajets.
              </p>
            </div>
            <div className='bg-white rounded-lg shadow-md p-6 border'>
              <UsersIcon className='h-8 w-8 mb-4 text-blue-500' />
              <h3 className='text-xl font-bold mb-2'>Sociabilité</h3>
              <p className='text-gray-600'>Rencontrez de nouvelles personnes et créez des liens sociaux.</p>
            </div>
            <div className='bg-white rounded-lg shadow-md p-6 border'>
              <ClockIcon className='h-8 w-8 mb-4 text-blue-500' />
              <h3 className='text-xl font-bold mb-2'>Gain de temps</h3>
              <p className='text-gray-600'>Évitez les embouteillages et gagnez du temps sur vos trajets.</p>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-slate-50 py-12 md:pt-30  md:pb-60'>
        <div className='container mx-auto px-4 md:px-6 flex justify-center items-center flex-col'>
          <h2 className='text-2xl md:text-5xl font-bold mb-16 md:py-10 text-center'>Questions fréquentes</h2>
          <Accordion className='md:w-[1000px] w-full' collapsible type='single'>
            <AccordionItem value='question1'>
              <AccordionTrigger className='text-base md:text-2xl'>Comment fonctionne Ryde ?</AccordionTrigger>
              <AccordionContent>
                <p className='text-gray-600 md:text-xl'>
                  Ryde vous permet de trouver facilement des conducteurs ou des passagers pour partager vos trajets.
                  Vous pouvez publier vos trajets, consulter les offres disponibles et communiquer avec les autres
                  utilisateurs pour organiser vos déplacements.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='question2'>
              <AccordionTrigger className='text-base md:text-2xl'>
                Quels sont les avantages du covoiturage ?
              </AccordionTrigger>
              <AccordionContent>
                <p className='text-gray-600 md:text-xl'>
                  Le covoiturage vous permet de réaliser des économies, de réduire votre empreinte carbone, de
                  rencontrer de nouvelles personnes et de gagner du temps en évitant les embouteillages.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='question3'>
              <AccordionTrigger className='text-base md:text-2xl'>
                Comment puis-je m'inscrire sur Ryde ?
              </AccordionTrigger>
              <AccordionContent>
                <p className='text-gray-600 md:text-xl'>
                  Vous pouvez vous inscrire sur Ryde en cliquant sur le bouton "S'inscrire" en haut de la page. Vous
                  devrez remplir un formulaire avec vos informations personnelles et vos préférences de trajet.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
      <Footer />
    </>
  );
}

function CalendarCheckIcon(props) {
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
      <rect width='18' height='18' x='3' y='4' rx='2' ry='2' />
      <line x1='16' x2='16' y1='2' y2='6' />
      <line x1='8' x2='8' y1='2' y2='6' />
      <line x1='3' x2='21' y1='10' y2='10' />
      <path d='m9 16 2 2 4-4' />
    </svg>
  );
}

function CarIcon(props) {
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
      <path d='M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2' />
      <circle cx='7' cy='17' r='2' />
      <path d='M9 17h6' />
      <circle cx='17' cy='17' r='2' />
    </svg>
  );
}

function ClockIcon(props) {
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
      <circle cx='12' cy='12' r='10' />
      <polyline points='12 6 12 12 16 14' />
    </svg>
  );
}

function DollarSignIcon(props) {
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
      <line x1='12' x2='12' y1='2' y2='22' />
      <path d='M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' />
    </svg>
  );
}

function MapPinIcon(props) {
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
      <path d='M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z' />
      <circle cx='12' cy='10' r='3' />
    </svg>
  );
}

function RecycleIcon(props) {
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
      <path d='M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5' />
      <path d='M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12' />
      <path d='m14 16-3 3 3 3' />
      <path d='M8.293 13.596 7.196 9.5 3.1 10.598' />
      <path d='m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843' />
      <path d='m13.378 9.633 4.096 1.098 1.097-4.096' />
    </svg>
  );
}

function TextIcon(props) {
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
      <path d='M17 6.1H3' />
      <path d='M21 12.1H3' />
      <path d='M15.1 18H3' />
    </svg>
  );
}

function UsersIcon(props) {
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
      <path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' />
      <circle cx='9' cy='7' r='4' />
      <path d='M22 21v-2a4 4 0 0 0-3-3.87' />
      <path d='M16 3.13a4 4 0 0 1 0 7.75' />
    </svg>
  );
}
