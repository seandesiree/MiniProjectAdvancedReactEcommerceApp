# Mini Project: Advanced E-commerce React App

## Description
The FakeStore App is a React-based application designed for managing user accounts and products using the FakeStoreAPI. This project incorporates CRUD operations, user authentication, product management, and a shopping cart feature, all while following best practices in state management using Redux Toolkit and data fetching with React Query.

## Features
- **User CRUD Operations**:
  - Create User
  - User Login
  - Update User Profile
  - Delete User Account
- **Session Storage** for storing user tokens and data for persistence across sessions.
- **Product Catalog**:
  - Display products with details (title, price, description, image).
  - Sort and filter products based on user input.
- **Shopping Cart**:
  - Add, update, and remove products from the cart.
  - Calculate total amount and price dynamically.
  - Checkout functionality that clears the cart upon completion.
- **Order History**: View previously created shopping carts.
- **Accessibility**: Semantic HTML and ARIA roles for screen reader compatibility.
- **Internationalization**: Language support using React-i18next.
- **Performance Optimization**: Utilize useMemo and useCallback for efficient rendering and computations.
  
## Technologies
- **Frontend**: React, Redux Toolkit, React Query, React Router, React-i18next
- **Styling**: CSS (or any preferred framework)
- **Testing**: Jest, React Testing Library
  
## Installation
To run the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/seandesiree/MiniProjectAdvancedReactEcommerceApp.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

## Usage
- Navigate to the login page and enter your credentials to log in.
- Use the product catalog to browse available products.
- Add products to your shopping cart and manage quantities.
- Access the shopping cart to view, modify, and checkout.
