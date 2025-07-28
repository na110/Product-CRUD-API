# Product CRUD API

A full-featured **Node.js + Express + MongoDB** REST API for managing products, including:

- CRUD operations
- Input validation using **Joi**
- Centralized error handling

---

## Tech Stack

- **Node.js** / **Express**
- **MongoDB** / **Mongoose**
- **Joi** for input validation
- **dotenv** for environment config

---

## Setup

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
npm install
npm run dev
```

## API Documentation

\*\* All routes are prefixed with: /api/products

1- Get all products
GET /api/products

2- Create a new product

POST /api/products
body: {
"title": "iPhone 16 Pro Max",
"price": 1999.99,
"category": "electronics",
"description": "One of the must great mobile ever apple has made it."
}

3- Update a product by ID

PUT /api/products/:id
body: {
"title": "iPhone 11 Pro Max",
"price": 400,
"category": "electronics",
"description": "One of the must great mobile ever apple has made it."
}

4- Delete a product by ID

DELETE /api/products/:id
