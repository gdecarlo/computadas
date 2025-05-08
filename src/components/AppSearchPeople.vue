<template>
    <div class="user-list">
      <input 
        type="text" 
        v-model="searchQuery" 
        placeholder="Buscar por nombre..."
      />
  
      <div v-if="loading">Cargando usuarios...</div>
      
      <div v-else>
        <p class="counter">{{ counterMessage }}</p>
        
        <ul v-if="filteredUsers.length">
          <li v-for="user in filteredUsers" :key="user.id">
            {{ user.name }} ({{ user.email }})
            <RouterLink :to="`/edit-person/${user.id}`">Editar persona</RouterLink>
          </li>
          
        </ul>
        
        <p v-else class="no-results">No se encontraron resultados.</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue';
  
  const users = ref([]);
  const searchQuery = ref('');
  const loading = ref(true);
  
  // Obtener datos de la API
  onMounted(async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      users.value = await response.json();
    } catch (error) {
      console.error('Error al cargar usuarios:', error);
    } finally {
      loading.value = false;
    }
  });
  
  // Computed: Filtra usuarios por nombre
  const filteredUsers = computed(() => {
    const query = searchQuery.value.toLowerCase();
    return users.value.filter(user => 
      user.name.toLowerCase().includes(query)
    );
  });
  
  // Computed: Mensaje con el total de resultados
  const counterMessage = computed(() => {
    return `Mostrando ${filteredUsers.value.length} de ${users.value.length} usuarios`;
  });
  </script>
  
  <style scoped>
  .user-list {
    max-width: 600px;
    margin: 20px;
  }
  
  input {
    width: 100%;
    padding: 8px;
    margin-bottom: 15px;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    padding: 10px;
    border-bottom: 1px solid #eee;
  }
  
  .counter {
    color: #666;
    font-size: 0.9em;
  }
  
  .no-results {
    color: #ff4444;
  }
  </style>