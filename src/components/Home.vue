<script setup>
import { ref, computed, onUpdated } from 'vue';

const count = ref(0);
const inputText = ref('');

const doubleCount = computed(() => {
  console.log('doubleCount computed');
  return count.value * 2;
});

const calculateDouble = () => {
  console.log('calculateDouble method');
  return count.value * 2;
};

const incrementCount = () => {
  count.value += 1;
  console.log('incrementCount method');
};

onUpdated(() => {
  console.log(
    '%cComponent updated (re-render complete)!',
    'color: orange; font-style: italic;',
  );
});
</script>

<template>
  <div class="container">
    <input
      v-model="inputText"
      type="text"
      placeholder="Escribe algo para ver el renderizado"
      class="input"
    />

    <h2 :class="{ 'highlight': count > 3 }">Contador básico</h2>
    <p>Cuenta actual: {{ count }}</p>
    <button @click="incrementCount" class="button">Incrementar</button>

    <hr />

    <h2>Valor duplicado</h2>
    <p>Computado: {{ doubleCount }}</p>
    <p>Método: {{ calculateDouble() }}</p>
  </div>
</template>

<style scoped>
.container {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  max-width: 600px;
  margin: 2rem auto;
  padding: 1rem;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.input {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.button {
  padding: 0.5rem 1rem;
  background-color: #ff5a5f;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.button:hover {
  background-color: #e04848;
}

.highlight {
  color: #ff5a5f;
}
</style>
