function abs(x){
    return x > 0 ? x : -x
}

function square(x) {
    return x * x
}

function is_good_enough(guess, x) {
    return abs(square(guess) - x) < 0.000001
}

function get_average(x, y) {
    return (x + y) / 2
}

function get_quocient(guess, x) {
    return x / guess
}

function improve(guess, x) {
    return get_average(guess, get_quocient(guess, x))
}


function sqrt_iter(guess, x) {
    return is_good_enough(guess, x)
        ? guess
        : sqrt_iter(improve(guess, x), x);
}


let result = sqrt_iter(1, 0.0001);
console.log('result:', result)