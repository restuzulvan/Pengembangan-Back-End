const express = require("express");
const app = express();
const port = 3000;
const user = require('./user');
const book = require('./book');
const rent = require('./rent');

// menggunakan modul
app.use('/user', user);
app.use('/book', book);
app.use('/rent', rent);

// routing
app.get('/', (req, res) => {
    res.send("Ambil data");
});
app.post('/send', (req, res) => {
    res.send("Kirim data");
});
app.put('/edit', (req, res) => {
    res.send("Edit data");
});
app.patch('/edit-data', (req, res) => {
    res.send("Edit data");
});
app.delete('/hapus', (req, res) => {
    res.send("Hapus data");
});


app.listen(port,()=>{
    console.log(`Aplikasi berjalan pada http://localhost:${port}`);
});