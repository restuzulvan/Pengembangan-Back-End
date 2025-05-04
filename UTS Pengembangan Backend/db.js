const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // kosongkan jika pakai XAMPP default
  database: 'toko'
});

db.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

module.exports = db;
