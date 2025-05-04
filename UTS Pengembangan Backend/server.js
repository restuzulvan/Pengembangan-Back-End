// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const supplierRoutes = require('./routes/supplier');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/suppliers', supplierRoutes);

const PORT = 3000;
app.get('/', (req, res) => {
  res.send('API Supplier Toko aktif');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});