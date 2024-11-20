<!-- @/layouts/devy.vue -->
<script setup lang="ts">
    const appConfig = useAppConfig()
    const route = useRoute()
    const { data } = 
    await useAsyncData('page-data', () => queryContent('').findOne())
    const { toc } = useContent()
</script>

<template><div><!-- Layouts -> Single Root Element -->

    <!-- Midships -->
    <div id="midships" class="">

        <div id="ship-deck" class="flex w-full">

            <div id="ship-port-gunnel" class="w-fit flex-none m-0 p-0 devy-port-gunnel">  
                <DevyPortGunnel /> <!-- Devi Navi --> 
            </div><!-- ShipPortGunnel-->

            <div id="ship-hold" class="flex-1 w-full grow justify-left">
                   
                <h1 class="devy-title">
                    <slot name="title"></slot>
                </h1><!-- Title -->
                <div class="devy-cargo">
                    <slot><!-- Cargo --></slot>
                </div><!-- ShipCargo-->

            </div><!-- ShipHold -->
            
            <div id="ship-star-gunnel" class="devy-star-gunnel w-fit flex-none" >
                <DevyStarGunnel />
            </div><!-- ShipStarGunnel -->

        </div><!-- ShipDeck -->

        <div id="ship-rudder"> 
            <!-- Paging, Prev/Next, etc. -->
        </div><!-- Rudder -->

    </div><!-- Midships -->

</div></template><!-- Layouts -> Single Root Element -->

<style>
.devy-port-gunnel, .devy-star-gunnel {
    @apply bg-[--body-bg-color] dark:bg-[--body-bg-color] text-xs; }
.devy-title { 
    @apply text-[--primary] dark:text-[--primary-dark] text-center m-0 p-0; }
.devy-cargo { @apply m-2 sm:m-4 md:m-5 ml-8;}
</style>
