import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <main className='h-screen w-full flex flex-col justify-center items-center'>
      <h1 className='text-[400px] font-extrabold text-[#1A2238]'>404</h1>
      <div className='bg-[#FF6A3D] text-[#1A2238] px-2 text-7xl font-bold rounded rotate-12 absolute'>
        Page Introuvable
      </div>
      <button className='mt-5'>
        <Link
          to='/admin/dashboard'
          className='relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring'
        >
          <span className='absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0'></span>

          <span className='text-2xl relative block px-8 py-3 border border-current font-bold text-[#1A2238]'>
            Revenir en accueil
          </span>
        </Link>
      </button>
    </main>
  );
};

export default Error404;
