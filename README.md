# 🛍️ Shopiy - Modern E-Commerce Platform

<div align="center">

![Shopiy Logo](https://img.shields.io/badge/Shopiy-E--Commerce-blue?style=for-the-badge&logo=shopping-cart)

**A full-stack e-commerce solution built with React, Node.js, and modern web technologies**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-green?style=for-the-badge&logo=vercel)](https://shopiy-client.vercel.app/)
[![Tech Stack](https://img.shields.io/badge/Tech%20Stack-React%20%7C%20Node.js%20%7C%20MongoDB-orange?style=for-the-badge)](https://github.com)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

</div>

---

## ✨ Features

### 🎯 **Customer Experience**
- **Modern UI/UX** - Beautiful, responsive design with Tailwind CSS and shadcn/ui components
- **Product Catalog** - Browse products with advanced filtering and search
- **Shopping Cart** - Persistent cart with real-time updates
- **Secure Payments** - Stripe integration for seamless checkout
- **Order Tracking** - Real-time order status updates
- **User Authentication** - Secure login/registration system

### 🛠️ **Admin Dashboard**
- **Product Management** - Add, edit, and manage products
- **Order Management** - Track and update order statuses
- **Inventory Control** - Monitor stock levels and categories
- **Analytics** - View sales and performance metrics

### 🔧 **Technical Features**
- **Real-time Updates** - Live order status and cart synchronization
- **Image Upload** - Cloudinary integration for product images
- **Responsive Design** - Mobile-first approach
- **API Integration** - RESTful API with Express.js
- **Database** - MongoDB with Mongoose ODM
- **Authentication** - JWT-based security

---

## 🚀 Tech Stack

### **Frontend**
- **React 18** - Modern UI library
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful component library
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **React Hook Form** - Form management
- **React Query** - Data fetching and caching

### **Backend**
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication tokens
- **Stripe** - Payment processing
- **Cloudinary** - Image management
- **Multer** - File upload handling

### **Deployment**
- **Vercel** - Frontend hosting
- **MongoDB Atlas** - Cloud database
- **Environment Variables** - Secure configuration

---

## 📱 Screenshots

<div align="center">

<img width="1348" height="685" alt="Screenshot 2025-09-12 051417" src="https://github.com/user-attachments/assets/c3a12d23-ffec-4eba-a940-019534b36676" />
<img width="1347" height="686" alt="Screenshot 2025-09-12 051323" src="https://github.com/user-attachments/assets/d122421f-5890-4708-9a4f-2b0c94558c52" />
<img width="1351" height="684" alt="Screenshot 2025-09-12 050631" src="https://github.com/user-attachments/assets/b39edd7e-24e1-484f-8374-b617b60c3991" />
<img width="1365" height="685" alt="Screenshot 2025-09-12 051915" src="https://github.com/user-attachments/assets/895a5cab-f5b2-4ee6-a706-9da820742a84" />


</div>

---

## 🛠️ Installation & Setup

### **Prerequisites**
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- Stripe account
- Cloudinary account

### **1. Clone the Repository**
```bash
git clone https://github.com/vnv2315/shopiy.git
cd shopiy
```

### **2. Backend Setup**
```bash
cd server
npm install

# Create .env file
cp .env.example .env

# Configure environment variables
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret

# Start the server
npm run server
```

### **3. Client Setup**
```bash
cd client
npm install

# Create .env file
VITE_BACKEND_URL=http://localhost:5000

# Start the development server
npm run dev
```

### **4. Admin Setup**
```bash
cd admin
npm install

# Create .env file
VITE_BACKEND_URL=http://localhost:5000

# Start the development server
npm run dev
```

---

## 🌐 API Endpoints

### **Authentication**
- `POST /api/user/register` - User registration
- `POST /api/user/login` - User login
- `POST /api/user/verify` - Email verification

### **Products**
- `GET /api/product/list` - Get all products
- `GET /api/product/:id` - Get single product
- `POST /api/product/add` - Add new product (Admin)
- `PUT /api/product/:id` - Update product (Admin)
- `DELETE /api/product/:id` - Delete product (Admin)

### **Orders**
- `POST /api/order/place` - Place order (COD)
- `POST /api/order/stripe` - Place order (Stripe)
- `POST /api/order/verify` - Verify Stripe payment
- `POST /api/order/orders` - Get user orders
- `GET /api/order/all` - Get all orders (Admin)
- `PUT /api/order/status` - Update order status (Admin)

### **Subscriptions**
- `POST /api/subscribe` - Newsletter subscription

---

## 🔧 Configuration

### **Environment Variables**

#### **Server (.env)**
```env
MONGODB_URI=mongodb://localhost:27017/shopiy
JWT_SECRET=your_super_secret_jwt_key
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

#### **Client (.env)**
```env
VITE_BACKEND_URL=http://localhost:5000
```

#### **Admin (.env)**
```env
VITE_BACKEND_URL=http://localhost:5000
```

---

## 🚀 Deployment

### **Frontend (Vercel)**
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### **Backend (Railway/Heroku)**
1. Connect your repository
2. Set environment variables
3. Deploy with automatic builds

### **Database (MongoDB Atlas)**
1. Create a MongoDB Atlas cluster
2. Get connection string
3. Update `MONGODB_URI` in environment variables

---

## 📊 Project Structure

```
shopiy/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── context/       # React context
│   │   ├── hooks/         # Custom hooks
│   │   └── lib/           # Utilities
│   └── public/            # Static assets
├── server/                # Node.js backend
│   ├── controllers/       # Route controllers
│   ├── models/           # Database models
│   ├── routes/           # API routes
│   ├── middleware/       # Custom middleware
│   └── config/           # Configuration files
├── admin/                # Admin dashboard
│   ├── src/
│   │   ├── components/   # Admin components
│   │   └── pages/        # Admin pages
│   └── public/           # Admin assets
└── README.md
```

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### **Development Guidelines**
- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---


## 🆘 Support

If you have any questions or need help:

- 📧 **Email**: vishnunv2315@gmail.com

---

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - The web framework used
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Component library
- [Stripe](https://stripe.com/) - Payment processing
- [MongoDB](https://www.mongodb.com/) - Database
- [Vercel](https://vercel.com/) - Hosting platform

---

<div align="center">

Made with ❤️ and lots of ☕

</div>
