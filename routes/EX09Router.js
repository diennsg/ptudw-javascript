let express = require('express');
let router = express.Router();

router.get('/', (req, res)=>{
    let EX11Controller = require('./routes/JSnangcaoController');
    (async () => {
        let x = await EX11Controller.addAsync(2, 3);
        res.send('kq: ' + x);
    })();
});

module.exports = router;