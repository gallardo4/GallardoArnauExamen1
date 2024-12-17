<script setup>
import { inject } from 'vue';

const comptador = inject('comptador')

const sumar = () => {
    comptador.value++
}
</script>

<template>
    <button @click="sumar">+1</button>
</template>