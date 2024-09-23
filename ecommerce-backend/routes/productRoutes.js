const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Ruta GET pentru toate produsele
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// Ruta POST pentru adăugarea unui nou produs
router.post('/add', async (req, res) => {
  const product = new Product({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    stock: req.body.stock,
    imageUrl: req.body.imageUrl,
  });

  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Produsul nu a fost găsit' });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Eroare server', error: error.message });
  }
});


router.delete('/delete/:id', async (req, res) => {
  try {
    //functia returneaza si produsul
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Produsul nu a fost găsit' });
    }
    res.json({ message: 'Produs șters cu succes' });
  } catch (error) {
    res.status(500).json({ message: 'Eroare la ștergerea produsului', error });
  }
});

module.exports = router;
