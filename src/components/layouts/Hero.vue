<script setup>
    import HeroButton from '../util/HeroButton.vue';
    import HeroHeadingText from '../util/HeroHeadingText.vue';
    import HeroText from '../util/HeroText.vue';
</script>

<template>
    <main class="w-full h-screen bg-top bg-no-repeat bg-cover">
        <section class="w-[90%] h-full mx-auto flex flex-col justify-center">
            <HeroText text="coffee at your service" />
            <HeroHeadingText class="w-[48%] text-white" text="We Offer the richest coffee in the city!"/>
            <div>
                <HeroButton href="/order" text="Order" />
            </div>
        </section>
    </main>
</template>