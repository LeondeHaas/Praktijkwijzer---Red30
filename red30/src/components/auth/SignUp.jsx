import React, { useState } from "react";
import { auth } from "../../Database/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Header from "../Header";

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUp = (e) => { 
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
            }).catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
      <Header />
      <div className='createAccountContainer'>
        <form className='createAccountForm' onSubmit={signUp}>
          <h1 className='createAccountTitle'>Create Account</h1>
          <input
            type="email"
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='createAccountInput'
          />
          <input
            type="password"
            placeholder='Enter your password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='createAccountInput'
          />
          <button type="submit" className='inlogknop'>Sign Up</button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
