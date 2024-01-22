import React, { useState } from "react";
import { auth } from "../../Database/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import "../../css/App.css";
import FoodSearch from '../../FoodSearch';
import Header from "../header";

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => { 
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
            }).catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            <Header/>
        
        <div className='signInContainer'>
        <h1>inloggen</h1>
        <form onSubmit={signIn}>
          <input type="email" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} className='input' />
          <input type="password" placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} className='input' />
          <button type="submit" className='button'>Log in</button>
        </form>
      </div>
        </>
    );
};

export default SignIn;
