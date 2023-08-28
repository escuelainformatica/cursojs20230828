<script setup>
    import TodoTablaEncabezado from './TodoTablaEncabezado.vue';
    import TodoTablaCuerpo from './TodoTablaCuerpo.vue';
    const props = defineProps(['datos']);
</script>
<template>
    <table class="table table-striped">
        <TodoTablaEncabezado/>
        <TodoTablaCuerpo :datos="props.datos"/>
    </table>
</template>