class Person {
  constructor(name) {
    this.name = name
    this.queue = []
    setTimeout(() => {
      this.next()
    }, 0)
  }

  hi() {
    console.log('hi ' + this.name)
    return this
  }

  sleep(n) {
    this.queue.push(() => {
      setTimeout(() => {
        this.next()
      }, n)
    })
    return this
  }

  eat(food) {
    this.queue.push(() => {
      console.log('eat ' + food)
      this.next()
    })
    return this
  }

  next() {
    if (this.queue.length) {
      this.queue.shift()()
    }
  }
}

const p = new Person('jack')

p.hi().sleep(5000).eat('banana').sleep(10000).eat('hamburger')
