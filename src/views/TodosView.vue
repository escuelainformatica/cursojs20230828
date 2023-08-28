<script setup>
import { ref } from 'vue';
import { reactive } from 'vue';
import todosaxios from '../todosaxios.js';
import TodoTabla from '../componente/TodoTabla.vue';



let todos_ref = ref([]);
let contenedor = reactive({
    todos_reactivo: []
})


todosaxios.listarAsync()
    .then((response) => {
        todos_ref.value = response.data;
        contenedor.todos_reactivo = response.data;
    })
    .catch((error) => {
        console.log(error);
    });


</script>
<template>
    <h1>referencial:</h1>
    <TodoTabla :datos="todos_ref"/>
    <h1>reactivo:</h1>
    <TodoTabla :datos="contenedor.todos_reactivo"/>
</template>