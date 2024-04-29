import { Link } from "react-router-dom";
import LogoSVG from "./LogoSvg";

const Footer = () => {
  return (
    <footer className='bg-black  text-white py-10 px-4 md:px-6'>
      <div className='container mx-auto flex flex-col md:flex-row items-center justify-between'>
        <div className='flex items-center mb-4 md:mb-0 gap-x-2'>
          <LogoSVG color='white' />
          <span className='text-xl font-bold'>Ryde</span>
        </div>
        <nav className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4'>
          <Link className='hover:underline' to='#'>
            Mentions légales
          </Link>
          <Link className='hover:underline' to='#'>
            Politique de confidentialité
          </Link>
          <Link className='hover:underline' to='#'>
            Nous contacter
          </Link>
          <Link className='hover:underline' to='#'>
            À propos
          </Link>
          <Link className='hover:underline' to='#'>
            Carrières
          </Link>
        </nav>
        <p className='text-gray-100 text-sm mt-4 md:mt-0'>© 2024 Ryde. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
