const deepCopy = function(params) {
    let obj
    if (params instanceof Array) {
        obj = []
        for (let i = 0; i < params.length; i++) {
            obj.push(deepCopy(params[i]))
        }
    } else if (params instanceof Object) {
        obj = {}
        for (let i in params) {
            obj[i] = deepCopy(params[i])
        }
    } else {
        return params
    }
    return obj
}