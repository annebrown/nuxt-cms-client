<!----------------------------------@/app.vue---------------------------------->
<template><div>
    
<NuxtRouteAnnouncer /><!-- Assistive Technologies --> 

<!-- Center Everything -->
<div class="relative min-w-96 max-w-2xl md:max-w-fit h-fit mx-auto pb-[2rem] pl-[3rem]">

     <!-- Ship -->
    <div id="main" class="w-fit">
    
        <!-- Bow -->
        <ShipBow id="bow" class="w-full h-[3rem] m-0 p-0;" />

        <!-- Midships -->
        <div id="midships" class="flex m-0 p-0">

            <!-- Port Gunnel -->
            <div id="navi" class="w-fit h-fit mt-6 -ml-[50px]">
                <NaviNavigation class="mr-2 my-2 text-xs" />
            </div>

            <!-- Cargo -->
            <div id="cargo" class="min-w-96 p-2">
                <NuxtPage />
            </div>

            </div><!-- Midships -->
        
        <!-- Transom -->
        <ShipTransom id="transom" class="mx-auto  p-2 m-0 -mb-[1rem]" />
    
    </div><!-- Ship -->
   
</div><!-- Center Everything -->

</div></template>
<!----------------------------------@/app.vue---------------------------------->