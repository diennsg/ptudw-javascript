let express = require('express');
const { json } = require('sequelize');
let router = express.Router();

router.get('/', (req, res)=>{
    //res.sendFile(__dirname + '/input.html');
    res.render('index');
});

module.exports = router;


