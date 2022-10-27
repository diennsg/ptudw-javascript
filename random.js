function Random(min, max) {
    return Math.random() * (max - min) + min;
}

module.exports = Random;