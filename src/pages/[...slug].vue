<script lang="ts" setup>
const route = useRoute()

const { data: page } = await useAsyncData(route.path, () => queryContent(route.path).findOne())

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found', fatal: true })
}
</script>

<template><!-- No div - breaks route-->
    <NuxtLayout>
        <ContentRenderer :value="page" />
    </NuxtLayout>
</template>