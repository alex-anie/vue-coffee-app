<script setup>
import { ref } from 'vue';
import { packageDeliveryData } from '../../../data/packageDelivery';
import Footer from '@/components/layouts/Footer.vue';
import ProductList from '@/components/layouts/ProductList.vue';

const packageDeliveries = ref(packageDeliveryData);

</script>

<template>
    <ProductList :items="packageDeliveries"/>
    <Footer />
</template>