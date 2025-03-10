const express = require("express");
const router = express.Router();

// routing
router.get('/:id',(req, res)=> {
    res.send(`user id : ${req.params.id}`);
});

router.post('/send', (req, res) => {
    res.send("Kirim data");
});
router.put('/edit', (req, res) => {
    res.send("Edit data");
});
router.patch('/edit-data', (req, res) => {
    res.send("Edit data");
});
router.delete('/hapus', (req, res) => {
    res.send("Hapus data");
});

module.exports = router;