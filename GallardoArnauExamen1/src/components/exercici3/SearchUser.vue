<script setup>
import { ref, computed, watch } from 'vue';

const props = defineProps({
    userList: {
        type: Array,
        required: true
    }
});

const searchName = ref('');

const filteredUsers = computed(() => {
    return props.userList.filter(user =>
        user.name.toLowerCase().includes(searchName.value.toLowerCase())
    );
});

watch(searchName, (newName) => {
    console.log(`Filtre canviat: ${newName}`)
})
</script>

<template>
    <input type="text" v-model="searchName" placeholder="Filtra usuaris" class="field" />
    <ul>
        <li v-for="user in filteredUsers" :key="user.id">
            <span class="user">{{ user.name }}</span>
        </li>
    </ul>
</template>