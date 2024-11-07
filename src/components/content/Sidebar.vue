<script setup lang="ts">
    const { data } = 
        await useAsyncData('page-data', () => queryContent('').findOne())
    const { toc } = useContent()
</script>

<template>
    <ul v-if="toc && toc.links" class="text-xs p-1">
        <li v-if="toc.links.length !== 0"
            class="text-center text-[--title-light] dark:text-[--title-dark] font-bold">TOC</li>
        <li v-for="link in toc.links" :key="link.text">
            <NuxtLink :href="`#${link.id}`">
                {{ link.text }}
            </NuxtLink>
        </li>
    </ul> 
</template>