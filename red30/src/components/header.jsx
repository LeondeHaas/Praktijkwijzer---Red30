import React from 'react'
import SignIn from './auth/SignIn'
import AuthDetails from "./auth/AuthDetails";

const header = () => {
  return (
    <div className='main-header'>
      <div className='left-header'>
        <p>Red30</p>
        <AuthDetails/>
      </div>
      <SignIn/>
    </div>
  )
}

export default header