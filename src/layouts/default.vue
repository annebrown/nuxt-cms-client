<!----------------------------@/layouts/default.vue---------------------------->
<script setup lang="ts">
    const { data } = 
        await useAsyncData('page-data', () => queryContent('').findOne())
    const { toc, prev, next } = useContent()
</script>

<!-- Layout (Single Root Element) -->
<template><div>

   <!-- Flex -->
   <div class="flex flex-row">

    <!-- Page Body -->
    <div class="pr-2">
        <ContentDoc v-slot='{ doc }' class="float-left">
            <!-- Title -->
            <h1 id='title' class='title pb-3'>
                <slot name='title'>
                    {{ doc.title }}
                </slot>
            </h1>
            <!-- Description -->
            <p class="description text-center pb-5">
                    <slot name='description'>
                    {{ doc.description }}
                </slot>
            </p>
            <div class="p-2">
                <ContentRenderer :value="doc" />
            </div>
        </ContentDoc>

        <!-- Child Route Cards-->
        <RouteDynamicImmediateChildCards class="mt-" />

    </div><!-- Page Body -->

    <!-- StarGunnel -->
    <div v-if="toc && toc.links" id="star-gunnel" class="w-fit h-fit m-0 -mr-14 mt-22">
        <StarGunnel class="p-1" />
    </div><!-- StarGunnel -->
    
</div><!-- Flex -->

</div></template><!-- Layout (Single Root Element) -->
<!----------------------------@/layouts/default.vue---------------------------->