<script setup lang="ts">
import ProductList from '@/components/layouts/ProductList.vue';
import { flavouredDrinksData } from '../../../data/flavouredDrinks';
import { ref } from 'vue';
import Footer from '@/components/layouts/Footer.vue';

const flavouredDrinks = ref(flavouredDrinksData)


</script>

<template>
    <ProductList :items="flavouredDrinks" />
    <Footer />
</template>