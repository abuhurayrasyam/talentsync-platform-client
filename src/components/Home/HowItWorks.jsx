import React from 'react';
import { FaPlusCircle, FaSearch, FaHandshake } from 'react-icons/fa';

const steps = [
  {
    icon: <FaPlusCircle className="text-5xl text-accent mx-auto mb-4" />,
    title: "Post a Task",
    description:
      "Create a task with title, budget, deadline, and description. Let freelancers know what you need.",
  },
  {
    icon: <FaSearch className="text-5xl text-accent mx-auto mb-4" />,
    title: "Browse & Bid",
    description:
      "Freelancers explore tasks, apply filters, and place bids based on their expertise and availability.",
  },
  {
    icon: <FaHandshake className="text-5xl text-accent mx-auto mb-4" />,
    title: "Connect & Complete",
    description:
      "Task owners review bids, select freelancers, and collaborate to get the job done on time.",
  },
];

const HowItWorks = () => {
  return (
    <div className="pt-10 pb-6">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-10">How It Works</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="text-center px-4">
            {step.icon}
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-primary">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;