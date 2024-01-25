import React from 'react'
import { Link } from 'react-router-dom';
import SignIn from './auth/SignIn'
import AuthDetails from "./auth/AuthDetails";

const Header = () => {
  return (
    <div className='main-header'>
      <div className='left-header'>
        <p>Red30</p>
        <AuthDetails/>
      </div>
      <Link className='inlogknop' to={"/login"}>Inloggen</Link>
      <Link className='inlogknop' to={"/register"}>Account aanmaken</Link>
      <Link className='inlogknop' to={"/"}>Home</Link>
    </div>
  )
}

export default Header
