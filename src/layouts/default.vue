<script setup lang="ts">
    const { toc } = useContent()
</script>

<template><div><!-- Layouts -> Single Root Element -->

<!-- Grid - content & toc -->
<div class="grid grid-col-2 grid-flow-col w-fit p-1 sm:p-2">

  <ShipHold />
    
    <div 
        v-if="toc && toc.links"
        class="max-w-fit h-fit m-0 ml-1 mt-22 -mr-20"
    >

            <StarGunnel class="p-2 -mr-16" />
        
    </div>

</div><!-- Grid - content & toc -->

</div></template><!-- Layouts -> Single Root Element -->