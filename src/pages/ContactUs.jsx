import React, { useEffect } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import useDocumentTitle from '../hooks/useDocumentTitle';

const ContactUs = () => {

    useEffect(() => {
            window.scrollTo(0, 0);
        }, []);
    
    useDocumentTitle("Talentsync Platform | Contact Us");

  return (
    <div className="bg-base-100 text-neutral min-h-screen py-12 px-4 md:px-16 lg:px-24">
      <div className="w-11/12 mx-auto text-center">

        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Get in Touch</h1>
        <p className="text-lg text-gray-500 mb-10">
          Have questions or need assistance? We're here to help!
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl border-l-4 border-primary transition-all">
            <FaPhoneAlt className="text-accent text-3xl mb-3 mx-auto" />
            <h3 className="text-lg font-semibold mb-1">Phone</h3>
            <p className="text-gray-600">+880 1500-000000</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl border-l-4 border-primary transition-all">
            <FaEnvelope className="text-accent text-3xl mb-3 mx-auto" />
            <h3 className="text-lg font-semibold mb-1">Email</h3>
            <p className="text-gray-600 break-all">info@talentsync-platform.com</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl border-l-4 border-primary transition-all">
            <FaMapMarkerAlt className="text-accent text-3xl mb-3 mx-auto" />
            <h3 className="text-lg font-semibold mb-1">Address</h3>
            <p className="text-gray-600">MUSAFIR House, Tangail-1980</p>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-primary mb-2">Need support?</h2>
          <p className="text-gray-500 mb-4">Our support team is ready to assist you with any queries or issues.</p>
          <a href="mailto:info@talentsync-platform.com">
            <button className="btn bg-primary text-white hover:bg-secondary hover:text-neutral shadow-md px-6 py-2 rounded-md">
                Email Us Now
            </button>
           </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;