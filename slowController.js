let sinhviens = require('./sinhviens.js');
let random = require('./random.js');
let controller = {};
// exports ra nhieu ket qua: generate / average / normalize

controller.generate =  async (sinhviens)=>{
    sinhviens.forEach(sv => {
        sv.grades.forEach(async x => x.grade = await slowRabdom(0,10))
    })
};
controller.average = (sinhviens)=>{
    sinhviens.forEach(sv => {
            let total = 0;
            sv.grades.forEach(x => {total += x.grade;})
    })
        //sv.average = sv.grades.length > 0 ? total / sv.grades.length : 0;
        sv.average = sv.grades.length ? total / sv.grades.length : 0;
};
controller.normalize = (sinhviens)=>{
    sinhviens.forEach(sv => {
        sv.grades.forEach(x => {
            x.grade = parseFloat(x.grade.toFixed(2))
        })
        sv.average = parseFloat(sv.average.toFixed(2))
    })
};

module.exports = controller;