let express = require('express');
let router = express.Router();

router.get('/', (req, res)=>{
    let slowController = require('./slowStudentController');
    let students = require('./Students');
    console.log(JSON.stringify(students));

    (async function(){
        await slowController.generate(students);
        console.log(JSON.stringify(students));

        slowController.average(students);
        console.log(JSON.stringify(students));

        slowController.normalize(students);
        console.log(JSON.stringify(students));
    })();

});

module.exports = router;