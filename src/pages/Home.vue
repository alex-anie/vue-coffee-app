<script setup lang="ts">
import Categories from '@/components/layouts/Categories.vue';
import CoffeeTypes from '@/components/layouts/CoffeeTypes.vue';
import Footer from '@/components/layouts/Footer.vue';
import Hero from '@/components/layouts/Hero.vue';
import Showcase from '@/components/layouts/Showcase.vue';
import Testimony from '@/components/layouts/Testimony.vue';
import HeroButton from '@/components/util/HeroButton.vue';
import HeroText from '@/components/util/HeroText.vue';
import HeroHeadingText from '@/components/util/HeroHeadingText.vue';


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
    <Categories />
    <Showcase>
        <HeroButton href="/sign-up-for-delivery" text="Sign up for Delivery"/>
    </Showcase>
    <Testimony />
    <Footer />

</template>
