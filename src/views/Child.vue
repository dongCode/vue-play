<script setup>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount } from 'vue'

const message = ref('')

onBeforeMount(() => {
  console.log('子组件beforeMount')
})

onMounted(() => {
  console.log('子组件mounted')
})

onBeforeUpdate(() => {
  console.log('子组件beforeUpdate')
})

onUpdated(() => {
  console.log('子组件updated')
})

onBeforeUnmount(() => {
  console.log('子组件beforeUnmount')
})
</script>

<template>
  <div class="app">
    <h3>子组件</h3>
    <input type="text" v-model="message" />
    <div>
      {{ message }}
    </div>
  </div>
</template>
