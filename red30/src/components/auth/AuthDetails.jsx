import React, { useEffect, useState } from 'react';
import { auth } from '../../Database/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log('signed out successfully');
        navigate('/');
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className='authstyle'>
        {authUser ? (
          <>
            <p className='signed-user'>{`Signed In as ${authUser.email}`}</p>
            <button onClick={userSignOut}>Sign Out</button>
            {/* Render the food search button when logged in */}
            <Link className='inlogknop' to={'/foodsearch'}>
              foodsearch
            </Link>
          </>
        ) : (
          <p>Signed Out</p>
        )}
      </div>
    </>
  );
};

export default AuthDetails;
