const set = new Set([1])

set.forEach(() => {
    set.delete(1)
    set.add(1)
    console.log('死循环')
})
