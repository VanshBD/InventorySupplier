// src/components/InventoryList.js
import React from 'react';

const InventoryList = ({ inventory, onEdit, onDelete }) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-gray-900 text-white rounded-lg shadow-md">
                <thead>
                    <tr>
                        <th className="px-4 py-2 border-b border-gray-700 text-left">Item Name</th>
                        <th className="px-4 py-2 border-b border-gray-700 text-left">Quantity</th>
                        <th className="px-4 py-2 border-b border-gray-700 text-left">Category</th>
                        <th className="px-4 py-2 border-b border-gray-700 text-left">Supplier</th>
                        <th className="px-4 py-2 border-b border-gray-700 text-left">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {inventory.length === 0 ? (
                        <tr>
                            <td colSpan="5" className="text-center p-4">No inventory items available</td>
                        </tr>
                    ) : (
                        inventory.map((item) => (
                            item ? ( // Check if item is not null
                                <tr key={item._id} className="hover:bg-gray-800 transition-colors">
                                    <td className="px-4 py-2 border-b border-gray-700">{item.name}</td>
                                    <td className="px-4 py-2 border-b border-gray-700">{item.quantity}</td>
                                    <td className="px-4 py-2 border-b border-gray-700">{item.category}</td>
                                    <td className="px-4 py-2 border-b border-gray-700">{item.supplier ? item.supplier.name : 'N/A'}</td>
                                    <td className="px-4 py-2 border-b border-gray-700">
                                        <button
                                            className="bg-gray-700 hover:bg-white hover:text-black text-white px-4 py-2 rounded mr-2 transition-colors"
                                            onClick={() => onEdit(item)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition-colors"
                                            onClick={() => onDelete(item._id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ) : null // If item is null, return null
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default InventoryList;
