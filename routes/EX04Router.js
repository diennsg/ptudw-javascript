let express = require('express');
let router = express.Router();

router.get('/', (req, res)=>{
    let EX4Controller = require('./routes/JScobanController');
    console.log('kq: ' + EX4Controller.average([0]));
    console.log('kq: ' + EX4Controller.average([1,2,3]));
    console.log('kq: ' + EX4Controller.average([1,2,3,4]));
    console.log('kq: ' + EX4Controller.average([1,4,4,4,1]));
    console.log('kq: ' + EX4Controller.average([-12,-13,512,1337]));

    res.send('ket qua xem tai Terminal')
});

module.exports = router;