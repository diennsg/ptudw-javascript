let controller = {};

// Sort
controller.sortNumber = (a, b, c)=>{
    arr.sort(function(a,b) {return a-b});
    return arr[0];
}

// Fibonacci
// F(n) = F(n-1) + F(n-2)
// F(0) = F(1) = 1
// Fn = Fn-1 + Fn-2 with seed values F0 = 0 and F1 = 1
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 55, 89, 144 
controller.fibonacci = (num)=>{
    if(num == 1)
        return 0;
    if(num == 2)
        return 1;
    var num1 = 0;
    var num2 = 1;
    var sum;
    var i = 2;
    while (i < num)  
    {
        sum = num1 + num2;
        num1= num2;
        num2= sum;
        i += 1;
    }
    return num2;
}

// Average
controller.average = (a) => {
    let sum = 0;
    for(let i = 0; i < a.length; ++i){
        sum += a[i];
    }
    return a.length ? sum / a.length : 0;
}

// Sort: Array of the objects
controller.sortSinhvien = (sinhviens)=>{
    for(let i = 0; i < sinhviens.length; i++) {
       for(let j = i; j < sinhviens.length; j++){
            sinhviens.sort(()=>{return sinhviens[i].age - sinhviens[j].age})
        }
    }
}

module.exports = controller;