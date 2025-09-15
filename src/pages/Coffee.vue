<script setup>
    import Hero from '@/components/layouts/Hero.vue';
    import HeroText from '@/components/util/HeroText.vue';
    import HeroHeadingText from '@/components/util/HeroHeadingText.vue';
    import CoffeeTypes from '@/components/layouts/CoffeeTypes.vue';
    import HeroButton from '@/components/util/HeroButton.vue';
    import HeadingSecText from '@/components/layouts/HeadingSecText.vue';
    import CoffeeBeans from './services/CoffeeBeans.vue';
    import FlavouredDrinks from './services/FlavouredDrinks.vue';
    import PackageDelivery from './services/PackageDelivery.vue';

    import { ref } from 'vue';

    const tabs = ref([
        {label: 'Coffee Flavoured Drinks', component: FlavouredDrinks},
        {label: 'Coffee Package Delivery', component: PackageDelivery},
        {label: 'Buy Coffee Beans', component: CoffeeBeans}
        ]);
    
    const currentTabs = ref(tabs.value[0]);
</script>

<template>
    <Hero class="bg-[url(@/assets/img/lady-bartending.jpg)]">
        <HeroText text="Buy smooth coffee at our coffee cafe" />
        <HeroHeadingText class="w-[48%] text-white" text="Coffee cafe is great place to have a good feel of Coffee"/>
        <div>
            <HeroButton text="Buy" href="/order" />
        </div>
    </Hero>
    <CoffeeTypes />

    <main>
        <HeadingSecText text="We Offer variety of coffee flavours" heading="Coffee Flavours" />

        <section>
            <aside class="mb-10 bg-gray-200  w-fit mx-auto rounded-full py-2 px-5">
                <button 
                    :class="[currentTabs.label === tab.label ? 
                    ' text-black bg-white rounded-full': 
                    'text-gray-600', 
                    'font-bold cursor-pointer transition-colors duration-500 ease-in py-2 px-4']" 
                    @click="currentTabs=tab" v-for="tab in tabs" :key="tab.label">
                    {{ tab.label }}
                </button>
            </aside>

            <aside>
                <component :is="currentTabs.component"></component>
            </aside>
        </section>
    </main>
</template>