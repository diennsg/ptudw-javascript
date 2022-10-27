let express = require('express');
let router = express.Router();

router.get('/', (req, res)=>{
    let EX3Controller = require('./routes/JScobanController');
    for(let i = 0; i < 30; i++){
        res.send(EX3Controller.fibonacci(i));
    }
});

module.exports = router;