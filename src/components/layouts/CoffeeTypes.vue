<script setup>
    import coffeeBeansShake from "@/assets/img/coffee-types/coffee-beans-shake.png";
    import coffeeCanDrink from "@/assets/img/coffee-types/coffee-can-drink.png";
    import directFromMachine from "@/assets/img/coffee-types/direct-from-machine.png";

    import { ref } from "vue";

    const coffeeTypes = ref([
        {fileName: "Coffee Beans Shakes", filePath: coffeeBeansShake},
        {fileName: "Coffee Can Drink", filePath: coffeeCanDrink},
        {fileName: "Direct From Machine", filePath: directFromMachine},
        ]);
</script>

<template>
    <main>
        <article class="flex justify-around items-center h-56 bg-amber-100">
            <aside v-for="(type, index) in coffeeTypes" :key="index" class="flex flex-col items-center">
                <div class="w-30">
                    <img :src="type.filePath" :alt="type.fileName" class="w-full h-full">
                </div>
                <p class="mt-5 text-2xl">{{ type.fileName }}</p>
            </aside>
        </article>
    </main>
</template>