<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const props = defineProps({
    productes: {
        type: Array,
        required: true
    }
});

const route = useRoute()

const producte = props.productes.find(
    (prod) => prod.productId === route.params.productId
)

const producteCorresponent = computed(() => {
    return producte.find((prod) => prod.productId === route.params.productId)
});
</script>

<template>
    <h2>Detall del Producte</h2>

    <div>
        <p>ID: {{ producteCorresponent.id }}</p>
        <p>Nom del producte: {{ producteCorresponent.name }}</p>
        <p>Descripció: {{ producteCorresponent.description }}</p>
    </div>
</template>