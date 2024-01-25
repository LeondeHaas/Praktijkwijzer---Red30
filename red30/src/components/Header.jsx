import React from 'react';
import { Link } from 'react-router-dom';
import SignIn from './auth/SignIn';
import AuthDetails from './auth/AuthDetails';

const Header = () => {
  return (
    <div className='main-header'>
      <div className='left-header'>
        <Link className='homeknop' to={'/'}>
          <div className='homered'>
            <h1> Red </h1>
          </div>
          <h1>30</h1>
        </Link>
      </div>
      <div className='right-header'>
        <AuthDetails />
        <Link className='inlogknop' to={'/login'}>
          Inloggen
        </Link>
        <Link className='inlogknop' to={'/register'}>
          Account aanmaken
        </Link>
      </div>
    </div>
  );
};

export default Header;
