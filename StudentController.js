let sinhviens = require('./sinhviens.js');
let Random = require('./random.js')
let controller = {};

controller.generate = (sinhviens)=>{
    for(let i = 0; i < sinhviens.length; ++i){
        let sv = sinhviens[i];
        for(let j =0; j < sv.grades.length;++j){
            grades[j].grade = Random(0,10);
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