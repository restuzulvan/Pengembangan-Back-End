// routes/supplier.js
const express = require('express');
const router = express.Router();
const db = require('../db');

// GET all
router.get('/', (req, res) => {
  db.query('SELECT * FROM supplier', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// GET by ID
router.get('/:id', (req, res) => {
  db.query('SELECT * FROM supplier WHERE idSup = ?', [req.params.id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result[0]);
  });
});

// POST new supplier
router.post('/', (req, res) => {
  const { namaSupplier, Perusahaan, barang, kuota, hari } = req.body;
  db.query(
    'INSERT INTO supplier (namaSupplier, Perusahaan, barang, kuota, hari) VALUES (?, ?, ?, ?, ?)',
    [namaSupplier, Perusahaan, barang, kuota, hari],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.json({ message: 'Supplier added', id: result.insertId });
    }
  );
});

// PUT update supplier
router.put('/:id', (req, res) => {
  const { namaSupplier, Perusahaan, barang, kuota, hari } = req.body;
  db.query(
    'UPDATE supplier SET namaSupplier=?, Perusahaan=?, barang=?, kuota=?, hari=? WHERE idSup=?',
    [namaSupplier, Perusahaan, barang, kuota, hari, req.params.id],
    (err) => {
      if (err) return res.status(500).send(err);
      res.json({ message: 'Supplier updated' });
    }
  );
});

// DELETE supplier
router.delete('/:id', (req, res) => {
  db.query('DELETE FROM supplier WHERE idSup = ?', [req.params.id], (err) => {
    if (err) return res.status(500).send(err);
    res.json({ message: 'Supplier deleted' });
  });
});

module.exports = router;
