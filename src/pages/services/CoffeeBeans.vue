<script setup lang="ts">
import ProductList from '@/components/layouts/ProductList.vue';
import { coffeeBeansData } from '../../../data/coffeeBeans';
import { ref } from 'vue';

const coffeeBeans = ref(coffeeBeansData);

</script>

<template>
    <ProductList :items="coffeeBeans" />
</template>