<script setup>
    defineProps({
        items: {
            type: Array,
            required: true
        }
    });

</script>

<template>
    <main class="w-[90%] mx-auto mb-10">
        <section class="grid grid-cols-4 gap-5">
            <a class="relative h-[28em] group transition-all duration-500 ease-in hover:outline-2 hover:outline-amber-400 rounded-2xl" :href="item.href" v-for="(item, index) in items" :key="index">
                <div class="size-full">
                    <img class="size-full rounded-2xl object-cover bg-top-left" :src="item.image" :alt="item.alt">
                </div>
                <div class="w-[80%] mx-auto">
                    <div class="absolute bottom-5 bg-white/10 backdrop-blur-3xl group-hover:h-fit w-[80%] mx-auto rounded-2xl py-2 px-4 transition-[height] duration-500 ease-in-out">
                        <p class="font-bold text-xl">{{ item.name }}</p>
                        <p>${{item.price.toFixed(2) }}</p>
                        <p class="hidden group-hover:block">{{ item.description }}</p>
                    </div>
                </div>
            </a>
        </section>
    </main>
</template>