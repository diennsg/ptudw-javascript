let sinhviens = require('./Students.js');
let slowRandom = require('./slowRandom.js')
let controller = {};
// exports ra nhieu ket qua: generate / average / normalize

controller.generate = async (sinhviens)=>{
    for(let i = 0; i < sinhviens.length; ++i){
        let sv = sinhviens[i];
        for(let j =0; j < sv.grades.length;++j){
            grades[j].grade = await slowRandom(0,10);
            // use Promise
            //slowRabdom(0,10).then(x => sv.grades[j].grade = x);
        }
    }
    
};
controller.average = (sinhviens)=>{
    let total = 0;
    for(let i = 0; i < sinhviens.length; ++i){
        let sv = sinhviens[i];
        for(let j =0; j < sv.grades.length;++j){
            total += sv.grades.grade[j];
        }
        sinhviens[i].average = sinhviens[i].length > 0 ? total / sinhviens[i].length : 0;
    }  
};

controller.normalize = (sinhviens)=>{
    for(let i = 0; i < sinhviens.length; ++i){
        let sv = sinhviens[i];
        for(let j =0; j < sv.grades.length;++j){
            sv.grades.grade[j] = parseFloat(sv.grades.grade[j].toFixed(2));
        }
        sinhviens[i].average = parseFloat(sinhviens[i].average.toFixed(2))
    }
};

module.exports = controller;