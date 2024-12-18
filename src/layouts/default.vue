<!----------------------------@/layouts/default.vue---------------------------->
<!-- Layout (Single Root Element) -->
<template><div>
    
    <!-- Flex -->
    <div class="flex flex-row">
   
       <!-- Port Gunnel -->
       <div class="flex-none gunnel max-w-fit h-fit
           mt-6 -ml-[50px] mb-2 p-2 rounded-lg">
           <ANavigationTree class="mr-2 text-xs" />
       </div>

        <!-- Page Body -->
        <div class="flex-1 p-4 pt-0">
           <ContentDoc v-slot='{ doc }' class="float-left">
           <!-- Title -->
               <h1 class="title">{{ doc.title }}</h1>
   
               <!-- Description -->
                <p class="description -mt-3 pb-4 text-center text-lg">{{ doc.description }}</p>
   
               <!-- Rest of Page -->
               <ContentRenderer :value="doc" class="markdown p-2"/>
           </ContentDoc>
           
           <!-- Child Route Cards-->
           <RouteDynamicImmediateChildCards class="mt-1" />

        </div><!-- Page Body -->

       <!-- Star Gunnel -->
       <div class="gunnel flex-none max-w-fit h-fit">
           <StarGunnel />
       </div><!-- Star Gunnel -->
        
    </div><!-- Flex -->

</div></template><!-- Layout (Single Root Element) -->
<!----------------------------@/layouts/default.vue---------------------------->