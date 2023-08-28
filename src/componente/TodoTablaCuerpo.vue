<script setup>
const props = defineProps(['datos'])

</script>
<template>
    <tbody>
        <tr v-for="item in props.datos">
            <td>#{{ item.id }}</td>
            <td>{{ item.title }}</td>
        </tr>
    </tbody>
</template>