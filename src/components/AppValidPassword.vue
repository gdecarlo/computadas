<template>
    <div class="password-validator">
      <h2>Validador de Contraseña</h2>

      <input
        type="password"
        id="password"
        v-model="password"
        placeholder="Ingresa tu contraseña"
      />
  
      <ul class="validation-rules">
        <li :class="{ valid: hasLowerAndUpperCase }">
          {{ hasLowerAndUpperCase ? '✅' : '❌' }} Contiene Mayúsculas y Minúsculas
        </li>
        <li :class="{ valid: hasNumber }">
          {{ hasNumber ? '✅' : '❌' }} Contiene Números (0-9)
        </li>
        <li :class="{ valid: hasSpecialChar }">
          {{ hasSpecialChar ? '✅' : '❌' }} Contiene Caracteres Especiales (!@#$%^)
        </li>
        <li :class="{ valid: hasMinLength }">
          {{ hasMinLength ? '✅' : '❌' }} Mínimo 8 Caracteres
        </li>
      </ul>
  
      <div v-if="password.length > 0" class="overall-status">
        <p v-if="isPasswordValid" class="valid-password">
          🎉 ¡Contraseña Válida!
        </p>
        <p v-else class="invalid-password">
          La contraseña aún no cumple todos los requisitos.
        </p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  // Variable reactiva para almacenar la contraseña
  const password = ref('');
  
  // --- Propiedades Computadas para Validación Individual ---
  
  // 1. Verifica mayúsculas y minúsculas
  const hasLowerAndUpperCase = computed(() => {
    return /[a-z]/.test(password.value) && /[A-Z]/.test(password.value);
  });
  
  // 2. Verifica números
  const hasNumber = computed(() => {
    return /[0-9]/.test(password.value);
  });
  
  // 3. Verifica caracteres especiales (!@#$%^)
  const hasSpecialChar = computed(() => {
    return /[!@#$%^]/.test(password.value);
  });
  
  // 4. Verifica longitud mínima
  const hasMinLength = computed(() => {
    return password.value.length >= 8;
  });
  
  // --- Propiedad Computada para Validación General ---
  
  // 5. Verifica si todas las reglas se cumplen
  const isPasswordValid = computed(() => {
    return (
      hasLowerAndUpperCase.value &&
      hasNumber.value &&
      hasSpecialChar.value &&
      hasMinLength.value
    );
  });
  </script>
  
  <style scoped>
  .password-validator {
    font-family: sans-serif;
    max-width: 400px;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
  }
  
  .password-validator h2{
    color: black;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  input[type="password"] {
    width: calc(100% - 22px); /* Ajustar padding */
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .validation-rules {
    list-style: none;
    padding: 0;
    margin: 0 0 15px 0;
  }
  
  .validation-rules li {
    margin-bottom: 8px;
    color: #a00; /* Rojo por defecto (inválido) */
    transition: color 0.3s ease;
  }
  
  .validation-rules li.valid {
    color: #080; /* Verde si es válido */
  }
  
  .overall-status {
    margin-top: 15px;
    padding: 10px;
    border-radius: 4px;
    text-align: center;
  }
  
  .valid-password {
    color: #080;
    font-weight: bold;
    background-color: #e0ffe0;
    border: 1px solid #080;
    padding: 10px;
    border-radius: 4px;
  }
  
  .invalid-password {
    color: #a00;
    font-weight: bold;
    background-color: #ffe0e0;
      border: 1px solid #a00;
    padding: 10px;
    border-radius: 4px;
  }
  </style>