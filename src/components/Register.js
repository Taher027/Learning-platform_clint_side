import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='container'>
            <form>
               
                <h1 className="h3 mb-3 fw-normal">Please Register</h1>

                <div className="form-floating">
                    <input name="name" className="form-control" id="floatingInput" placeholder="Enter Your full name"   />
                    <label for="floatingInput">Full Name</label>
                </div>
                <div className="form-floating">
                    <input name="photo" className="form-control" id="floatingInput" placeholder="Enter photo url"   />
                    <label for="floatingInput">Photo url</label>
                </div>
                <div className="form-floating">
                    <input type="email" name='email' className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" name='password' className="form-control" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Password</label>
                </div>
                
                <Link>
                <button className="w-100 btn btn-lg btn-primary" type="submit">
                Submit
                </button>
                </Link>
               
               
            </form>
        </div>
    );
};

export default Register;