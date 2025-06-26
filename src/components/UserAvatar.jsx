import React, { useContext } from 'react';
import { AuthContext } from '../context/Auth/AuthContext';

const UserAvatar = () => {

    const {user} = useContext(AuthContext);

    return (
        <div>
            {
                user && 
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar" title={user.displayName}>
                    <div className="w-8 md:w-12 rounded-full">
                        <img alt={user.displayName} src={user.photoURL} />
                    </div>
                </div>
            }
        </div>
    );
};

export default UserAvatar;