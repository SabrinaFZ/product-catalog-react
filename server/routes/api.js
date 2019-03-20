const express = require('express');
const router = express.Router();

const data = require('./../data/phones.json');

router.get('/phones', (_, res) => {
    res.json({
        success: true,
        results: data
    });
});

module.exports = router;