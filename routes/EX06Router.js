let express = require('express');
let router = express.Router();

router.get('/', (req, res)=>{
    let students = require('./Students');
    console.log(JSON.stringify(students));
    res.send('xem ket qua tai Terminal !');
});

module.exports = router;