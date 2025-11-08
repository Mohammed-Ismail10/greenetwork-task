# 🛍️ Product Management App

A simple and elegant product management web application that allows users to **view products**, **search for products**, and **view detailed information** for each one.  
Users can also **delete products** directly from the product details page.

---

## 🚀 Features

### 🏠 Home Page
- Displays a **list of all products** in a responsive grid layout.
- Includes a **search bar** to filter products by name in real time.
- Clicking a product card navigates to the product’s details page.

### 📄 Product Details Page
- Shows complete product information (name, description, price, image, etc.).
- Includes a **"Delete Product"** button to remove the selected product from the list.
- Smooth navigation back to the main product list.

### 🔍 Search Functionality
- Search products instantly by typing in the search field.
- Case-insensitive and dynamic search with no page reload.

---

## 🧱 Tech Stack

- **Next.js / React.js** — Frontend framework  
- **TypeScript** — Strongly typed development  
- **Tailwind CSS** — Utility-first responsive styling  
- **Shadcn/UI** — Reusable UI components  
- **React Router / Next.js Router** — Navigation between pages  
- **Fetch API / Axios** — For communicating with the backend API

---


 ## ⚙️ How It Works

1. **Fetching Products**
   - The app fetches all products from the backend API using `useProducts`.

2. **Searching**
   - The `Header` component contains an input field that triggers the `searchProduct` API.
   - The results are passed down to the `Products` component via props.

3. **Viewing Product Details**
   - When a user clicks a product card, they are redirected to `/products/[id]` where detailed information is displayed.

4. **Deleting a Product**
   - The `Delete` button in the product details page calls the `deleteProduct` API.
   - Once confirmed, the user is redirected back to the home page and the product list updates.
  

👨‍💻 Author
Mohammed Abdullah Ismail
Frontend Developer | JavaScript | React | Next.js