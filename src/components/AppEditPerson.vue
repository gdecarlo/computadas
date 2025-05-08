<template>
    <h2>Estoy en edit person {{ personId }}</h2>
    <samp>{{ person }}</samp>
</template>

<script setup>
import { onMounted,ref } from 'vue';
const personId = ref(null)
import { useRoute } from 'vue-router'
const route = useRoute()
const person = ref({})

onMounted(async ()=>{
    personId.value = route.params.id

    const respuesta = await fetch(`https://jsonplaceholder.typicode.com/users/${personId.value}`)
    const data = await respuesta.json()
    person.value = data
})

</script>