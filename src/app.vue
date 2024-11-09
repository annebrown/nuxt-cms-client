<script setup lang="ts">
const colorMode = useColorMode();
colorMode.preference = 'dark';
</script>

<template><div><!-- SPA -->

<NuxtRouteAnnouncer /><!-- Assistive Technologies --> 
<!-- Center Everything -->
<div class="relative min-w-96 max-w-2xl h-fit w-fit mx-auto pt-[1rem] pb-[2rem]">

    <div id="main" class="w-fit"><!-- main -->
        
        <ShipBow id="bow" class="w-fit h-[3rem] m-0 p-0;" />

        <!-- Midships -->
        <div id="midships" class="flex w-fit m-0 p-0">
            <div id="navi" class="w-fit h-fit mt-6 -ml-[50px]">
                <NaviNavigation class="mr-2 text-xs" />
            </div>
            <ShipHold id="hold" class="min-w-96  float-left w-fit p-5" />
            
        </div><!-- Midships -->
        <ShipTransom id="transom" class="mx-auto  p-2 m-0 -mb-[1rem]" />
    </div><!-- main -->
   
</div><!-- Center Everything -->  
</div></template>
    
<style>
body { @apply mx-auto p-1 sm:p-5 md:p-8; }
#navi, #sidebar { @apply p-1; }

@keyframes shake {
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
}

.shake-animation {
  animation: shake 0.5s ease-in-out;
}

</style>
    