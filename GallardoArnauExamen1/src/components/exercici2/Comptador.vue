<script setup>
import Sumar from './Sumar.vue';
import Restar from './Restar.vue';
import { ref, provide } from 'vue';

const comptador = ref(0)

provide('comptador', comptador)
</script>

<template>
    <h1>Comptador</h1>

    <div>
        <Sumar />
        <Restar />
    </div>

    <p>El valor del comptador és: {{ comptador }}</p>
</template>