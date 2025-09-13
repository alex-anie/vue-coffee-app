<script setup lang="ts">
import HeroHeadingText from '../util/HeroHeadingText.vue';

</script>

<template>
    <main class="flex justify-center items-center w-screen h-[15em] bg-[url('@/assets/img/showcase/man-hand-with-coffee-beans.png')] bg-no-repeat bg-cover bg-center">
        <section>
            <HeroHeadingText class="text-amber-500" text="Check out our best coffee Beans" />
            <div class="flex justify-center">
                <slot></slot>
            </div>
        </section>
    </main>
</template>