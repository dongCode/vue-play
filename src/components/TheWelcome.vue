<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
</script>

<template>
  <WelcomeItem>
    <div>
      <div
        :style="{
          float: 'left',
          width: '100px',
          backgroundColor: 'lightgreen'
        }"
      >
        float left
      </div>
      <div
        :style="{
          backgroundColor: 'black'
        }"
      >
        right
      </div>
    </div>
  </WelcomeItem>

  <WelcomeItem>
    <div :style="{ position: 'relative' }">
      <div
        :style="{
          position: 'absolute',
          left: 0,
          width: '100px',
          backgroundColor: 'lightgreen'
        }"
      >
        position left
      </div>
      <div
        :style="{
          backgroundColor: 'black',
          marginLeft: '100px'
        }"
      >
        right
      </div>
    </div>
  </WelcomeItem>

  <WelcomeItem>
    <div
      :style="{
        display: 'flex'
      }"
    >
      <div
        :style="{
          width: '100px',
          backgroundColor: 'lightgreen'
        }"
      >
        flex left
      </div>
      <div
        :style="{
          flex: 1,
          backgroundColor: 'black'
        }"
      >
        right
      </div>
    </div>
  </WelcomeItem>

  <WelcomeItem>
    <div
      :style="{
        display: 'grid',
        gridTemplateColumns: '100px auto'
      }"
    >
      <div
        :style="{
          width: '100px',
          backgroundColor: 'lightgreen'
        }"
      >
        grid left
      </div>
      <div
        :style="{
          backgroundColor: 'black'
        }"
      >
        right
      </div>
    </div>
  </WelcomeItem>
   <WelcomeItem>
    <div
      :style="{
        display: 'flex',
      }"
    >
      <div
        :style="{
          flex: 1,
          backgroundColor: 'lightgreen'
        }"
      >
        grid left
      </div>
    </div>
  </WelcomeItem>
</template>
