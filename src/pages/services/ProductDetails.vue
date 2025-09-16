<script setup>
    import { useRoute } from 'vue-router';
    import { coffeeBeansData } from '../../../data/coffeeBeans';

    const route = useRoute();
    const productId = Number(route.params.id);
    const product = coffeeBeansData.find(item => item.id === productId)

</script>


<template>
    <main class="w-[90%] mx-auto py-10">
        <div v-if="product">
            <h1 class="text-3xl font-bold mb-4">{{ product.name }}</h1>
            <img :src="product.image" :alt="product.name" class="w-64 rounded-lg mb-6">
            <p class="text-xl mb-2">Price: ${{ product.price }}</p>
            <p class="text-gray-600">{{ product.description }}</p>
        </div>
        <div v-else>
            <p>Product not found.</p>
        </div>
    </main>
</template>