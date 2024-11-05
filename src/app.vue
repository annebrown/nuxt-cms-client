<script setup>
const colorMode = useColorMode();
colorMode.preference = 'dark';
</script>

<template><div>
    
<div class="max-w-fit min-w-96 h-fit mx-auto"><!-- Center -->
    <div class="grid grid-flow-col grid-col-3 gap-0">
        <div id="main"><!-- main -->
            <NuxtRouteAnnouncer /> <!-- Assistive Technologies -->
            <ShipBow id="bow" />
            <div id="midships"> 
                <div id="hold">
                    <!-- Title -->
                    <ContentDoc v-slot="{ doc }">
                        <h1 id="title" class="content-title">
                            <slot name="title">
                                {{ doc.title }}
                            </slot>
                        </h1> 
                    </ContentDoc>

                    <ContentDoc v-slot="{ doc }">
                        <div class="content-cargo">
                            <h2>Description</h2>
                            <p>
                                <slot name="title">
                                    {{ doc.description }}
                                </slot>
                            </p>
                        
                            <div class="">
                                <ContentRenderer :value="doc" />
                            </div>
                        </div><!-- ShipCargo-->

                    </ContentDoc>
                   
                </div> 
            </div>
            <ShipTransom id="transom" />
        </div><!-- Main -->

      <!--   <div id="sidebar"> -->
      <!--       <Sidebar /> -->
      <!--   </div>  -->
         
        <div id="navi">
            <NaviOne />
        </div> 
    </div><!-- Grid -->
</div>

</div></template>

<style>
body { @apply mx-auto p-1 sm:p-5 md:p-8; }
div#main { @apply 
    m-1 sm:m-2 md:m-5 lg:m-8 pt-1
    border-2 rounded-lg; }
div#navi { @apply mt-5 -ml-5 p-1 
    border-2 rounded-lg drop-shadow-md; }
div#content-sidebar { @apply 
    border-2 rounded-lg drop-shadow-lg
    bg-[--body-light] dark:bg-[--body-dark]; }
#bow { @apply w-full h-[3rem] m-0 p-0; }
#hold { @apply m-0 mb-4 mr-4 ml-4; }
#midships { @apply w-full m-0 p-0; }
#transom { @apply mx-auto p-0 mt-2 px-4; }

#navi, #sidebar { @apply bg-[--body-light] dark:bg-[--body-dark]; }
</style>
