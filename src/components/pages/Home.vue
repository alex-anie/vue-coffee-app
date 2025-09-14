<script setup lang="ts">
import Categories from '../layouts/Categories.vue';
import CoffeeTypes from '../layouts/CoffeeTypes.vue';
import Footer from '../layouts/Footer.vue';
import Hero from '../layouts/Hero.vue';
import Navbar from '../layouts/Navbar.vue';
import Showcase from '../layouts/Showcase.vue';
import Testimony from '../layouts/Testimony.vue';
import TestimonyDemo from '../layouts/TestimonyDemo.vue';
import HeroButton from '../util/HeroButton.vue';

</script>

<template>
    <Navbar />
    <Hero />
    <CoffeeTypes />
    <Categories />
    <Showcase>
        <HeroButton href="/sign-up-for-delivery" text="Sign up for Delivery"/>
    </Showcase>
    <Testimony />
    <Footer />
</template>
