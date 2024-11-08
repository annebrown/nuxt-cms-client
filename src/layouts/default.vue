<!-- @/layouts/default.vue -->
<script setup lang="ts">
    const { data } = 
        await useAsyncData('page-data', () => queryContent('').findOne())
    const { toc, prev, next } = useContent()
    
</script>


<template><div><!-- Layouts -> Single Root Element -->

    <div id="midships"><!-- Midships -->

        <!-- Title -->
        <ContentDoc v-slot="{ doc }">
            <h1 id="title" class="content-title">
                <slot name="title">{{ doc.title }}</slot>
            </h1> 
        </ContentDoc>

        <div id="ship-deck">

            <div id="ship-port-gunnel" class="content-port-gunnel">
                <ShipPortGunnel /> <!-- Content Navi -->  
            </div><!-- ShipPortGunnel-->
                    
            <div id="ship-hold">

                <ContentDoc v-slot="{ doc }">
                    
                    <!-- ShipCargo-->
                    <div class="content-cargo">
                        <h2>Description</h2>
                        <p>{{ doc.description }}</p>
                        
                        <div class="">
                            <ContentRenderer :value="doc" />
                        </div>
                    </div><!-- ShipCargo-->

                </ContentDoc>

            </div><!-- ShipHold -->

            <div id="ship-star-gunnel" class="content-star-gunnel">
                <ShipStarGunnel />
            </div><!-- ShipStarGunnel --> 

        </div><!-- ShipDeck -->

        <div id="ship-rudder">
            <!--
            <NuxtLink class="grow" v-if="prev.title" :to="prev._path">
                Previous: {{ prev.title }}
            </NuxtLink>
            <NuxtLink class="grow" v-if="next.title" :to="next._path">
                Next: {{ next.title }}
            </NuxtLink>
            -->
        </div><!-- Rudder -->

    </div><!-- Midships -->

</div></template><!-- Layouts -> Single Root Element -->

<style>
.content-port-gunnel, .content-star-gunnel {
    @apply bg-transparent dark:bg-transparent text-xs; }
.content-title { 
    @apply text-[--primary] dark:text-[--primary-dark] text-center m-0 p-0; }
.content-cargo { @apply m-2 sm:m-4 md:m-5 ml-8; }
</style>
