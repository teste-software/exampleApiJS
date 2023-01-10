
const express = require('express');
const router = express.Router();
const ClientBuss = require("../business/client");


const clientBus = new ClientBuss()
router.get('/davi/:id', (req, res) => {
    const {id} = req.params;

    const message = clientBus.getId(id);
    return res.status(200).json({message})
})

module.exports = router;
