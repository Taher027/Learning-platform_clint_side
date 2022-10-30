import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { getAuth } from "firebase/auth";
import app from '../firebase/firebase.config'
import { useState } from 'react';
import { AuthContext } from '../context/AuthProvider';

const Login = () => {
    const auth = getAuth(app);
   
    const {providerLogin, providerLogin2, user, signIn} = useContext(AuthContext)

    console.log(user)

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';
   
    const handleForm = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
            signIn(email,password)
            .then((userCredential) => {
                // Signed in 
                navigate(from, {replace: true});
               
            })
            .catch((error) => {
                const errorMessage = error.message;
                alert(errorMessage)
            });
        

           
    } 
    const handleGoogle = ()=> {
        providerLogin()
        .then( ()=> {
            navigate(from, {replace: true});
        } )
        .catch( (error)=> {
            const errorMessage = error.message;
            alert(errorMessage)

        } )
    }
    const handleGithub = ()=> {
        providerLogin2()
        .then( ()=> {
            navigate(from, {replace: true});
        } )
        .catch( (error)=> {
            const errorMessage = error.message;
            alert(errorMessage)

        } )
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
               <button className="w-100 btn btn-lg btn-primary" type="submit">Log in</button>

            </form>
            <div className='text-center'>
                <button className='fs-3 m-2' onClick={handleGoogle}>
                    <FaGoogle></FaGoogle>
                </button>
                <button className='fs-3 m-2' onClick={handleGithub}>
                    <FaGithub></FaGithub>
                </button>
            </div>

            <Link to='/register'>Register</Link>

        </div>
    );
};

export default Login;