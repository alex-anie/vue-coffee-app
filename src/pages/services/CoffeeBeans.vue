<script setup>
    import ProductList from '@/components/layouts/ProductList.vue';
    import { coffeeBeansData } from '../../../data/coffeeBeans';
    import { ref } from 'vue';

    const coffeeBeans = ref(coffeeBeansData);
</script>

<template>
    <ProductList :items="coffeeBeans" category="coffee"/>
</template>