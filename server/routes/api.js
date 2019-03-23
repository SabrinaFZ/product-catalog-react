const express = require('express');
const router = express.Router();

const data = require('./../data/phones.json');

router.get('/phones', (_, res) => {
    try{
        res.json({
            success: true,
            results: data
        });
    } catch(err){
        res.status(500).json({
            success: false,
            error: err.toString()
        });
    }
    
});

module.exports = router;