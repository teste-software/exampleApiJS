
const express = require('express');
const router = express.Router();

router.get('/davi/:id', (req, res) => {
    const {id} = req.params;
    if (id === '123') return res.status(200).json({message: 'id exsite'});
    return res.status(200).json({message: 'id n existe'})
})

module.exports = router;
