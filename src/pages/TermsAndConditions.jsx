import React, { useEffect } from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';

const TermsAndConditions = () => {

    useEffect(() => {
            window.scrollTo(0, 0);
        }, []);
    
    useDocumentTitle("Talentsync Platform | Terms and Conditions");

  return (
    <div className="bg-base-100 text-neutral py-16 px-4 md:px-12 lg:px-24 min-h-screen">
      <div className="w-11/12 mx-auto">

        <h1 className="text-4xl font-bold text-primary mb-6 text-center">Terms & Conditions</h1>
        <p className="text-gray-500 text-center mb-10">
          Please read these terms and conditions carefully before using Talentsync Platform.
        </p>

        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-primary mb-2">1. Acceptance of Terms</h2>
          <p className="text-gray-500">
            By accessing or using Talentsync Platform, you agree to be bound by these terms and conditions. If you do not agree, please do not use our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-primary mb-2">2. User Responsibilities</h2>
          <p className="text-gray-500">
            You are responsible for maintaining the confidentiality of your account and for all activities that occur under your account. You agree to provide accurate, current, and complete information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-primary mb-2">3. Posting Tasks & Bidding</h2>
          <p className="text-gray-500">
            Users may post tasks or bid on tasks in accordance with our community guidelines. Misuse, spam, or fraudulent activity may result in suspension or removal.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-primary mb-2">4. Payment Terms</h2>
          <p className="text-gray-500">
            All payments and transactions must be handled securely. We do not store payment information directly. Task agreements are between task posters and freelancers.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-primary mb-2">5. Termination of Access</h2>
          <p className="text-gray-500">
            We reserve the right to suspend or terminate access to any user who violates these terms, without prior notice or liability.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-primary mb-2">6. Changes to Terms</h2>
          <p className="text-gray-500">
            We may revise these Terms and Conditions from time to time. Updated versions will be posted on this page and take effect immediately.
          </p>
        </section>

        <div className="text-center mt-10">
          <p className="text-sm text-gray-500">
            Last Updated: June 26, 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
