import React, { useState } from "react";
import { auth } from "../../Database/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import "../../css/App.css";
import FoodSearch from '../../FoodSearch';

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
        <div className='sign-in-container'>
            <form onSubmit={signIn}>
                <input type="email" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" className="primary-button">Log in</button>
            </form>

            {/* Add the FoodSearch component here */}
            <FoodSearch />
        </div>
    );
};

export default SignIn;
