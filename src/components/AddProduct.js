import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: 0,
    stock: 0,
    imageUrl: ''
  });

  // Funcția pentru a actualiza valorile în formular
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  // Funcția pentru a trimite formularul
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/products/add', product);
      console.log('Produsul a fost adăugat:', response.data);
    } catch (error) {
      console.error('Eroare la adăugarea produsului:', error);
    }
  };

  return (
    <div className="container">
      <h2>Adaugă un nou produs</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nume produs:</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Descriere:</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Preț:</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Stoc:</label>
          <input
            type="number"
            name="stock"
            value={product.stock}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>URL Imagine:</label>
          <input
            type="text"
            name="imageUrl"
            value={product.imageUrl}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Adaugă produs</button>
      </form>
    </div>
  );
};

export default AddProduct;
