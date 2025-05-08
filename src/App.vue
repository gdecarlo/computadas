<template>
    <h1>Estoy en App.vue</h1>
    <RouterLink to="/">Home</RouterLink>
    <a @click="goToValidPassword">Validar password</a>
    <RouterLink to="/search-people">Busqueda de personas</RouterLink>
    <RouterView></RouterView>
</template>

<script setup>

import { useRouter } from 'vue-router'
const router = useRouter()

function goToValidPassword() {
    console.log('Validar password')
    router.push('/valid-password')
}
</script>