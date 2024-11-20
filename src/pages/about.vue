<script setup lang="ts">
definePageMeta({
    title: 'ABOUT',
    description: 'Technology development and documentation site',
})
</script>

<template><div>

<NuxtLayout name="splash">

    <template #title><span class="text-2xl">
        About
    </span></template>

    <p>Technology development and documentation site</p>

    <h2>Description</h2>

    <p>
        Demo - @<NuxtLink href="https://nuxt.com/">Nuxt</NuxtLink> Template - Access External, Headless CMS
    </p>

          
    <hr />

<p class="mb-4 font-normal text-xs">
    <NuxtLink href="https://annebrown.ca/devy/dash">
        Other Sites
    </NuxtLink>
    |
    <NuxtLink href="login">
        Login
    </NuxtLink>
</p>

</NuxtLayout>
</div></template>
 