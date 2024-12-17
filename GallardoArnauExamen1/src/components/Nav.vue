<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const exercicis = ref([
    { id: 1, name: 'Exercici 1: Productes' },
    { id: 2, name: 'Exercici 2: Comptador' },
    { id: 3, name: 'Exercici 3: Usuaris' }
])
</script>

<template>
    <nav id="nav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink v-for="exercici in exercicis" :key="exercici.id" :to="`/exercici${exercici.id}`">{{ exercici.name }}</RouterLink>
    </nav>
</template>