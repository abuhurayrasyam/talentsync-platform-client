import React, { useContext, useEffect, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../context/Auth/AuthContext';
import Swal from 'sweetalert2';
import { toast, ToastContainer } from 'react-toastify';
import useDocumentTitle from '../hooks/useDocumentTitle';

const Register = () => {

    const {signUpUser, updateUserProfile, signInViaGoogle} = useContext(AuthContext);

    const [showPassword, setShowPassword] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

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

                const userProfile = {
                    name,
                    photo,
                    email
                }

                fetch('https://talentsync-platform.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userProfile)
                })
                .then(res => res.json())
                .then(data => {
                    if(data.insertedId){
                        navigate(`${location.state ? location.state : "/"}`)
                        Swal.fire({
                            icon: "success",
                            title: "Your account has been created successfully!",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })
            })
            .catch(() => {
                Swal.fire({
                    title: "Failed to create account. Please try again!",
                    icon: "error",
                    draggable: true
                });
            })
        })
        .catch((error) => {
            const errorCode = error.code;
            let message = "Something went wrong. Please try again.";
            if (errorCode === "auth/email-already-in-use") {
            message = "This email is already registered!";
            }
            Swal.fire({
            title: message,
            icon: "error",
            draggable: true
            });
        })
    }

    const handleGoogleSignIn = () => {
        signInViaGoogle()
        .then(() => {
            navigate(`${location.state ? location.state : "/"}`)
            Swal.fire({
                icon: "success",
                title: "You have signed in with Google successfully!",
                showConfirmButton: false,
                timer: 1500
            });
        })
        .catch(() => {
            Swal.fire({
                title: "Google sign-in failed. Please try again or use another account!",
                icon: "error",
                draggable: true
            });
        });
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useDocumentTitle("Talentsync Platform | SignUp");

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
                    <input type="submit" className="btn btn-neutral border-dotted shadow-none border-gray-50 mt-4" value="Register" />
                    </form>
                    <h4 className="text-gray-500 text-center">Already Have an Account ? <Link to={'/auth/login'} className="text-red-600">Login</Link></h4>
                    <div className="flex items-center gap-2">
                        <div className="flex-1 border-t border-gray-400"></div>
                        <h4 className="text-gray-600 text-sm">Or</h4>
                        <div className="flex-1 border-t border-gray-400"></div>
                    </div>
                    <button onClick={handleGoogleSignIn} className="btn btn-outline mt-1">
                    <FcGoogle className="text-xl" />
                    Continue with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;