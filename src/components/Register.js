import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
       
        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
            handleUpdateUserProfile(name, photoURL);
            navigate('/');
        })
        .catch(e => {
          alert('something wrong')
        });
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
            .then(
              
             )
            .catch(
            );
    }
    return (
        <div className='container'>
            <form onSubmit={handleForm}>

                <h1 className="h3 mb-3 fw-normal">Please Register</h1>

                <div className="form-floating">
                    <input name="name" className="form-control" id="floatingInput" placeholder="Enter Your full name" required/>
                    <label for="floatingInput">Full Name</label>
                </div>
                <div className="form-floating">
                    <input name="photo" className="form-control" id="floatingInput" placeholder="Enter photo url" required/>
                    <label for="floatingInput">Photo url</label>
                </div>
                <div className="form-floating">
                    <input type="email" name='email' className="form-control" id="floatingInput" placeholder="name@example.com" required/>
                    <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" name='password' className="form-control" id="floatingPassword" placeholder="Password" required/>
                    <label for="floatingPassword">Password</label>
                </div>

               
                    <button className="w-100 btn btn-lg btn-primary" type="submit">
                        Submit
                    </button>
             


            </form>
        </div>
    );
};

export default Register;