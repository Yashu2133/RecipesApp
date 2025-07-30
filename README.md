## 🍲 Recipes App

A backend CRUD application for managing recipes, built using **Node.js**, **Express.js**,and **MongoDB** with **Mongoose**. The app follows the **MVC (Model-View-Controller)** architecture to keep things organized and scalable.

---

## 🚀 Features

- **Add new recipes**
- **View all recipes**
- **View a single recipe by ID**
- **Update an existing recipe**
- **Delete a recipe**

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with Mongoose)
- **Architecture**: MVC (Model, View, Controller)
- **Utilities**: dotenv, nodemon
- **Testing & Documentation**: Postman

---

## 📁 Folder Structure

RecipesApp/
│
├── controllers/
│ └── recipeController.js # Business logic for recipe routes
│
├── models/
│ └── recipe.js # Mongoose schema/model
│
├── routes/
│ └── recipeRouter.js # Route definitions
│
├── utils/
│ ├── config.js # Environment variables
│ ├── errorRoute.js # Fallback route handler
│ └── logger.js # Request logger middleware
│
├── .env # MongoDB URI & Port
├── app.js # Express app setup
├── server.js # Entry point
├── package.json
└── README.md

---

## 🔗 API Endpoints

Base URL: `http://localhost:PORT/api/v1/recipes`

| Method | Endpoint     | Description              |
|--------|--------------|--------------------------|
| GET    | `/`          | Get all recipes          |
| GET    | `/:id`       | Get a recipe by ID       |
| POST   | `/`          | Add a new recipe         |
| PUT    | `/:id`       | Update a recipe by ID    |
| DELETE | `/:id`       | Delete a recipe by ID    |

---

## 📄 Sample POST Request & Response

### POST `/api/v1/recipes`

**Request Body:**

```json
{
  "title": "Curd Rice",
  "ingredients": ["Rice", "Yogurt", "Curry Leaves", "Mustard Seeds"],
  "instructions": "Mix cooked rice with yogurt and temper with mustard seeds and curry leaves."
}
```

**Response:**

```json
{
  "_id": "...",
  "title": "Curd Rice",
  "ingredients": [...],
  "instructions": "..."
}
```

---

## ✅ Error Handling

1.All routes include try-catch blocks for exception safety.
2.Proper 404 handler via errorRoute.js.
3.Logs every incoming request using custom logger.js.