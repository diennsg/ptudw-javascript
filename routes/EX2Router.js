let express = require('express');
let router = express.Router();

router.get('/', (req, res)=>{
    let EX2Controller = require('./routes/JScobanController');
    res.send('ket qua: ' + EX2Controller.sortNumber(10,20,1));
});

module.exports = router;