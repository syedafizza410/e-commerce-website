'use client';

import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Display an alert when the form is submitted
    alert("Your message has been sent successfully!");
    setIsSent(true);
    setFormData({ name: "", email: "", message: "" }); // Clear the form after sending
  };

  return (
    <main className="flex flex-col items-center justify-center p-8 bg-black text-black min-h-screen">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-white mb-6">Contact Us</h1>

      {/* Form Container */}
      <div className="w-full max-w-2xl bg-gray-100 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        {isSent ? (
          <p className="text-green-600 font-bold">Your message has been sent successfully!</p>
        ) : (
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Your Full Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Your Email Address"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </main>
  );
};

export default Contact;
