import React, { useState } from 'react';

const ContactForm = () => {
  // State to hold form values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send form data to Node.js backend
    fetch('http://localhost:5000/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          setStatus('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' }); // Clear form after successful submit
        } else {
          setStatus('An error occurred, please try again later.');
        }
      })
      .catch((error) => {
        setStatus('An error occurred, please try again later.');
        console.error('Error:', error);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Your Name"
          className="bg-white p-3 rounded-lg focus:shadow-form-shadow outline-none w-full mb-6"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Your Email"
          className="bg-white p-3 rounded-lg focus:shadow-form-shadow outline-none w-full mb-6"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Your Message"
          rows={5}
          cols={10}
          className="bg-white p-3 rounded-lg focus:shadow-form-shadow outline-none w-full mb-6"
        ></textarea>
        <button
          type="submit"
          className="bg-white border border-default-gold p-4 rounded-xl w-full text-default-green font-semibold hover:text-white hover:bg-default-gold duration-300 transition-all"
        >
          Submit
        </button>
      </form>

      {status && (
        <div
          className={`mt-4 text-center p-3 rounded ${
            status === 'Message sent successfully!'
              ? 'bg-green-500 text-white'
              : 'bg-red-500 text-white'
          }`}
        >
          {status}
        </div>
      )}
    </>
  );
};

export default ContactForm;
