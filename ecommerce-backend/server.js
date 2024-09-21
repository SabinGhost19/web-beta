const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Conectare la MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectat la MongoDB'))
  .catch((error) => console.error('Eroare la conectare:', error));

// Rute
app.use('/api/products', productRoutes);

app.listen(PORT, () => {
  console.log(`Serverul rulează pe portul ${PORT}`);
});
