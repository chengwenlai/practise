class MyPromise {
    constructor(executor) {
        this.state = 'pending' // 初始化状态

        this.value = null // 初始化fulfilled返回值

        this.reason = null // 初始化rejected返回值
        
        this.successCB = []

        this.failCB = []

        resolve = value => {
            if (this.state === 'pending') {
                this.state = 'fulfilled'
                this.value = value
                this.successCB.forEach(f => f())
            }
        }

        reject = reason => {
            if (this.state === 'pending') {
                this.state = 'rejected'
                this.reason = reason
                this.failCB.forEach(f => f())
            }
        }

        try{
            executor(resolve, reject)
        } catch(error) {
            reject(error)
        }
    }

    then(Fulfilled, Rjected) {
        if (this.state === 'fulfilled') {
            Fulfilled(this.value)
        }
        if (this.state === 'rejected') {
            Rejecte(this.reason)
        }
        if (this.state === 'pending') {
            this.successCB.push(() => { Fulfilled(this.value) })
            this.failCB.push(() => { Rjected(this.reason) })
        }
    }
}

MyPromise.all = function(promises) {
    const list = []
    let count = 0
    function handle(i, data) {
        list[i] = data
        count++
        if (count === promises.length) {
            resolve(list)
        }
    }

    new MyPromise = (resolve, reject) => {
        for (let i = 0; i < promises.length; i++) {
            promises[i].then(res => {
                handle(i, res)
            }, err => reject(err))
        }
    } 
}