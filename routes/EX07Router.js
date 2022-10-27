let express = require('express');
let router = express.Router();

router.get('/', (req, res)=>{
    let svcontroller = require('./StudentController');
    let students = require('./Students');
    console.log(JSON.stringify(students));

    svcontroller.generate(students);
    console.log(JSON.stringify(students));

    svcontroller.average(students);
    console.log(JSON.stringify(students));
    
    svcontroller.normalize(students);
    console.log(JSON.stringify(students));

    res.send('xem ket qua tai Terminal !');
});

module.exports = router;