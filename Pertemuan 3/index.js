const express = require("express");
const app = express();
const port = 3000;
const users = require('./users');
const mapel = require('./mapel');
const siswa = require('./siswa');
const guru = require('./guru');
const kelas = require('./kelas');

// menggunakan modul
app.use('/users', users);
app.use('/mapel', mapel);
app.use('/siswa', siswa);
app.use('/guru', guru);
app.use('/kelas', kelas);

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