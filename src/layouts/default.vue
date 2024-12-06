<!----------------------------@/layouts/default.vue---------------------------->
<script setup lang="ts">
    const { toc } = useContent()
</script>

<!-- Layout (Single Root Element) -->
<template><div>
   
    <!-- Flex -->
    <div class="flex flex-row">
   
       <!-- Port Gunnel -->
       <div class="flex-1 gunnel max-w-fit h-fit 
           mt-6 -ml-[50px] mb-2 p-2 rounded-lg">
           XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
           <PortGunnel class="mr-2 text-xs" />
       </div>

    <!-- Page Body -->
    <div class="flex-1 p-4 pt-0">
           <ContentDoc v-slot='{ doc }' class="float-left">
           <!-- Title -->
               <h1 class="title">{{ page.title }}</h1>
   
               <!-- Description -->
               <div v-if="page.description">
                   <p class="description -mt-3 pb-4 text-center text-lg">{{ page.description }}</p>
               </div>
               <div v-else class="text-center text-lg text-amber-400">
                   <p class="-mt-4 pb-4 text-center">XXXXXXXX No Description XXXXXXXX</p>
               </div><!-- Description -->
   
               <!-- Rest of Page -->
               <ContentRenderer :value="page" class="markdown p-2"/>
           </ContentDoc>
           
           <!-- Child Route Cards-->
           <RouteDynamicImmediateChildCards class="mt-" />

        </div><!-- Page Body -->

       <!-- Star Gunnel -->
       <div class="flex-1 max-w-[30%] md:max-w-fit">
           <ContentStarGunnel />
       </div><!-- Star Gunnel -->
        
    </div><!-- Flex -->

</div></template><!-- Layout (Single Root Element) -->
<!----------------------------@/layouts/default.vue---------------------------->