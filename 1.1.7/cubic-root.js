function absolute(x) {
    return x > 0 ? x : -(x)
}

function square(x) {
    return x * x
}

function cube(x) {
    return x * x * x
}

function isGoodEnough(approximation, cubeRootOf) {
    return absolute(cube(approximation) - cubeRootOf) < 0.00001
}

function improve(approximation, cubeRootOf) {
    return (cubeRootOf / square(approximation) + (2 * approximation)) / 3
}

function getCubicRoot(approximation, cubeRootOf) {
    return isGoodEnough(approximation, cubeRootOf)
        ? approximation
        : getCubicRoot(improve(approximation, cubeRootOf), cubeRootOf)
}


function cubicRoot(num) {
    return getCubicRoot(1, num)
}

let num = 681472
console.log('cubic root of ' + num + ' is: ' + cubicRoot(num))