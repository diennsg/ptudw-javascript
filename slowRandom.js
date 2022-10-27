function slowRandom(min, max) {
    return new Promise(resolve => setTimeout(function(){
        resolve(Math.random() * (max - min) + min)
    }, 1000))
}

module.exports = slowRandom;