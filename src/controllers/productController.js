import Product from "../models/Product.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
