<script setup>
import { inject } from 'vue';

const comptador = inject('comptador')

const restar = () => {
    comptador.value--
}
</script>

<template>
    <button @click="restar">-1</button>
</template>