<script setup>
import { useHomeStore } from '../store/index'
import { storeToRefs } from 'pinia'

const homeStore = useHomeStore()
const { count } = storeToRefs(homeStore)
</script>

<template>
  <div>
    <h2>Home组件</h2>
    <span>count:{{ count }}</span>
  </div>
</template>

<style scoped lang="scss"></style>
