<script setup>
    import TodoFormulario from "../componente/TodoFormulario.vue";
    import todosaxios from '../todosaxios.js';
    import { useRouter, useRoute } from 'vue-router'
    import { ref } from 'vue';
    import { reactive } from 'vue';
    const router = useRouter()
    const route = useRoute()

    let contenedor=reactive({
        todo:{userId:0,title:'',completed:false}
    });
    let funciones={
        insertar:()=>{
            todosaxios.insertarAsync(contenedor.todo)
                .then((result)=>{router.push('/todos');})
                .catch((error)=>{console.log(error)});
        }
    }

</script>
<template>
    <TodoFormulario :valores="contenedor.todo" :funciones="funciones" />
    
</template>