<script setup lang="ts">
definePageMeta({
    title: 'ABOUT',
    description: 'Technology development and documentation site',
})

import { useMouse } from '@vueuse/core'
import { ref, watch } from 'vue'

const { x, y } = useMouse()
const isShaking = ref(false)

watch([x, y], () => {
  isShaking.value = true
  setTimeout(() => {
    isShaking.value = false
  }, 900) // shake duration
})

</script>

<template><div>
<NuxtLayout name="splash">

    <!-- Logo -->
    <ImgLogo class="absolute
        w-[4rem] h-auto top-[5.5rem] right-[1.2rem]" 
        :class="{ 'shake': isShaking }"/>      

    <!-- Title -->
    <template #title><span class="text-3xl !pt-8 font-bold">
        About
    </span></template>

    <!-- Sub-Title -->
    <p class="mb-2 mx-2 pb-0 text-sm">
        Technology Development Platform
    </p>

    <hr class="mx-2">

    <p class="mx-2 mb-4 p-2 pl-0 text-small">
        <NuxtLink href="https://annebrown.ca/devy/dash">
            Other Sites
        </NuxtLink>
    </p>

</NuxtLayout>
</div></template>
 