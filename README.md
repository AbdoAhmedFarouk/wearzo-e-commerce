# 🛍️ Wearzo - E-Commerce Application

A modern, fully-featured e-commerce platform built with **React**, **Vite**, and **Firebase**. Wearzo offers a seamless shopping experience with product browsing, user authentication, shopping cart management, and checkout functionality.

## ✨ Features

- **Product Catalog**: Browse and search through a diverse collection of fashion items
- **User Authentication**: Secure sign-up and login using Firebase
- **Shopping Cart**: Add, remove, and manage products in your cart
- **Checkout Process**: Multi-step checkout with address and payment information
- **User Profile**: Manage personal information and view order history
- **Product Reviews & Ratings**: Rate and review products
- **Responsive Design**: Fully responsive UI built with Tailwind CSS
- **Real-time Updates**: Powered by Firebase for seamless data synchronization
- **Product Return**: Request returns for purchased items

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: Recoil
- **Backend/Authentication**: Firebase
- **Routing**: React Router v6
- **HTTP Client**: Axios
- **Notifications**: React Toastify & SweetAlert2
- **Email Service**: EmailJS
- **Icons**: React Icons

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Firebase account (for backend services)
- (Optional) JSON Server (for local product data mocking)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd 01-wearzo-ecommerce
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Firebase Configuration

Update your Firebase configuration in `src/firebase.js` with your Firebase credentials:

```javascript
const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID',
};
```

### 4. Run the Development Server

```bash
npm run dev
```

The app will start at `http://localhost:5173` (or the next available port if 5173 is in use).

## ⚠️ If Products Don't Appear - Using JSON Server

If you experience issues with products not loading, the application is configured to work with **JSON Server** for local development:

### 1. Install JSON Server (if not already installed)

```bash
npm install -g json-server
```

### 2. Create a `db.json` file in the project root

```json
{
  "products": [
    {
      "id": 1,
      "name": "Product Name",
      "price": 99.99,
      "category": "shirts",
      "description": "Product description",
      "image": "product-image.jpg"
    }
  ]
}
```

### 3. Start JSON Server

```bash
json-server --watch db.json --port 3001
```

### 4. Update your API endpoints

The application will now fetch products from `http://localhost:3001/products`

## 📦 Available Scripts

```bash
# Development server (with hot reload)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

## 📁 Project Structure

```
src/
├── components/        # Reusable React components
├── pages/            # Page components for different routes
├── sections/         # Section components (Header, Footer, etc.)
├── atoms/            # Recoil state atoms
├── hooks/            # Custom React hooks
├── assets/           # Static assets and data files
├── ui/               # UI utility components
├── firebase.js       # Firebase configuration
├── App.jsx           # Main App component
├── main.jsx          # React entry point
└── index.css         # Global styles
```

## 🔐 Authentication

The app uses Firebase Authentication for secure user registration and login. Users can:

- Create new accounts with email and password
- Sign in to existing accounts
- Reset forgotten passwords
- Manage profile information

## 🛒 Shopping Features

- **Add to Cart**: Add products to cart with quantity selection
- **Cart Management**: View, update, or remove items from cart
- **Checkout**: Complete multi-step checkout process
- **Order Tracking**: View order history and status
- **Product Returns**: Request returns with reason and comments

## 🎨 Styling

The project uses **Tailwind CSS** for styling with custom configurations. CSS is organized with:

- Global styles in `index.css`
- Component-specific styles using Tailwind classes
- PostCSS for vendor prefixing

## 📝 Notes for Development

- The app uses **Recoil** for global state management
- **Axios** is configured for HTTP requests
- **React Router** handles navigation between pages
- Ensure Firebase is properly configured before running the app
- For local development with products, JSON Server is recommended as an alternative to backend APIs

## 🐛 Troubleshooting

**Products not loading?**

- Ensure your Firebase configuration is correct
- Check browser console for errors
- If using JSON Server, verify it's running on port 3001
- Check that the database/API endpoint is accessible

**Authentication issues?**

- Verify Firebase credentials are correct
- Check that Authentication is enabled in Firebase Console
- Clear browser cache and try again

## 📄 License

This project is open source. Feel free to use it for learning and development purposes.

## 👨‍💻 Author

Developed as a comprehensive e-commerce learning project.

---

**Happy Shopping! 🎉**
