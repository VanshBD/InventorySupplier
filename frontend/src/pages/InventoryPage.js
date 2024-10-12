import React, { useState, useEffect } from 'react';
import InventoryForm from '../components/InventoryForm';
import InventoryList from '../components/InventoryList';
import axios from 'axios';

import { fetchInventory, addInventory, updateInventory, deleteInventory, exportCSV, importCSV, fetchSuppliers } from '../api'; // Import fetchSuppliers

const InventoryPage = () => {
    const [inventory, setInventory] = useState([]);
    const [currentItem, setCurrentItem] = useState(null);
    const [suppliers, setSuppliers] = useState([]);
    const [importError, setImportError] = useState('');
    const [importSuccess, setImportSuccess] = useState('');

    useEffect(() => {
        loadInventory();
        loadSuppliers(); // Load suppliers on component mount
    }, []);

    const loadInventory = async () => {
        try {
            const { data } = await fetchInventory();
            setInventory(data);
        } catch (error) {
            console.error('Failed to fetch inventory:', error);
        }
    };

    const loadSuppliers = async () => {
        try {
            const { data } = await fetchSuppliers(); // Fetch suppliers from your API
            setSuppliers(data);
        } catch (error) {
            console.error('Failed to fetch suppliers:', error);
        }
    };

    const handleAddOrUpdate = async (itemData) => {
        try {
            if (currentItem) {
                const updatedData = { ...itemData }; // Using spread to capture all itemData
                await updateInventory(currentItem._id, updatedData);
            } else {
                const newData = { ...itemData };
                await addInventory(newData);
            }
            setCurrentItem(null);
            loadInventory();
        } catch (error) {
            console.error('Failed to save inventory item:', error);
            setImportError('Failed to save item. Please try again.'); // User feedback
        }
    };

    const handleEdit = (item) => {
        setCurrentItem(item);
    };

    const handleDelete = async (itemId) => {
        try {
            await deleteInventory(itemId);
            loadInventory();
        } catch (error) {
            console.error('Failed to delete inventory item:', error);
            setImportError('Failed to delete item. Please try again.'); // User feedback
        }
    };

    const handleCSVExport = async () => {
        try {
            const response = await exportCSV();
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'inventory.csv');
            document.body.appendChild(link);
            link.click();
            link.remove();
        } catch (error) {
            console.error('Failed to export CSV:', error);
            setImportError('Failed to export CSV. Please try again.'); // User feedback
        }
    };

    const handleCSVImport = async (event) => {
        event.preventDefault();
        const file = event.target.file.files[0];
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await axios.post('http://localhost:5400/api/inventory/import', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            const { data } = response;
            if (data.errors) {
                setImportError(data.errors.join(', '));
                setImportSuccess('');
            } else {
                setImportSuccess('Import successful!');
                setImportError('');
                loadInventory(); // Ensure this function is correctly defined
            }
        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                console.error('Error response:', error.response.data);
                setImportError(`Error: ${error.response.data.message || 'Failed to import CSV'}`);
            } else if (error.request) {
                // The request was made but no response was received
                console.error('No response received:', error.request);
                setImportError('No response received from the server.');
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error('Axios error:', error.message);
                setImportError(`Axios error: ${error.message}`);
            }
            setImportSuccess('');
        }
    };


    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold text-white text-center mb-6">Inventory Management</h1>
            <InventoryForm onSubmit={handleAddOrUpdate} suppliers={suppliers} currentItem={currentItem} />
            <InventoryList inventory={inventory} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
    );
};

export default InventoryPage;
