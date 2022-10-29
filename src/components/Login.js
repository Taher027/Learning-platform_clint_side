import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config'
import { useState } from 'react';

const Login = () => {
    const auth = getAuth(app);
    const [user,setUser] = useState([]);


    const logout = ()=> {
        signOut(auth)
        .then(() => {
            console.log('sing out')
          }).catch((error) => {
            alert('sing out failed')
          });
    }
    const handleForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                setUser(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
            });
        

            onAuthStateChanged(auth, (user) => {
                if (user) {
                  // User is signed in, see docs for a list of available properties
                  // https://firebase.google.com/docs/reference/js/firebase.User
                  const uid = user.uid;
                  // ...
                } else {
                  // User is signed out
                  // ...
                }
              });
    }
    return (
        <div className='container'>
            <form onSubmit={handleForm}>

                <h1 className="h3 mb-3 fw-normal">Please Login</h1>

                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required name='email'/>
                    <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required name='password'/>
                    <label for="floatingPassword">Password</label>
                </div>
                {
                    user?  <button className="w-100 btn btn-lg btn-primary" type="submit">Log out</button> :  <button className="w-100 btn btn-lg btn-primary" type="submit">Log in</button>
                }
               

            </form>
            <div className='text-center'>
                <button className='fs-3 m-2'>
                    <FaGoogle></FaGoogle>
                </button>
                <button className='fs-3 m-2'>
                    <FaGithub></FaGithub>
                </button>
            </div>

            <Link to='/register'>Register</Link>

        </div>
    );
};

export default Login;