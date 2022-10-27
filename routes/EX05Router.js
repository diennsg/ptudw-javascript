let express = require('express');
let router = express.Router();

router.get('/', (req, res)=>{
    let EX3Controller = require('./routes/JScobanController.js');
    let students = require('./routes/students.js');
    EX3Controller.sortSinhvien(students);
    for(let i = 0; i < students.lenght; i++){
        res.send(students[i].fullName());
    }
});

module.exports = router;