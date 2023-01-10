<script setup>
import { useHomeStore } from './store/index'
import { storeToRefs } from 'pinia'

const homeStore = useHomeStore()
const { count } = storeToRefs(homeStore)

const addCount = () => {
  homeStore.increment()
}
const subCount = () => {
  homeStore.decrement()
}
</script>

<template>
  <div class="app">
    <div>
      <h2>Vue App</h2>
      <div>{{ count }}</div>
      <button @click="addCount">+1</button>
      <button @click="subCount">-1</button>
    </div>
    <div>
      <RouterLink to="/">home</RouterLink>
      <RouterLink to="/about">about</RouterLink>
      <router-view></router-view>
    </div>
  </div>
</template>
