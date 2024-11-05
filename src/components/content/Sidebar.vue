<script setup lang="ts">
    const { data } = 
        await useAsyncData('page-data', () => queryContent('').findOne())
    const { toc } = useContent()
</script>

<template>


    <ul v-if="toc && toc.links" class="text-xs">
        <li v-if="toc.links.length !== 0"
            class="text-[--title-light] dark:text-[--title-dark]">ON THIS PAGE</li>
        <li v-for="link in toc.links" :key="link.text">
            <NuxtLink :href="`#${link.id}`">
                {{ link.text }}
            </NuxtLink>
        </li>
    </ul> 
</template>