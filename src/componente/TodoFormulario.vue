<script setup>
    import { ref } from 'vue';
    import { reactive } from 'vue';
    const props = defineProps(['valores','funciones']); // estas propiedades pueden ser reactivas.
    import usersaxio from '../usersaxio.js';
    let listadoUsuarios=ref([]);
    usersaxio.listarAsync()
        .then((result)=>{listadoUsuarios.value=result.data})
        .catch((error)=>console.log(error));

</script>
<template>
    <form>
        userId:<select v-model="props.valores.userId">
            <option>--Seleccione un usuario--</option>
            <option v-for="usuario in listadoUsuarios" :value="usuario.id">{{ usuario.name }}</option>
        </select><br>
        title:<input type="text" v-model="props.valores.title" /><br>
        completed:<input type="checkbox" v-model="props.valores.completed" /><br>
        <button type="button" v-on:click="props.funciones.insertar">insertar</button> 
    </form>

</template>