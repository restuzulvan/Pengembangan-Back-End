const express = require("express");
const router = express.Router();

// routing
router.get('/:id',(req, res)=> {
    res.send(`user id : ${req.params.id}`);
});

router.post('/send', (req, res) => {
    res.send("Kirim data users");
});
router.put('/edit', (req, res) => {
    res.send("Edit data users");
});
router.patch('/edit-data', (req, res) => {
    res.send("Edit data users");
});
router.delete('/hapus', (req, res) => {
    res.send("Hapus data users");
});

module.exports = router;