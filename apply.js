const apply = function (context = window) {
    if (typeof this !== 'function') {
        throw new TypeError('Not a Function')
    }

    context.fn = this

    let result

    if (arguments[1]) {
        result = context.fn(...arguments[1])    
    } else {
        result = context.fn()
    }

    delete context.fn

    return result
}