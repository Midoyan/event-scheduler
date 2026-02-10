# React Events CRUD App

A React application built with Vite that consumes a RESTful Events API. The app supports authentication, protected routes, and CRUD operations for events, with a responsive UI styled using TailwindCSS.

## 🚀 Features

- React + Vite frontend
- TailwindCSS styling (DaisyUI optional)
- User authentication (Sign Up / Sign In)
- Protected routes with React Router
- API token persistence using localStorage
- Full CRUD operations for events
- RESTful API integration
- Responsive design
- Static-site deployment

## 🛠️ Tech Stack

- React
- Vite
- React Router
- TailwindCSS
- REST Events API
- Render (deployment)

## 📡 API Usage

The application interacts with a locally running Events API.

Main endpoints:
- GET /api/events
- GET /api/events/:id
- POST /api/events (authenticated)
- POST /api/users
- POST /api/auth/login

## ⚙️ Getting Started

Clone the repository:
    git clone https://github.com/your-username/react-events-crud.git
    cd react-events-crud

Install dependencies:
    npm install

Run the app:
    npm run dev

The application runs at:
    http://localhost:5173

## 🔒 Authentication

- Auth token is stored in localStorage
- Protected routes redirect unauthenticated users to Sign-In
- Token is automatically attached to API requests

## 🔁 Development Workflow

- Public GitHub repository
- All changes merged into main via Pull Requests only
- Incremental development

## 🚀 Deployment

Build the app:
    npm run build

Deploy the build output as a static site using Render.