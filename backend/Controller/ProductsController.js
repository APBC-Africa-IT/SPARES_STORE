import Product from '../Models/Product.js';

export const createProduct = async (req, res) => {
  const { name, description, price, category, stock } = req.body;
  try {
    const newProduct = new Product({ name, description, price, category, stock });
    const product = await newProduct.save();
    res.status(201).json(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find().populate('category');
    res.json(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Add more functions for update and delete
