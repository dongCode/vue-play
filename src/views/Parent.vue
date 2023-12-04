<script setup>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount } from 'vue'
import Child from './Child.vue'

const message = ref('')

onBeforeMount(() => {
  console.log('父组件beforeMount')
})

onMounted(() => {
  console.log('父组件mounted')
})

onBeforeUpdate(() => {
  console.log('父组件beforeUpdate')
})

onUpdated(() => {
  console.log('父组件updated')
})

onBeforeUnmount(() => {
  console.log('父组件beforeUnmount')
})
</script>

<template>
  <div class="app">
    <h3>父组件</h3>
    <input type="text" v-model="message" />
    <div>
        {{ message }}
    </div>
    <Child />
  </div>
</template>
