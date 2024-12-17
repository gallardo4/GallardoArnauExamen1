<script setup>
import { ref } from 'vue';
import SearchUser from './SearchUser.vue';

const userList = ref([
    { id: 1, name: 'Francesc' },
    { id: 2, name: 'Marta' },
    { id: 3, name: 'Pere' }
]);
</script>

<template>
  <main>
    <h1>Llistat d'Usuaris</h1>
    <SearchUser :userList="userList" />
  </main>
</template>