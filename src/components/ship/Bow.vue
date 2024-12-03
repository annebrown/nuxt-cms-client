<script setup lang="ts">

import { useMouse } from '@vueuse/core'
import { ref, watch } from 'vue'

const { x, y } = useMouse()
const isShaking = ref(false)

watch([x, y], () => {
  isShaking.value = true
  setTimeout(() => {
    isShaking.value = false
  }, 500) // shake duration
})
</script>

<template><div>
    
<!-- Logo, Search (todo) & Menu -->
<div class="relative container flex w-full">

    <!-- Logo and Web Name -->
    <div class="mt-[1rem]">
        
        <!-- Logo -->
        <ImgLogo class="
            circle-icon inline-block h-10 w-10 p-1" 
            :class="{ 'shake': isShaking }"
        />      
        <!-- Logo Text -->  
         <div class='inline-block align-bottom mr-2 ml-0 p-1 px-2 bg-[--body-light] dark:bg-[--body-dark] text-[--title-light] dark:text-[--title-dark]  rounded-lg '>
            <NuxtLink href='/'>
                <span class="text-sky-500 text-xs">misscommunication.ca</span>
            </NuxtLink>
        </div>
    </div><!-- Logo and Web Name -->

    <div class="grow">&nbsp;</div>

    <div class="absolute top-0 right-0">
        <ShipMenu id="main-menu" class="mt-5 mr-1 p-1 px-2" />
    </div>


</div><!-- Logo, Search & Menu -->

</div></template>

<style>
.circle-icon {
  display: inline-block;
}

@keyframes shake {
  0% { transform: translateX(0); }
  25% { transform: translateX(-2px); }
  50% { transform: translateX(2px); }
  75% { transform: translateX(-2px); }
  100% { transform: translateX(0); }
}

.shake {
  animation: shake 0.25s ease-in-out;
}
</style>