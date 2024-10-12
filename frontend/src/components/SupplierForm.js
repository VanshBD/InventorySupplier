// src/components/SupplierForm.js
import React, { useState, useEffect } from 'react';

const SupplierForm = ({ onSubmit, currentSupplier }) => {
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        if (currentSupplier) {
            setName(currentSupplier.name);
            setContact(currentSupplier.contact);
        } else {
            setName('');
            setContact('');
        }
    }, [currentSupplier]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Clear previous errors

        if (!name || !contact) {
            setError('All fields are required.');
            return;
        }

        try {
            await onSubmit({ name, contact });
            setName('');
            setContact('');
        } catch (err) {
            setError('Failed to submit the form. Please try again.');
            console.error("Form submission error:", err);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg mb-4 shadow-md">
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                    placeholder="Enter supplier name"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="contact">
                    Contact
                </label>
                <input
                    type="text"
                    id="contact"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    className="w-full px-3 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                    placeholder="Enter contact details"
                    required
                />
            </div>
            <button
                type="submit"
                className="bg-white text-black px-6 py-2 rounded-md hover:bg-black hover:text-white transition-colors"
            >
                {currentSupplier ? 'Update Supplier' : 'Add Supplier'}
            </button>
        </form>
    );
};

export default SupplierForm;
