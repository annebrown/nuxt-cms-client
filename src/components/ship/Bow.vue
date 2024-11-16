<script setup lang="ts">

import { useMouse } from '@vueuse/core'



const onMouseMove = () => {
  console.log(`Mouse moved to: x: ${x.value}, y: ${y.value}`)
}

import { ref, watch } from 'vue'

const { x, y } = useMouse()
const isShaking = ref(false)

watch([x, y], () => {
  isShaking.value = true
  setTimeout(() => {
    isShaking.value = false
  }, 500) // Adjust this value to control how long the shake lasts
})
</script>

<template>
   
<div><!-- Logo and Logo Text -->

    <!-- Logo Img -->
    <ImgLogo class="inline-block h-10 w-10 p-1" />
            
    <!-- Logo Text -->  
        <div class='inline-block align-top mt-2 mr-2 ml-1'>
    <NuxtLink href='/'>
        <span class="text-sky-500">docs.annebrown.ca</span>
    </NuxtLink>
</div>
</div><!-- Logo -->

</template>

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