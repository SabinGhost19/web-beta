const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,  // Adăugăm câmpul pentru URL-ul imaginii produsului
    required: false, // Acesta poate fi opțional dacă nu toate produsele au imagine
  }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

