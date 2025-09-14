<script setup>
    import { ref } from 'vue';
    import { testimonialsData } from '../../../data/testimonials';
    import { ChevronRight, ChevronLeft } from 'lucide-vue-next';
    import 'vue3-carousel/carousel.css';
    import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

    const testimonials = ref(testimonialsData);

    const carouselConfig = {
        height: 300,
        itemsToShow: 1,
        gap: 2,
        snapAlign: 'center',
        breakpointMode: 'carousel',
        breakpoints: {
            // 300px and up
            500: {
            itemsToShow: 1,
            snapAlign: 'center',
            },
            // 400px and up
            1120: {
            itemsToShow: 2,
            snapAlign: 'start',
            },
            // 500px and up
            1300: {
            itemsToShow: 3,
            snapAlign: 'start',
            },
        },
    }

</script>

<template>
    <main class="w-screen py-8 md:-[25em]">

        <!-- Heading text -->
        <div class="flex flex-col items-center my-5">
            <h1 class="font-bold text-4xl">Testimony</h1>
            <p class="flex justify-center mt-2 text-2xl">See what our customers are saying</p>
        </div>

        <section class="w-[90%] mx-auto">
        
        <!-- Testimonial Card -->
        <Carousel v-bind="carouselConfig">
            <Slide v-for="(testimonial, index) in testimonials" :key="index">
                <aside class="bg-white w-[20em] rounded-md p-4 shadow-2xl">
                    <div class="flex justify-between items-center">
                        <div class="flex items-center">
                            <div class="size-[3em]">
                                <img :src="testimonial.image" :alt="testimonial.name" class="size-full rounded-full">
                            </div>
                            
                            <div class="ml-4">
                                <h3 class="font-bold text-amber-950">{{ testimonial.name }}</h3>
                                <p>{{ testimonial.occupation }}</p>
                            </div>
                        </div>

                        <div class="flex gap-2">
                            <svg  v-for="(_, index) in 3" :key="index" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="fill-amber-500 stroke-amber-700"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
                        </div>
                    </div>
                <div class="mt-8">
                    <p class="italic">{{ testimonial.text }}</p>
                </div>
            </aside>
            </Slide>

            <template #addons>
                <Navigation />
                <Pagination />
            </template>
        </Carousel>

        </section>
    </main>
</template>