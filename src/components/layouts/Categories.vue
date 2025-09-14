<script setup>
    import { categories } from '../../../data/categories';
    import { ref } from 'vue';

    const coffeeFlavours = ref(categories)

</script>

<template>
    <main class="w-[90%] mx-auto my-10">
        <article>
            <h2 class="text-center uppercase font-bold text-xl my-8">Choose from our Special Coffee categories</h2>
            <section class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-15 justify-between">
            <aside class="w-[20em]" v-for="(coffee, index) in coffeeFlavours" :key="index">
                <div class="w-full h-[30em] relative">
                    <img :src="coffee.path" :alt="coffee.description" class="h-full w-full bg-cover">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="absolute right-4 top-4 text-white"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/></svg>
                </div>
                <div>
                    <h3 class="text-2xl font-bold mt-2">{{ coffee.name }}</h3>
                    <p class="text-xl my-2">{{ coffee.description.slice(0, 30) }} ...</p>
                    <div class="flex justify-between">
                        <p class="text-neutral-700 text-xl">$ {{ coffee.price }}</p>
                        <a href="" class="bg-amber-950 text-white py-1 px-2 rounded-md hover:bg-amber-950/90">Buy Coffee - </a>
                    </div>
                </div>
            </aside>
            </section>
        </article>
    </main>
</template>