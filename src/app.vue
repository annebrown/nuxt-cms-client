<template><div>
    
<div class="max-w-fit min-w-96 h-fit mx-auto"><!-- center b4 abs -->
    <div class="relative"><!-- Rqd For <NaviNavigation /> Absolute -->
        <div id="main"><!-- main -->
            <NuxtRouteAnnouncer /> <!-- Assistive Technologies -->
            <ShipBow id="bow" />
            <div id="midships"> 
                <div id="hold">
                    <ContentDoc v-slot="{ doc }"> 
                        <h1>{{ doc.title }}</h1>
                        <p>{{ doc.description }}</p>
                    
                        <div class="">
                            <ContentRenderer :value="doc" />
                        </div>
                    <div class="page-sidebar"></div>
                    </ContentDoc>
                </div> 
            </div>
            <ShipTransom id="transom" />
        
        </div><!-- main -->
        <div id="navi"><!-- For absolute -->
            <NaviOne />
        </div> 
</div><!-- For <NaviNavigation /> Absolute -->
</div><!-- center b4 abs -->

</div></template>

<style>
body { @apply mx-auto p-1 sm:p-5 md:p-8; }
div#main { @apply max-w-fit min-w-96 h-fit mx-auto 
    m-1 sm:m-2 md:m-5 lg:m-8 pt-1
    border-2 rounded-lg; }
div#navi { @apply absolute -right-14 top-1 flex truncate
    min-w-[100px] max-w-fit h-fit p-1
    border-2 rounded-lg; }
#bow { @apply w-full h-[3rem] m-0 p-0; }
#hold { @apply m-0 mb-4 mr-4 ml-4; }
#midships { @apply w-full m-0 p-0; }
#transom { @apply mx-auto p-0 mt-2 px-4; }

#navi { @apply bg-[--body-light] dark:bg-[--body-dark]; }
</style>
