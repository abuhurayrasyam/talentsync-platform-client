import React, { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import { Link } from 'react-router';
import { AuthContext } from '../context/Auth/AuthContext';
import Swal from 'sweetalert2';
import { toast, ToastContainer } from 'react-toastify';

const Register = () => {

    const {signUpUser, updateUserProfile} = useContext(AuthContext);

    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        
        if (!/[a-z]/.test(password)) {
            toast.error('Must include at least one lowercase letter.');
            return;
          }
        if (!/[A-Z]/.test(password)) {
            toast.error('Must include at least one uppercase letter.');
            return;
        }
        if (!/\d/.test(password)) {
            toast.error('Must include at least one number.');
            return;
        }
        if (!/[!@#$%&*?]/.test(password)) {
            toast.error('Must include at least one special character (!@#$%&*?).');
            return;
        }
        if (password.length < 8) {
            toast.error('Must be at least 8 characters long.');
            return;
        }

        signUpUser(email, password)
        .then(() => {
            updateUserProfile({displayName: name, photoURL: photo})
            .then(() => {
                // data transfer to db
                const userProfile = {
                    name,
                    photo,
                    email
                }

                fetch('http://localhost:3000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userProfile)
                })
                .then(res => res.json())
                .then(data => {
                    if(data.insertedId){
                        Swal.fire({
                            title: "Your account has been created successfully!",
                            icon: "success",
                            draggable: true
                        });
                    }
                })
            })
            .catch((error) => {
                console.log(error)
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return (
         <div className="hero bg-base-100 my-10">

            <ToastContainer></ToastContainer>
            
            <div className="card bg-base-100 w-full border border-gray-300 max-w-sm shrink-0 shadow-sm pb-3">
                <div className="card-body">
                    <h1 className="font-semibold text-center text-xl">Create an account</h1>
                    <form onSubmit={handleRegister} className="fieldset">
                    <label className="label">Your Name</label>
                    <input type="text" className="input" name='name' placeholder="Enter your name" required />
                    <label className="label">Photo URL</label>
                    <input type="text" className="input" name='photo' placeholder="Enter your photo url" required />
                    <label className="label">Email</label>
                    <input type="email" className="input" name='email' placeholder="Enter your email" required />
                    <label className="label">Password</label>
                    <div className='relative'>
                        <input type={showPassword ? "text" : "password"} className="input" name='password' placeholder="Enter your password" required />
                        <button onClick={() => {setShowPassword(!showPassword)}} className='absolute top-3 right-7 cursor-pointer'>
                            {
                                showPassword ? <IoEyeOutline size={15} /> : <IoEyeOffOutline size={15} />
                            }
                        </button>
                    </div>
                    <div className='flex items-center gap-1 mt-2'>
                        <input type="checkbox" defaultChecked className="checkbox h-5 w-5" />
                        <a className="link link-hover">Accept Term & Conditions</a>
                    </div>
                    <input type="submit" className="btn btn-neutral mt-4" value="Register" />
                    </form>
                    <h4 className="text-gray-500 text-center">Already Have an Account ? <Link to={'/auth/login'} className="text-red-600">Login</Link></h4>
                    <div className="flex items-center gap-2">
                        <div className="flex-1 border-t border-gray-400"></div>
                        <h4 className="text-gray-600 text-sm">Or</h4>
                        <div className="flex-1 border-t border-gray-400"></div>
                    </div>
                    <button className="btn btn-outline mt-1">
                    <FcGoogle className="text-xl" />
                    Continue with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;