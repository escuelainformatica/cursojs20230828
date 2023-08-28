<script setup>
import { ref } from 'vue';
import { reactive } from 'vue';
// composicion
let hola = "hola";
let contador = ref(0);
let contenedor = reactive({
  contador: 0
});
function incrementa() {
  contador.value = contador.value + 1; // con ref, la variable tiene que asignarse valor o leerse el valor usando ".value"
  contenedor.contador = contenedor.contador + 1; // reactive no necesito usar ".value"
}
</script>
<template>
  <h1>{{ hola }}</h1>
  el contador es {{ contador }}<br>
  el contador reactivo es {{ contenedor.contador }}<br>
  <button type="button" v-on:click="incrementa">incrementa valor</button>
</template>

