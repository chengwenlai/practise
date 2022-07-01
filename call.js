const call = function (context = window) {
    if (typeof this !== 'function') {
        throw new TypeError('Not a Function')
    }

    context.fn = this

    let args = Array.from(arguments).slice(1) // 伪数组转数组

    let result = context.fn(...args)

    delete context.fn

    return result

}