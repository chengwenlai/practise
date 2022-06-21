Array.prototype.myMap = function(fn) {
    let arr = Array.prototype.slice.call(this)
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(fn.call(arr[i], i, this))
    }
    return newArr
}