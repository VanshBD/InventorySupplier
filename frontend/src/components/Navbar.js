// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav className="bg-black text-white p-4">
        <div className="container mx-auto flex justify-between">
            <div>
                <Link to="/" className="text-xl font-bold">Inventory Management</Link>
            </div>
            <div className="flex space-x-4">
                <Link to="/inventory" className="hover:underline">Inventory</Link>
                <Link to="/suppliers" className="hover:underline">Suppliers</Link>
            </div>
        </div>
    </nav>
);

export default Navbar;
