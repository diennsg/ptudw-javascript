let controller = {};


// toan tu cong
controller.add = (a,b)=>{
    return a+b;
};
// toan tu nhan
controller.multifly = (a,b)=>{
    return a*b;
};
// toan tu tru
controller.subtract = (a,b)=>{
    return a-b;
};
// toan tu chia
controller.divide = (a,b)=>{
    return b == 0 ? undefined : a / b ;
};

// Callback
controller.addCallback = (a, b, callback)=>{
    setTimeout(()=>{
        callback(x, y);
    },1000)
};
// Promise
controller.addPromise = (a, b)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            callback(x, y);
        },1000)
    })
};
// Async-await
async function asyncThing(value){
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(value), 1000)
    })
};
controller.addAsync = async (a, b) => {
    return await asyncThing(a + b);
}


module.exports = controller;