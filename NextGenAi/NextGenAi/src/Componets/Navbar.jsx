import React, { useEffect, useState } from 'react';
import '../Componets/Navbar.css';
import { useClerk, useUser, UserButton } from '@clerk/clerk-react';
import {Link} from 'react-router-dom'

const Navbar = () => {
  const { user, isLoaded } = useUser();
  const { openSignIn } = useClerk();
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    if (isLoaded) {
      if (!user) {
        openSignIn();
      }
      setCheckingAuth(false);
    }
  }, [user, isLoaded, openSignIn]);


  if (checkingAuth) {
    return <div className="Navbar">Loading...</div>;
  }

  return (
    <div className='Navbar'>
      <div className="logo">NextGenAi</div>
      <div className="">
      <Link to="/histroy" className="his-button">   Histroy
              </Link></div>
      
      {user ? (
        <div className="flex items-center gap-4">
          <UserButton />

        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
