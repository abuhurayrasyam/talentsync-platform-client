import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../context/Auth/AuthContext';

const Logout = () => {

    const {logoutUser} = useContext(AuthContext);

    const handleLogoutUser = () => {
            logoutUser()
            .then(() => {
                Swal.fire({
                    icon: "success",
                    title: "Logout successful!",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(() => {
                Swal.fire({
                    title: "Logout unsuccessful!",
                    icon: "error",
                    draggable: true
                });
            })
        }

    return (
        <button onClick={handleLogoutUser} className='bg-[#EAE4D5] border border-[#B6B09F] rounded-sm text-gray-800 text-xs md:text-base font-semibold px-2.5 py-2 md:px-4 cursor-pointer'>Logout</button>
    );
};

export default Logout;