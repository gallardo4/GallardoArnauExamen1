<script setup>
import { RouterView } from 'vue-router'
import Nav from './components/Nav.vue';
</script>

<template>
  <header>
    <Nav />
  </header>

  <RouterView />
</template>