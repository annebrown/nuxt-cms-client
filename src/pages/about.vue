<script setup lang="ts">
definePageMeta({
    title: 'ABOUT',
    description: 'Technology development and documentation site',
})
</script>

<template><div>
<NuxtLayout name="splash">

    <template #title>
        About
    </template>

    <p>Technology development and documentation site</p>

    <h2>Description</h2>

    <p>
        Demo - @<NuxtLink href="https://nuxt.com/">Nuxt</NuxtLink> Template - Access External, Headless CMS
    </p>

    <h2>Other Sites</h2>

    <NuxtLink href="https://annebrown.ca/devy/dash">annebrown.ca</NuxtLink>

</NuxtLayout>
</div></template>
 