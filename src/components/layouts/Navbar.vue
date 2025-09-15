<script setup>
    import { RouterLink } from 'vue-router';
</script>

<template>
    <nav class="absolute left-[4em] z-10 flex justify-between w-[90%] mx-auto mt-4">
        <div>
            <RouterLink to="/" class="uppercase select-none text-white">coffee</RouterLink>
        </div>

        <div>
            <ul class="hidden md:flex gap-x-12">
                <li>
                    <RouterLink to="/" class="uppercase text-white hover:underline hover:text-white/60">Home</RouterLink>
                </li>
                <li>
                    <RouterLink to="/coffee" class="uppercase text-white hover:underline hover:text-white/60">Coffee</RouterLink>
                </li>
                <li>
                    <RouterLink to="/about" class="uppercase text-white hover:underline hover:text-white/60">About</RouterLink>
                </li>
            </ul>
        </div>

        <div class="">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="hidden md:block text-white"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>

            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="md:hidden text-white"><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></svg>
        </div>
    </nav>

</template>