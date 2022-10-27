let express = require('express');
let router = express.Router();
//========================================================================
router.get('/', (req, res)=>{
    var x = 10;
    console.log(x);
    x = 'jane';
    console.log(x);
    x = {ten: 'A', ho: 'nguyenvan'}
    console.log(`${x.ho} ${x.ten}`);
    x = ['A', 'B', 'C'];

    x.forEach(y => console.log(y));
    //========================================================================

    x = 15;
    if(x>= 14 && x<= 17){
            statusbar = 'ok!'
    } else {
            statusbar = 'non'
    };
        console.log(statusbar);
    //========================================================================

    x = 'thu 2';
    switch(new Date().getDate()){
            case 6:
                x = 'thu 7'
                break
            case 6:
                x = 'chu nhat'
                break
            default:
                x = 'sao cung duoc'
    };
    console.log(x);
    //========================================================================

    x = 0;
    for(let i = 0; i < 10; ++i){
            x += i;
    };
    console.log(x);
    //========================================================================
    let i = 0;
    do{
        i *= 2;
        console.log(i + ', '); 
    } while(i < 20);
    //========================================================================

    function addNumber(a, b){
            return a +b;
        };
    console.log(addNumber(1,2));
    //========================================================================
    x = {
            ho: 'nguyen',
            ten: 'A',
            tuoi: 18
        };
    console.log(`${x.ho} ${x.ten} ${x.tuoi} tuoi`);
    //========================================================================
    var mang = [40, 100, 25, 10, 1, 7];
    mang.sort(function(a,b) {return a-b});
    console.log(mang);
    res.send('ket qua xem tai Terminal')
});
//========================================================================
module.exports = router;