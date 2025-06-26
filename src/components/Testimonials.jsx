import React from 'react';

const testimonials = [
    {
        name: "Sanjida",
        photo: "https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?t=st=1746711759~exp=1746715359~hmac=40cf1192371b9c757220ea0c327b343e01e260aeb226f92fb32e2f1cbabb31ee&w=996",
        rating: 5,
        review: "I found the perfect freelancer within hours of posting my task. The process was smooth and professional!"
    },
    {
        name: "Dua",
        photo: "https://img.freepik.com/premium-photo/businesswoman-portrait-her-office_53419-1802.jpg?ga=GA1.1.130173900.1746345150&semt=ais_hybrid&w=740",
        rating: 4,
        review: "Great platform for freelancers! I got hired quickly and the client was easy to work with."
    }
];

const Testimonials = () => {
  return (
    <div className="pt-10 pb-6">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-10">Trusted by Task Posters & Freelancers</h2>
      <div className="grid gap-8 md:grid-cols-2 w-11/12 mx-auto">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-secondary p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <img src={testimonial.photo} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover mr-4" />
              <div>
                <p className="font-semibold text-gray-800">{testimonial.name}</p>
                <div className="text-accent text-sm">
                  {"★".repeat(testimonial.rating)}{"☆".repeat(5 - testimonial.rating)}
                </div>
              </div>
            </div>
            <p className="text-gray-600 italic">"{testimonial.review}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;