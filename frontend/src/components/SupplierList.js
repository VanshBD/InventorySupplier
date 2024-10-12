// src/components/SupplierList.js
import React from 'react';

const SupplierList = ({ suppliers, onEdit, onDelete }) => {
    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4 text-white text-center">Suppliers</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-gray-900 text-white rounded-lg shadow-md">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border-b border-gray-700 text-left">Name</th>
                            <th className="px-4 py-2 border-b border-gray-700 text-left">Contact</th>
                            <th className="px-4 py-2 border-b border-gray-700 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {suppliers.length === 0 ? (
                            <tr>
                                <td colSpan="3" className="text-center p-4">No suppliers available</td>
                            </tr>
                        ) : (
                            suppliers.map((supplier) => (
                                <tr key={supplier._id} className="hover:bg-gray-800 transition-colors">
                                    <td className="px-4 py-2 border-b border-gray-700">{supplier.name}</td>
                                    <td className="px-4 py-2 border-b border-gray-700">{supplier.contact}</td>
                                    <td className="px-4 py-2 border-b border-gray-700">
                                        <button
                                            className="bg-gray-700 hover:bg-white hover:text-black text-white px-4 py-2 rounded mr-2 transition-colors"
                                            onClick={() => onEdit(supplier)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition-colors"
                                            onClick={() => onDelete(supplier._id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SupplierList;
