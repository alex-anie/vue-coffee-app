<script setup lang="ts">
    import CoffeeTypes from '@/components/layouts/CoffeeTypes.vue';
    import Footer from '@/components/layouts/Footer.vue';
    import Hero from '@/components/layouts/Hero.vue';
    import Showcase from '@/components/layouts/Showcase.vue';
    import Testimony from '@/components/layouts/Testimony.vue';
    import HeroButton from '@/components/util/HeroButton.vue';
    import HeroText from '@/components/util/HeroText.vue';
    import HeroHeadingText from '@/components/util/HeroHeadingText.vue';
    import ProductList from '@/components/layouts/ProductList.vue';
    import { flavouredDrinksData } from '../../data/flavouredDrinks';

    import { ref} from 'vue';

    const flavouredDrinks = ref(flavouredDrinksData)
</script>

<template>
    <Hero class="bg-[url(@/assets/img/man-pouring-coffee.png)]">
        <HeroText text="coffee at your service" />
        <HeroHeadingText class="w-[48%] text-white" text="We Offer the richest coffee in the city!"/>
        <div>
            <HeroButton href="/order" text="Order"/>
        </div>
    </Hero>
    <CoffeeTypes />
    
    <div class="flex flex-col justify-center items-center mb-5">
        <HeroHeadingText text="Flavoured Coffee Drinks" />
        <HeroText :style="{color:'black'}" text="Select from our delicious flavoured Coffee drinks" />
    </div>

    <ProductList :items="flavouredDrinks" />
    <Showcase>
        <HeroButton href="/sign-up-for-delivery" text="Sign up for Delivery"/>
    </Showcase>
    <Testimony />
    <Footer />
</template>
