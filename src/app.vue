<script setup lang='ts'>
useHead({

    title: 'Docs',
    link: [ 
        { 
            rel: 'icon', 
            type: 'image/x-icon', 
            href: 'favicon.ico' 
        }, 
        { 
            href: 'https://fonts.googleapis.com/css?family=Roboto', 
            rel: 'stylesheet' 
        }, 
    ],
})
</script>

<template><div>

<div id='main'><!-- main -->
    
    <ShipBow />

    <ContentDoc v-slot='{ doc }'>
        <h1 id='title' class='title pb-3'>
            <slot name='title'>
                {{ doc.title }}
            </slot>
        </h1>
        <p class="text-center pb-5">
            <slot name='title'>
                {{ doc.description }}
            </slot>
        </p>
        <slot></slot>
    </ContentDoc>


    <div v-if="true"><!-- Test/Debug/Proto Area -->
        <DevyDash />
    </div>
    <div v-if="true"><!-- Toolbox -->
        <DevyToolboxDash />
    </div>

</div><!-- main -->

</div></template>

<style>
body { @apply bg-gray-950 text-gray-200 
    text-xs 
    mx-auto p-8;
}
.home-link { @apply text-3xl text-purple-500;}
.child-link { @apply text-3xl text-green-500;}
div#main { @apply 
    max-w-fit min-w-96 mx-auto pt-5 pr-8 pl-8 pb-8
    border-2 border-lime-300 rounded-lg;
}
#bow { @apply -mt-2; width: 100%;}
a { @apply text-lime-200; }
.title { @apply -mt-5 text-center text-2xl text-orange-200; }
h2, h3, h4 { @apply text-red-300 text-base mb-2 pt-1 text-center; }
.parent-node { @apply font-bold; }
.debug-area { @apply max-w-fit mx-auto p-2 py-0 pb-0 mt-4 mb-0 
    border-2 border-teal-400 rounded-lg; }
.debug-h3 { @apply text-center; }
.debug-h4 { @apply text-left text-teal-300 text-xs; }
.debug-p { @apply text-left text-white text-xs pb-1 max-w-60; }
.debug-accent { @apply text-teal-300;} 
.debug-area hr { @apply border-teal-300 h-2 w-full;}
</style>
