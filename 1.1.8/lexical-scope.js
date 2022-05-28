function abs(x) {
    return x > 0 ? x : -x
}

function square(x) {
    return x * x
}

function get_average(x, y) {
    return (x + y) / 2
}

function get_quocient(x, y) {
    return y / x
}

function sqrt(x) {
    function improve(guess) {
        return get_average(guess, get_quocient(guess, x))
    }
    function is_good_enough(guess) {
        return abs(square(guess) - x) < 0.000001
    }
    function sqrt_iter(guess) {
        return is_good_enough(guess, x)
            ? guess
            : sqrt_iter(improve(guess, x), x);
    }
    return sqrt_iter(1, x)
}

let num = 121
console.log(`the root of ${num} is ${sqrt(num)}`)


