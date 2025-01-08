<script lang="ts" setup>
    definePageMeta({
        title: 'CMS Client',
        description: 'Nuxt CMS Client',
    })
</script>

<template>

<NuxtLayout name="splash">

    <template #title>
        <span class="text-3xl font-bold mt-4 mb-0 pb-0">DOCS</span>
        <span class="text-sm font-bold mb-0 pb-0 
            text-[--primary-light] !dark:text-[--primary-dark]">.annebrown.ca</span>
    </template>
    
    <NuxtImg src="logo.svg" width="100" height="100" alt="logo" class="mx-auto m-0 -mt-5 p-0 pb-2"/>
    <p class="text-center pb-8">CMS Client</p>
   


    
</NuxtLayout>
        
</template>
