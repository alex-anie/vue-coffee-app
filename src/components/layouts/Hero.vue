<template>
    <main class="w-full h-screen bg-[url(@/assets/img/man-pouring-coffee.png)] bg-top bg-no-repeat bg-cover">
        <section class="w-[90%] h-full mx-auto flex flex-col justify-center">
            <p class="uppercase text-white">coffee at your service</p>
            <h2 class="text-5xl mb-8 mt-4 font-bold text-white">We Offer the richest coffee <br /> in the city!</h2>
            <div>
                <a href="/" class="bg-white px-4 py-2 rounded-full hover:bg-black transition-colors duration-300 ease-in group">
                    <span class="uppercase group-hover:text-white">Order</span>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                    class="inline-block ml-3 group-hover:text-white">
                    <path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg>
                </a>
            </div>
        </section>
    </main>
</template>