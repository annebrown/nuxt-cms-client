<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps({
  error: Object as () => NuxtError
})
</script>

<template><div>
 <NuxtRouteAnnouncer /> <!-- Assistive Technologies --> 

<!-- Center Everything -->
<div class="relative min-w-96 max-w-2xl h-fit my-2 mx-auto">

    <!-- Bow -->
    <ShipBow id="ship-bow" class="!text-xs" />

    <!-- Midships -->
    <div id="midships" class="m-0 p-0">

    <!-- Cargo -->
    <div id="cargo">
        <h1 class="splash-title"><!-- Title -->
            Sorry, boss
        </h1> 
    
        <p class="text-red-400 text-center text-xl">
            No Authz!
        </p>

        <!-- Error Code -->
        <!-- <p>Error: : {{ error.statusCode }}</p> -->

        <p class="text-center pt-2 pb-8">
            <a href="javascript:history.back()"
                class="goback">
                <Icon name="ph:arrow-left" class="h-4 w-4 align-middle" />
                Go Back
               
            </a>
        </p>

    </div><!-- Cargo -->

    </div><!-- Midships -->


<!-- Transom -->
<ShipTransom id="ship-transom" class="my-0 mt-1 py-0"/>

</div><!-- Center Everything -->

</div></template>

<style>
.goback {
    @apply w-fit h-auto mt-8 p-2
    cursor-pointer transition ease-in-out
    border border-gray-300 dark:border-gray-950 rounded-lg
    shadow-[5px_5px_0_0_#64748b] dark:shadow-[5px_5px_0_0_#0f172a]
    hover:shadow-[8px_8px_0_0_#475569] dark:hover:shadow-[8px_8px_0_0_black] 

    ;
}
.card-logo.svg {
    @apply w-auto h-[4rem];
}
.card-logo-sig {
    @apply w-10 h-10;
}
.card-deploy-type {
    @apply text-xs font-extrabold my-0 py-0;
}
.card-title {
    @apply text-xl font-extrabold my-0 py-0;
}
.card-descr {
    @apply text-current font-medium leading-[150%] my-0 py-0;
}
.card-sig {
    @apply  text-xs font-extrabold my-0 py-0;
}

</style>