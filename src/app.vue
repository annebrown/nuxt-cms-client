<!----------------------------------@/app.vue---------------------------------->
<template><div>
    
<NuxtRouteAnnouncer /><!-- Assistive Technologies --> 

<!-- Center Everything -->
<div class="relative min-w-96 max-w-fit h-fit mx-auto pb-[2rem] pl-[3rem] pr-4">

     <!-- Ship -->
    <div id="main" class="w-fit">
    
        <!-- Bow -->
        <ShipBow id="bow" class="w-full h-[3rem] m-0 p-0;" />

        <!-- Midships -->
        <div id="midships" class="flex m-0 p-0">

            <!-- Cargo -->
            <div id="cargo" class="min-w-96 p-2 max-w-[60%]">
                <NuxtPage />
            </div>

            </div><!-- Midships -->
        
        <!-- Transom -->
        <ShipTransom id="transom" class="mx-auto  p-2 m-0 -mb-[1rem]" />
    
    </div><!-- Ship -->
   
</div><!-- Center Everything -->

</div></template>
<!----------------------------------@/app.vue---------------------------------->