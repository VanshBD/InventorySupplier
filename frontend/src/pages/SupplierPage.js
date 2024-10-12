// src/pages/SupplierPage.js
import React, { useState, useEffect } from 'react';
import SupplierList from '../components/SupplierList';
import SupplierForm from '../components/SupplierForm';
import { fetchSuppliers, addSupplier, updateSupplier, deleteSupplier } from '../api';

const SupplierPage = () => {
    const [suppliers, setSuppliers] = useState([]);
    const [currentSupplier, setCurrentSupplier] = useState(null);

    useEffect(() => {
        loadSuppliers();
    }, []);

    const loadSuppliers = async () => {
        try {
            const response = await fetchSuppliers();
            setSuppliers(response.data);
        } catch (error) {
            console.error('Failed to fetch suppliers:', error);
        }
    };

    const handleFormSubmit = async (supplierData) => {
        try {
            
            if (currentSupplier) {
                await updateSupplier(currentSupplier._id, supplierData);
            } else {
                console.log("Submitting Supplier Data:", supplierData); // Add this line
                await addSupplier(supplierData);
            }
            setCurrentSupplier(null);
            loadSuppliers();
        } catch (error) {
            console.error('Failed to save supplier:', error);
        }
    };

    const handleEditSupplier = (supplier) => {
        setCurrentSupplier(supplier);
    };

    const handleDeleteSupplier = async (supplierId) => {
        try {
            await deleteSupplier(supplierId);
            loadSuppliers();
        } catch (error) {
            console.error('Failed to delete supplier:', error);
        }
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold text-white text-center mb-6">Manage Suppliers</h1>
            <SupplierForm onSubmit={handleFormSubmit} currentSupplier={currentSupplier} />
            <SupplierList
                suppliers={suppliers}
                onEdit={handleEditSupplier}
                onDelete={handleDeleteSupplier}
            />
        </div>
    );
};

export default SupplierPage;
