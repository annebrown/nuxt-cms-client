<script setup lang="ts">
definePageMeta({
    title: 'ABOUT',
    description: 'Nuxt CMS Client',
    order: 50,
})
</script>

<template><div>
<NuxtLayout name="splash">

      

    <!-- Title -->
    <template #title><span class="text-3xl !pt-8 font-bold">
        About
    </span></template>

    <!-- Sub-Title -->
    <p class="mb-2 mx-2 pb-0 text-sm">
        Nuxt CMS Client
    </p>

    <div class="relative">

        <hr class="mx-2">

        <!-- Logo -->
        <ImgLogo class="absolute -bottom-[1.5rem] right-[1.2rem] w-[4rem] h-auto pb-22 "/> 

    </div>
    <p class="mx-2 mb-4 p-2 pl-0 text-small">
        <NuxtLink href="https://annebrown.ca/devy/projects/dash">
            Other Sites
        </NuxtLink>
    </p>

</NuxtLayout>
</div></template>
 