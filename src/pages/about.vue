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
        w-[5rem] h-auto top-[2.75rem] right-[1rem]" 
        :class="{ 'shake': isShaking }"/>      

    <!-- Title -->
    <template #title><span class="text-3xl !pt-8 font-bold">
        About
    </span></template>

    <!-- Sub-Title -->
    <p class="mb-2 pb-0">
        Technology Development Platform
    </p>

    <hr />

<p class="mb-2 p-2 pl-0 font-normal text-xs">
    <NuxtLink href="https://annebrown.ca/devy/dash">
        Other Sites
    </NuxtLink>
</p>

</NuxtLayout>
</div></template>
 