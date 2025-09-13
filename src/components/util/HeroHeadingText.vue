<script setup>
    defineProps({
        text: {
            type: String,
            required: true
        },
    })
</script>


<template>
    <h2 class="text-5xl mb-8 mt-4 font-bold">{{ text }}</h2>
</template>