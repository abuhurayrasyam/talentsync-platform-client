import React from 'react';
import { Link } from 'react-router';
import Lottie from 'lottie-react';
import errorAnimation from '../assets/lotties/error.json';
import useDocumentTitle from '../hooks/useDocumentTitle';

const Error = () => {
  useDocumentTitle("Talentsync Platform | Error");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-base-100">
      <div className="w-full max-w-md">
        <Lottie animationData={errorAnimation} loop={true} />
      </div>
      <h1 className="text-4xl md:text-5xl font-extrabold text-error mt-4">404 - Page Not Found</h1>
      <p className="text-gray-600 mt-2 mb-6 text-lg">
        Sorry, the page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="btn bg-primary text-white hover:bg-secondary hover:text-neutral px-6 py-2 rounded-md shadow-md"
      >
        Go to Homepage
      </Link>
    </div>
  );
};

export default Error;