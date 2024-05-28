"use client"
import React, { useState } from 'react';


function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const result = await response.json();

      if (response.ok) {
        setSuccess(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setError(result.message || 'An error occurred. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-auto">
      <div></div>
      <div>
        <div className="max-w-md mx-auto mt-10 p-4 rounded-lg shadow-md">
          <div className="mb-6">
            <h2 className="text-xl text-white font-semibold mb-4">Your email</h2>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 h-10 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tapez votre texte ici..."
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <h2 className="text-xl text-white font-semibold mb-4">Name</h2>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 h-10 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tapez votre texte ici..."
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <h2 className="text-xl text-white font-semibold mb-4">Subject</h2>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full p-2 h-10 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tapez votre texte ici..."
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <h2 className="text-xl text-white font-semibold mb-4">Message</h2>
            <textarea
              id="message"
              name="message"
              className="w-full p-2 h-40 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tapez votre texte ici..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button
            onClick={handleSubmit}
            className="w-full py-2 mt-4 bg-gradient-to-br from-blue-400 via-blue-800 to-red-500 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            {loading ? 'Sending...' : 'Send Me'}
          </button>
          {success && <p className="text-green-500 mt-4">Message sent successfully!</p>}
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>
      </div>
    </div>
  );
}

export default Contacts;