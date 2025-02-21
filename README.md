# E-commerce Website Using MERN Stack

This project is an E-commerce website developed using the **MERN stack** (MongoDB, Express.js, React.js, and Node.js). It incorporates additional tools such as **Redux-Toolkit** for state management and **TailwindCSS** for responsive and modern UI design. The website provides core e-commerce functionalities including user authentication, product catalog, shopping cart, payment processing, and order tracking.

---

## Features

- **User Authentication**: Secure user login and registration using JWT authentication and password hashing.
- **Product Catalog**: Dynamic product listing and search functionality.
- **Shopping Cart**: Add products to cart, update quantities, and remove items.
- **Order Processing**: Track and manage user orders.
- **Responsive UI**: Mobile-first and responsive design using **TailwindCSS**.
- **State Management**: Efficient state management with **Redux-Toolkit** for seamless data handling across the app.

---

## Technologies Used

- **Frontend**: React.js, Redux-Toolkit, TailwindCSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT), bcrypt.js
- **State Management**: Redux Toolkit
- **Styling**: TailwindCSS

---

## Installation

Follow the steps below to get your development environment up and running.

### Prerequisites

- Node.js and npm installed
- MongoDB database (either locally or using a cloud provider like MongoDB Atlas)

### Clone the Repository

```bash
git clone https://github.com/regmi-keshav/e-Commerce-Site.git
cd e-Commerce-Site
```

### Frontend Setup

1. Navigate to the frontend directory:

    ```bash
    cd front-end
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the `client` directory and add your environment variables (e.g., API URLs).

4. Start the frontend development server:

    ```bash
    npm start
    ```

### Backend Setup

1. Navigate to the backend directory:

    ```bash
    cd back-end
    ```

2. Install the backend dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the `server` directory and add your environment variables for database connection and JWT secret.

4. Start the backend server:

    ```bash
    npm start
    ```

5. Ensure that the backend server is running at `http://localhost:5000` (or the port you specified in your `.env` file).

### Database Setup

1. Set up a MongoDB database (either locally or using MongoDB Atlas).
2. Add your database connection URI in the `.env` file in the backend directory.

---

## Usage

- **Registration**: Users can create an account by providing their email, name, and password.
- **Login**: Registered users can log in with their credentials to access their dashboard and make purchases.
- **Product Catalog**: View and search for products.
- **Shopping Cart**: Add items to the cart and proceed to checkout.
- **Checkout**: Enter shipping information and proceed with payment.
- **Order Tracking**: View order history and track current orders.

---
