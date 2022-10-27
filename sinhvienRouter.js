let express = require('express');
let router = express.Router();

router.get('/', (req, res)=>{
    let sinhviens = require('./sinhviens.js');
    let slowrandom = require('./slowRandom.js');
    let slowcontroller = require('./sinhvienController');
    // Promise
    slowrandom(0, 10).then(x => console.log(x));

    // ham anomymus
    (async function(){
        let x = await slowrandom(0,10);
        console.log(x);

    })();

    (async function(){
        await slowcontroller.generate(sinhviens);
        console.log(JSON.stringify(sinhviens));

        slowcontroller.average(sinhviens);
        console.log(JSON.stringify(sinhviens));

        slowcontroller.normalize(sinhviens);
        console.log(JSON.stringify(sinhviens));
    })();

    });

module.exports = router;