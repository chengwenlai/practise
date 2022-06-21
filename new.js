function myNew(fn, ...args) {
    let obj = Object.create(fn.prototype)
    let reslut = fn.apply(obj, args)
    return typeof reslut === 'object' ? reslut : obj
}