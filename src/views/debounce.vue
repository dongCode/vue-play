<script setup lang="ts">

const debounce = (fn, delay = 1000) => {
  let timer = null
  return () => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn()
    }, delay)
  }
}
const throttle = (fn, delay = 1000) => {
  let timer = null
  return () => {
    if (!timer) {
      timer = setTimeout(() => {
        fn()
        timer = null
      }, delay)
    }
  }
}

const debounceFn = debounce(() => {
  console.log('debounce')
})

const throttleFn = throttle(() => {
  console.log('throttle')
})
</script>

<template>
  <header>
    <button @click="debounceFn">debounce</button>
    <button @click="throttleFn">throttle</button>
  </header>
</template>

<style scoped></style>
