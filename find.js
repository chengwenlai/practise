const myFind = function(fn) {
    const arr = Array.prototype.slice.call(this)
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i])) {
            return arr[i]
        }
    }
    return undefined
}