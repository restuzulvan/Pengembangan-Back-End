const express = require("express");
const router = express.Router();

// routing
router.get('/:id',(req, res)=> {
    res.send(`user id : ${req.params.id}`);
});

router.post('/send', (req, res) => {
    res.send("Kirim data kelas");
});
router.put('/edit', (req, res) => {
    res.send("Edit data kelas");
});
router.patch('/edit-data', (req, res) => {
    res.send("Edit data kelas");
});
router.delete('/hapus', (req, res) => {
    res.send("Hapus data kelas");
});

module.exports = router;