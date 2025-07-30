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

```
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

```

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

---

## 🌐 Live Demo

You can access the live project here:
🔗 **Hosted URL**: [https://recipesapp-tlep.onrender.com]

To use the API routes, append the appropriate path:

* `GET /api/v1/recipes` – Get all recipes
* `GET /api/v1/recipes/:id` – Get a specific recipe
* `POST /api/v1/recipes` – Add a new recipe
* `PUT /api/v1/recipes/:id` – Update a recipe
* `DELETE /api/v1/recipes/:id` – Delete a recipe

---

## 📬 API Documentation

Postman documentation is publicly available here:
🔗 **Postman Docs**: [https://documenter.getpostman.com/view/35311398/2sB3B8rtAd]

---


## 📝 How to Run Locally

1. Clone the repo:

   ```bash
   git clone <your-repo-url>
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Add your MongoDB URI in a `.env` file:

   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=3001
   ```
4. Start the server:

   ```bash
   npm start
   ```
