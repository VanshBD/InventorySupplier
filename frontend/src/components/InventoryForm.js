import React, { useState, useEffect } from 'react';

const InventoryForm = ({ onSubmit, suppliers, currentItem }) => {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [category, setCategory] = useState('');
    const [supplier, setSupplier] = useState('');

    useEffect(() => {
        if (currentItem) {
            setName(currentItem.name);
            setQuantity(currentItem.quantity);
            setCategory(currentItem.category);
            setSupplier(currentItem.supplier?._id || '');
        } else {
            setName('');
            setQuantity('');
            setCategory('');
            setSupplier('');
        }
    }, [currentItem]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, quantity, category, supplier });
    };

    return (
        <form onSubmit={handleSubmit} className="container mx-auto p-4 bg-gray-800 rounded">
            <h2 className="text-xl text-white font-bold mb-4">{currentItem ? 'Edit Inventory Item' : 'Add Inventory Item'}</h2>
            <input type="text" placeholder="Item Name" value={name} onChange={(e) => setName(e.target.value)} required
                className="w-full mb-4 p-2 bg-gray-900 text-white border border-gray-700 rounded"/>
            <input type="number" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} required
                className="w-full mb-4 p-2 bg-gray-900 text-white border border-gray-700 rounded"/>
            <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} required
                className="w-full mb-4 p-2 bg-gray-900 text-white border border-gray-700 rounded"/>
            <select value={supplier} onChange={(e) => setSupplier(e.target.value)} 
                className="w-full mb-4 p-2 bg-gray-900 text-white border border-gray-700 rounded">
                <option value="">Select Supplier</option>
                {suppliers.map(supp => (
                    <option key={supp._id} value={supp._id}>{supp.name}</option>
                ))}
            </select>
            <button type="submit" className="bg-gray-700 hover:bg-white hover:text-black text-white px-4 py-2 rounded">
                Submit
            </button>
        </form>
    );
};

export default InventoryForm;
