import { Link } from "react-router-dom";
import { UserNav } from "./UserNav";
import { Button } from "./ui/button";
import { useState } from "react";

const UserNavigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <nav className='bg-white border flex'>
      <div className='flex flex-wrap justify-between items-center mx-auto container p-5'>
        <Link className='flex items-center gap-2 font-semibold' to='/'>
          <img src='/src/assets/ribe.svg' className='h-8 w-8' />
          <span className='text-2xl'>Ryde</span>
        </Link>

        <div className='items-center justify-between font-medium flex  bg-red-50'>
          {isLoggedIn ? (
            <UserNav />
          ) : (
            <Link to='/login'>
              <Button>S'authentifier</Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default UserNavigation;
