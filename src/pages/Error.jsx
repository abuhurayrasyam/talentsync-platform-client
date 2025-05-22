import React from 'react';
import { Link } from 'react-router';
import useDocumentTitle from '../hooks/useDocumentTitle';

const Error = () => {

    useDocumentTitle("Talentsync Platform | Error");

    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
            <h1 className="text-4xl font-bold text-red-600 mb-2">404 - Page Not Found</h1>
            <p className="text-gray-600 mb-4">Oops! The page you’re looking for doesn’t exist.</p>
            <Link to="/" className="bg-green-800 text-white px-4 py-2 rounded-xl font-medium">Go to Homepage</Link>
        </div>
    );
};

export default Error;