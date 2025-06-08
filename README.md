# Shopping Cart System

## Overview

This is a multi-language shopping cart system that provides APIs for managing a shopping cart, calculating totals, and generating reports. The system is built using:
- **Java**: Core logic for pricing and discounts.
- **Node.js (Express)**: API server to interact with the cart.
- **Python**: Script for generating detailed reports.

## Features

- **Pricing Rules**:
  - Apple: 35p
  - Banana: 20p
  - Melon: BOGO (Buy One Get One Free)
  - Lime: 3 for 2
- **APIs**:
  - Add items to the cart.
  - Get the current cart.
  - Calculate the total price.
  - Generate a detailed report.

## Project Structure

- `/backend`: Contains Java logic for pricing and discounts.
- `/api`: Node.js Express server with API endpoints.
- `/reports`: Python script for generating reports.

## Prerequisites

- **Java**: Ensure Java is installed and added to your system's PATH.
- **Node.js**: Install Node.js and npm.
- **Python**: Install Python 3.

## How to Run

### 1. Compile Java Files
Navigate to the `backend` directory and compile the Java files:
```bash
cd backend
javac ShoppingCart.java ShoppingCartMain.java
```

### 2. Start the Node.js Server
Navigate to the `api` directory, install dependencies, and start the server:
```bash
npm install
npm start
```

### 3. Call API Endpoints
Use Postman, curl, or any HTTP client to interact with the APIs.

---

## API Endpoints

### 3. **Get Cart**
- **URL**: `/cart`
- **Method**: `GET`
- **Description**: Retrieve the current cart.
- **Response**:
  ```json
  {
    "cart": {
      "apple": 2,
      "banana": 1
    }
  }
  ```

### 4. **Add Item to Cart**
- **URL**: `/cart`
- **Method**: `POST`
- **Description**: Add an item to the cart.
- **Request Body**:
  ```json
  {
    "item": "apple"
  }
  ```
- **Response**:
  ```json
  {
    "message": "apple added",
    "cart": {
      "apple": 3,
      "banana": 1
    }
  }
  ```

### 5. **Get Total**
- **URL**: `/cart/total`
- **Method**: `GET`
- **Description**: Calculate the total price of items in the cart.
- **Response**:
  ```json
  {
    "total": 105
  }
  ```

### 6. **Generate Report**
- **URL**: `/cart/report`
- **Method**: `GET`
- **Description**: Generate a detailed report of the cart.
  ```
- **Response**:
  ```json
  {
    "summary": {
      "apple": 3,
      "banana": 2
    },
    "total_items": 5,
    "total_cost": 105,
    "mostFrequentItem": "apple"
  }
  ```