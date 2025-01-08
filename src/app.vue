<!----------------------------------@/app.vue---------------------------------->
<template><div>  
<NuxtRouteAnnouncer /><!-- Assistive Technologies --> 

<!-- Center Everything -->
<div class="relative min-w-96 max-w-fit h-fit mx-auto pt-0 pb-[2rem] pl-[3rem] pr-4">

     <!-- Ship -->
    <div id="main" class="w-fit pt-2">
    
        <!-- Bow -->
        <ShipBow id="bow" class="w-full h-[2.2rem] m-0 p-0;" />

        <!-- Midships -->
        <div id="midships" class="flex m-0 p-0 pt-[1rem] ">

            <!-- Cargo -->
            <div id="cargo" class="min-w-96 p-2">
                <NuxtPage />
            </div>

            </div><!-- Midships -->
        
        <!-- Transom -->
        <ShipTransom id="transom" class="mx-auto  p-1 px-3" />
    
    </div><!-- Ship -->
   
</div><!-- Center Everything -->

</div></template>
<!----------------------------------@/app.vue---------------------------------->