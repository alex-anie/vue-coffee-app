<script setup>
    defineProps({
        href: {
            type: String,
            required: true,
            default: '/'
        },

        text: {
            type: String,
            required: true
        }
    })
</script>

<template>
    <a :href class="bg-white px-4 py-2 rounded-full hover:bg-black transition-colors duration-300 ease-in group">
        <span class=" text-black group-hover:text-white uppercase">{{ text }}</span>
        <svg xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
        class="inline-block ml-3 group-hover:text-white">
        <path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg>
    </a>
</template>