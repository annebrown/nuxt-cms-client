<script setup lang="ts">
const colorMode = useColorMode();
colorMode.preference = 'dark';
</script>

<template><div><!-- SPA -->

<NuxtRouteAnnouncer /><!-- Assistive Technologies --> 
<!-- Center Everything -->
<div class="relative min-w-96 max-w-2xl h-fit w-fit mx-auto pt-[1rem] pb-[2rem]">

    <div id="main" class="w-fit"><!-- main -->
        
        <ShipBow id="bow" class="up-and-down-svg w-fit h-[3rem] m-0 p-0;" />

        <!-- Midships -->
        <div id="midships" class="flex w-fit m-0 p-0">
            <div id="navi" class="w-fit h-fit mt-6 -ml-[50px]">
                <NaviNavigation class="mr-2" />
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
/* Up and Down Svg */
.up-and-down-svg svg {
  transition: all 0.5s ease;
}

.up-and-down-svg:hover {
  transform: scale(1.1);
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(10px); }
  100% { transform: translateY(0px); }
}

.up-and-down-svg {
  animation: float 36s ease-in-out infinite;
}
/*  Rotating */
@keyframes rotate {
  0% { transform: rotate(-15deg); }
  100% { transform: rotate(15deg); }
  
}
.rotating-svg {
  animation: rotate 22s linear infinite;
}

/* Optional: Add hover effect to pause rotation */
.rotating-svg:hover {
  animation-play-state: paused;
}

</style>
    