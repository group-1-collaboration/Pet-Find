# 🐾 Pet Find

A modern and responsive web application that helps connect loving families with pets looking for a forever home. Users can browse available pets, learn about each pet's personality and health information, create an account, and book a viewing session before proceeding with the adoption process.

---

## 📖 Overview

The Pet Adoption Platform simplifies the pet adoption journey by allowing users to:

* Browse pets available for adoption
* View detailed pet profiles
* Search and filter pets by category
* Create an account and log in securely
* Book an in-person viewing appointment
* Manage bookings and user sessions
* Enjoy a responsive and accessible user experience across all devices

The goal of the platform is to encourage responsible pet adoption while making it easier for shelters and potential adopters to connect.

---

## ✨ Features

### 🏠 Home Page

* Attractive hero section
* Featured pets
* Adoption process overview
* Call-to-action buttons
* Responsive navigation bar
* Footer with useful links

### 🐶 Pet Listings

* Display available pets
* Pet cards with:

  * Image
  * Name
  * Breed
  * Age
  * Gender
  * Adoption status
* Responsive card layout

### 🔍 Search & Filtering

Users can search or filter pets by:

* Name
* Species
* Breed
* Age
* Adoption status

### 📄 Pet Details

Each pet profile contains:

* Multiple images
* Description
* Breed
* Age
* Gender
* Vaccination status
* Health information
* Personality traits
* Adoption fee (if applicable)

### 👤 User Authentication

* User registration
* Login
* Logout
* Protected routes
* Authentication context

### 📅 Viewing Session Booking

Registered users can:

* Select a pet
* Choose an available date
* Choose a preferred time
* Submit a booking request
* Receive booking confirmation

### 🌙 Modern UI

* Responsive design
* Mobile-friendly layouts
* Accessible components
* Clean typography
* Modern cards and buttons
* Glassmorphism-inspired styling

---

# 🛠️ Technologies Used

### Frontend

* React
* Vite
* Tailwind CSS
* shadcn/ui
* React Router DOM
* Lucide React Icons

### State Management

* React Context API
* React Hooks

### Development Tools

* npm
* Git
* GitHub
* ESLint

---

# 📂 Project Structure

```
pet-adoption-platform/
│
├── public/
│   └── images/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── AboutUs.jsx
│   │   ├── BookingForm.jsx
│   │   ├── BookingForm.jsx
│   │   ├── categories.jsx
│   │   └── category pets.jsx
│   │   └── editPet.jsx
│   │   └── ManagePets.jsx
│   │   └── ManageRequests.jsx
│   │   └── ui
│   │
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   └── ThemeContext.jsx
│   │   └── Favourites.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Pets.jsx
│   │   ├── PetDetails.jsx
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── Booking.jsx
│   │   └── Profile.jsx
│   │
│   ├── data/
│   │   └── pets.json
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
├── README.md
└── LICENSE
```

---

# 🚀 Installation

Clone the repository

```bash
git clone https://github.com/group-1-collaboration/Pet-Find.git
```

Navigate into the project

```bash
cd Pet-Find
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

The application will run locally on

```
http://localhost:5173
```

---

# 📦 Build for Production

```bash
npm run build
```

Preview the production build

```bash
npm run preview
```

---

# 🔐 Authentication

The application supports user authentication allowing users to:

* Register an account
* Log in securely
* Access protected pages
* Book viewing sessions
* Log out safely

Authentication state is managed using React Context.

---

# 📅 Booking Process

1. Browse available pets.
2. Select a pet you'd like to meet.
3. Open the pet's details page.
4. Click **Book Viewing**.
5. Choose a preferred date and time.
6. Submit your booking.
7. Receive a booking confirmation.

---

# 📱 Responsive Design

The application is optimized for:

* Mobile phones
* Tablets
* Laptops
* Desktop monitors

---

# 🧪 Future Improvements

Potential future enhancements include:

* Email confirmation for bookings
* Shelter administrator dashboard
* Online adoption application forms
* Pet recommendations
* Google Maps integration
* Live chat support
* Notifications
* Backend database integration
* Payment support for adoption fees

---

# 👥 Team Members

| Role               | Responsibilities                              |
| ------------------ | --------------------------------------------- |
| Project Manager    | GitHub management, navigation ,Authentication and protected routes|
| Frontend Developer | pet listings, API integration      |
| Frontend Developer |  Admin dashboard and functionality             |
| Frontend Developer | Booking system,favourites feature   |

---

# 🤝 Contributing

1. Fork the repository.
2. Create a new feature branch.
3. Commit your changes.
4. Push your branch.
5. Open a Pull Request for review.

---

# 📄 License

This project is licensed under the MIT License.

---

# Authors
Imani Naitore
Juanita Kavata
Denis Mwangi
Jason 
---

## 🐾 Adopt, Don't Shop

Every adoption gives a pet a second chance at a loving home.
