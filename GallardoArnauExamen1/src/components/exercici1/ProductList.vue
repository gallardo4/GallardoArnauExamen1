<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const productes = ref([
    { id: 1, name: 'Producte 1', description: 'Descripció del producte 1.' },
    { id: 2, name: 'Producte 2', description: 'Descripció del producte 2.' },
    { id: 3, name: 'Producte 3', description: 'Descripció del producte 3.' }
])
</script>

<template>
    <h1>Llistat de Productes</h1>

    <ul>
        <li v-for="producte in productes" :key="producte.id">
            <RouterLink :to="`/exercici1/${producte.id}`">
                {{ producte.name }}
            </RouterLink>
        </li>
    </ul>

    <RouterView />
</template>