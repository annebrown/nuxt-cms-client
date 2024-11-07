<script setup>
const colorMode = useColorMode();
colorMode.preference = 'dark';
</script>

<template><div><!-- SPA -->

 <NuxtRouteAnnouncer /><!-- Assistive Technologies -->   

<!-- Center Everything -->
<div class="relative min-w-96 h-fit w-fit mx-auto pt-[1rem] pb-[2rem]">
    <div class=" mx-auto">
        <div class=" h-fit mx-auto">
            
        
            
            <!-- Grid -->
            <div class="grid grid-col-3 grid-flow-col m-0 p-0">
                <div id="sidebar" class="w-fit h-fit mt-[20px] -mr-[14px]">
                    <NaviNavigation class="w-fit pr-2" />
                </div>

                <div class="">
                    <ShipHold />
                </div>

                
            </div><!-- Grid -->
        </div>
    </div>
</div><!-- Center Everything -->

</div></template><!-- SPA -->

<style>
body { @apply mx-auto p-1 sm:p-5 md:p-8; }
/* div#main { @apply ; } */
/* div#navi { @apply ; } */
/* div#sidebar { @apply ; } */
/* #bow { @apply ; } */
/* #hold { @apply ; } */
/* #midships { @apply ; } */
/* #transom { @apply ; } */
#bow { @apply dark:bg-black rounded-lg ring-2 ring-lime-300; }
#navi, #sidebar { @apply p-1
    bg-[--body-light] dark:bg-[--body-dark]
    ring-2 ring-[--main-ring-light] dark:ring-[--main-ring-dark] rounded-lg; }
</style>