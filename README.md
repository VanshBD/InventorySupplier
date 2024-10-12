# Inventory Management System

## Description

An Inventory Management System that allows users to manage inventory items, suppliers, and perform CSV exports for easy data handling. Built using Node.js, Express, MongoDB, and React with Tailwind CSS for the frontend.

## Features

- **CRUD Operations**: Create, Read, Update, and Delete inventory items.
- **Supplier Management**: Manage suppliers associated with inventory items.
- **CSV Import/Export**: Import inventory data from CSV files and export inventory data to CSV format.
- **Low Stock Alerts**: Fetch inventory items that are below a specified quantity threshold.
- **Responsive UI**: Built with React and styled using Tailwind CSS for a modern user experience.

## Technologies Used

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB (Mongoose)
  - json2csv (for CSV export)
  - csv-parser (for CSV import)

- **Frontend**:
  - React
  - Tailwind CSS
  - Axios (for API requests)

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- MongoDB
- npm (Node Package Manager)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/VanshBD/InventorySupplier.git
   ```

2. **Navigate to the backend directory**:

   ```bash
   cd InventorySupplier/backend
   ```

3. **Install backend dependencies**:

   ```bash
   npm install
   ```

4. **Set up the database**:

   Ensure MongoDB is running locally or configure your connection string in a `.env` file.

5. **Start the backend server**:

   ```bash
   npm start
   ```

6. **Navigate to the frontend directory**:

   ```bash
   cd ../frontend
   ```

7. **Install frontend dependencies**:

   ```bash
   npm install
   ```

8. **Start the frontend application**:

   ```bash
   npm start
   ```

### Usage

- Access the application at `http://localhost:3000` in your web browser.
- Use the provided features to manage your inventory and suppliers.

### API Endpoints

- **GET** `/api/inventory` - Retrieve all inventory items
- **POST** `/api/inventory/import` - Import inventory items from a CSV file
- **GET** `/api/inventory/low-stock` - Get low stock items based on a specified threshold
- **POST** `/api/inventory` - Add a new inventory item
- **PUT** `/api/inventory/:id` - Update an existing inventory item
- **DELETE** `/api/inventory/:id` - Delete an inventory item

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Author

- **Vansh Dobariya** - [GitHub Profile](https://github.com/VanshBD)
