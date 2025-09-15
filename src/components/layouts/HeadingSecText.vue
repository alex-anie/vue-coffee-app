<script setup>
    defineProps({
        heading: {
            type: String,
            required: true
        },

        text: {
            type: String,
            required: true
        }
    })
</script>

<template>
    <!-- Heading Section Text -->
        <div class="flex flex-col items-center my-5">
            <h1 class="font-bold text-4xl">{{ heading }}</h1>
            <p class="flex justify-center mt-2 text-2xl">{{ text }}</p>
        </div>
</template>