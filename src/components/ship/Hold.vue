<template>
<!-- Relative for Abs -->
<div id="the-relative" class=" relative ring-2 ring-lime-300 rounded-lg p-2 m-2">

    <div id="main" class=""><!-- main -->
        <div id="midships" class="w-full grid grid-col-2 grid-flow-col"><!-- Midships -->
            <div id="hold" class="p-2 w-full"><!-- Hold --> 
                <ContentDoc v-slot="{ doc }">
                    <!-- Cargo-->

                        <h2 class="text-center pt-8">{{ doc.title }}</h2>
                        <p class="text-center">{{  doc.description }}</p>
                        <div class="">
                            <ContentRenderer :value="doc" />
                        </div>
    
                </ContentDoc>

            </div><!-- Hold --> 
            <div id="bow" class="absolute -mt-[50px] ml-[12px] p-0 w-[180px] h-[50px] ">
                <ShipBow class="mr-2" />
            </div>
            
            <div id="navi" class="justify-end w-fit h-fit m-0 mt-[40px] -mr-[80px] p-0">
                <Sidebar />
            </div>
            
        </div><!-- Midships -->
        
    </div><!-- Main -->

<ShipTransom id="transom" class="absolute bottom-0 mx-auto w-fit p-2 m-0" />
</div><!-- Relative for Abs Positioning-->
</template>