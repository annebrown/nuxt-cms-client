<script setup lang="ts">
    const { data } = 
        await useAsyncData('page-data', () => queryContent('').findOne())
    const { toc, prev, next } = useContent()
</script>

<template><div><!-- Layouts -> Single Root Element -->

<!-- Grid - content & toc -->
<div class="grid grid-col-2 grid-flow-col w-fit  mr-2 p-1 sm:p-2">

    <!-- Hold -->
    <div class="pr-2">
        <ContentDoc v-slot='{ doc }' class="float-left">
            <h1 id='title' class='title pb-3'>
                <slot name='title'>
                    {{ doc.title }}
                </slot>
            </h1>
            <p class="description text-center pb-5">
                    <slot name='description'>
                    {{ doc.description }}
                </slot>
            </p>
            <div class="">
                <ContentRenderer :value="doc" />
            </div>
        </ContentDoc>
    </div><!-- Hold --> 

    <!-- PortGunnel -->
    <div v-if="toc && toc.links" class="max-w-fit h-fit m-0 -mr-14 mt-22">
        <PortGunnel class="p-8" />
    </div>
    <div v-else>
        <p>XXXXXXXXXXXXXXXXNO TOC HERE!XXXXXXXXXXX</p>
    </div>
    
</div><!-- Grid - content & toc -->

</div></template><!-- Layouts -> Single Root Element -->