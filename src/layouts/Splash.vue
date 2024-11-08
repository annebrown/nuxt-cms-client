<!-- @/layouts/splash.vue -->
<script setup lang="ts">    
const route = useRoute()
</script>

<template><div><!-- Layouts -> Single Root Element -->

<!-- Midships -->
<div id="midships" class="flex w-fit m-0 p-0">

    <div id="hold" class="min-w-96  float-left w-fit p-5">
        <slot><!-- /page --></slot>
    </div>


</div><!-- Midships -->

</div></template><!-- Layouts -> Single Root Element -->

