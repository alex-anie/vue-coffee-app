<script setup>
    import { coffeeBeansData } from '../../../data/coffeeBeans';
    import { flavouredDrinksData } from '../../../data/flavouredDrinks';
    import { packageDeliveryData } from '../../../data/packageDelivery';

    const props = defineProps({
        category: {
            type: String,
            required: true
        },
        id: {
            type: String,
            required: true
        }
    });

    const datasets = {
        coffee: coffeeBeansData,
        delivery: packageDeliveryData,
        flavoured: flavouredDrinksData
    }

    const productList = datasets[props.category] || [];
    const product = productList.find(item => item.id === Number(props.id));
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