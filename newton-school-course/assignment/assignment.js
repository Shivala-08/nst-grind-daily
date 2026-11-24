const express = require("express");
const EventEmitter = require("events");
const { pool } = require("../db/config.js");
const { createProducts, createCart } = require("./migration");
require("dotenv").config();
const serverStatus = new EventEmitter();
const port = process.env.PORT;
const app = express();
app.use(express.json());
app.post("/products", async (req, res) => {
  const { name, quantity, price } = req.body;
  if (!name || !quantity || !price) {
    return res.status(400).json({ error: "invalid input" });
  }
  try {
    const [result] = await pool.query(
      "INSERT INTO products (name, quantity, price) VALUES (?, ?, ?)",
      [name, quantity, price]
    );
    return res.status(201).json({ id: result.insertId, name, quantity, price });
  } catch (err) {
    if (err.code === "ER_DUP_ENTRY") {
      // Handle duplicate entry error
      return res.status(400).json({ error: "Product name must be unique" });
    }
    console.error(err);
    return res.status(500).json({ error: "Failed to create product" });
  }
});