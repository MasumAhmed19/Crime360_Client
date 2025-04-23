# 📌 Suggestify  

## 🚀 Introduction  

**Suggestify** is a dynamic product recommendation platform that helps users discover better alternatives for their favorite products. Users can create, update, or delete product queries while exploring detailed suggestions from others. The platform enables users to add and delete recommendations for specific products and engage in discussions through a commenting system.  

![Alt text](./public/suggestify%20hero.PNG)

With **JWT-secured authentication**, Suggestify ensures a **safe and personalized** experience. Users can register and log in using **Firebase authentication**, including email/password and Google OAuth. The platform provides seamless navigation, dynamic searching, sorting, and layout customization to enhance usability.  

## 📜 Table of Contents  

- [Live Demo](#-live-demo)  
- [Features](#-features)  
- [Installation](#-installation)  
- [Configuration](#-configuration)  
- [Usage](#-usage)  
- [Dependencies](#-dependencies)  
- [Contributors](#-contributors)  


## 🔗 Live Demo  

Check out the live version of **Suggestify**:  

🔗 [Live Link](https://suggestify-28d19.web.app/)  

## 📂 Repositories  

- 🖥️ **Client Repository:** [GitHub Link](https://github.com/MasumAhmed19/Suggestify_Client)  
- 🖥️ **Server Repository:** [GitHub Link](https://github.com/MasumAhmed19/Suggestify_Server)  

---

## ✨ Features  

### 🔐 Authentication & Security  
- **JWT-secured authentication** for user login & registration.  
- Secure login via **email/password & token-based authorization**.  
- **Firebase authentication** with email/password and Google OAuth.  

### 🛠️ Query & Recommendation Management  
- Users can **add, update, delete, and view** product queries.  
- Ability to **add and delete recommendations** for specific products.  
- Two different collections: **Queries & Recommendations**.  

### 🔍 Searching & Sorting  
- **Dynamic searching & sorting** features.  
- Category-wise query listing.  

### 🚀 Dynamic Routing & Navigation  
- **Protected routes** for managing products and recommendations.  
- **React Router DOM** for seamless navigation.  

### 🎨 User Experience & UI  
- **Responsive design** for mobile, tablet, and desktop views.  
- **Tailwind CSS, DaisyUI, and Material UI** for an interactive UI.  
- **Toast notifications** for actions like login, registration, and query updates.  

---

## 🛠️ Installation  

### 🔧 Prerequisites  
Ensure you have the following installed:  
- **Node.js** (v14 or later)  
- **npm** or **yarn**  
- **Firebase account** for authentication  

### 📥 Clone the Repository  

#### Client Setup  
```sh
git clone https://github.com/MasumAhmed19/Suggestify_Client.git  
cd Suggestify_Client  
```

#### Server Setup  
```sh
git clone https://github.com/MasumAhmed19/Suggestify_Server.git  
cd Suggestify_Server  
```

### 📦 Install Dependencies  

For the **client**:  
```sh
npm install  
```

For the **server**:  
```sh
npm install  
```

### 🚀 Start the Development Server  

For the **client**:  
```sh
npm run dev  
```

For the **server**:  
```sh
npm start  
```

---

## ⚙️ Configuration  

Create a `.env` file in the **root directory** of the client and add the following environment variables:  

```env
VITE_apiKey=YOUR_FIREBASE_API_KEY
VITE_authDomain=YOUR_FIREBASE_AUTH_DOMAIN
VITE_projectId=YOUR_FIREBASE_PROJECT_ID
VITE_storageBucket=YOUR_FIREBASE_STORAGE_BUCKET
VITE_messagingSenderId=YOUR_FIREBASE_MESSAGING_SENDER_ID
VITE_appId=YOUR_FIREBASE_APP_ID
VITE_API_URL=https://suggestify-server.vercel.app SERVER URL
```

Replace these values with your **Firebase credentials**  

---

## 💻 Usage  

1. **Register/Login** using Firebase authentication.  
2. **Create Queries** about products you want recommendations for.  
3. **Explore Recommendations** made by other users.  
4. **Add/Delete Your Own Recommendations** to help others.  
5. **Engage in Discussions** by adding comments to product queries.  
6. **Use Sorting & Filtering** to refine search results.  
7. **Navigate Easily** with protected routes.  

---

## 📦 Dependencies  

Here are the key dependencies used in **Suggestify**:  

### 🔹 Frontend Dependencies:  
- **React** - UI library  
- **React Router DOM** - Navigation  
- **Firebase** - Authentication  
- **Tailwind CSS** - Styling  
- **DaisyUI** - UI Components  
- **Material UI** - Additional UI components  
- **React Toastify** - Notifications  
- **Axios** - HTTP requests  

### 🔹 Backend Dependencies:  
- **Express.js** - Server framework  
- **MongoDB** - Database  
- **JWT (jsonwebtoken)** - Authentication  
- **CORS** - Cross-origin requests handling  
- **Dotenv** - Environment variables  

---

## 🤝 Contributors  

👤 **Masum Ahmed** - [GitHub Profile](https://github.com/MasumAhmed19)  


---

### 🎉 Enjoy using Suggestify! Happy Product Discovery! 🚀  

---