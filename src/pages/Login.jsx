import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../context/Auth/AuthContext';
import Swal from 'sweetalert2';
import useDocumentTitle from '../hooks/useDocumentTitle';

const Login = () => {

    const {logInUser, signInViaGoogle} = useContext(AuthContext);

    const [showPassword, setShowPassword] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        logInUser(email, password)
        .then(() => {
            navigate(`${location.state ? location.state : "/"}`)
            Swal.fire({
                icon: "success",
                title: "Welcome! You’ve logged in successfully.",
                showConfirmButton: false,
                timer: 1500
            });
        })
        .catch((error) => {
            const errorCode = error.code;
            if (errorCode === "auth/invalid-credential") {
                Swal.fire({
                    title: "Incorrect email or password. Please try again.",
                    icon: "error",
                    draggable: true
                });
            }
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

    useDocumentTitle("Talentsync Platform | Login");

    return (
        <div className="hero bg-base-100 my-10">
            <div className="card bg-base-100 border border-gray-300 w-full max-w-sm shrink-0 shadow-sm pb-3">
                <div className="card-body">
                    <h1 className="font-semibold text-center text-xl">Login Your Account</h1>
                    <form onSubmit={handleLogin} className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" className="input" name="email" placeholder="Enter your email" required />
                    <label className="label">Password</label>
                    <div className='relative'>
                        <input type={showPassword ? "text" : "password"} className="input" name="password" placeholder="Enter your password" required />
                        <button onClick={() => {setShowPassword(!showPassword)}} className='absolute top-3 right-7 cursor-pointer'>
                            {
                                showPassword ? <IoEyeOutline size={15} /> : <IoEyeOffOutline size={15} />
                            }
                        </button>
                    </div>
                    <div> Forgot password?</div>
                    <input type="submit" className="btn btn-neutral border-dotted shadow-none border-gray-50 mt-4" value="Login" />
                    </form>
                    <h4 className="text-gray-500 text-center">Don't Have An Account ? <Link to={'/auth/signup'} className="text-red-600">SignUp</Link></h4>
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

export default Login;