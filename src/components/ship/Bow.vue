<script setup lang="ts">

</script>

<template>

<div id='bow' class='bow flex'><!-------- Bow -------->

    <div class='menu-logo grow-0'><!-------- Logo -------->
        <ImgLogo 
            class='inline-block m-0 p-0 h-12 w-12 align-bottom' 
        />
        <div class='inline-block align-top -ml-2 mt-2'>
            <NuxtLink href='/'>
                browndomain.com 
            </NuxtLink>
        </div>
    </div><!-- Logo -->
    
    <div class="grow-0"><!-- Spacer --></div>

    <!---------- Menu, Mode Toggle --------> 
    <div class='inline-block text-right min-w-96 max-w-fit'>

        <div id='navi-menu' class='align-top mr-2'><!-- Navi Menu -->

            <div class="flex-row-reverse"><!-- Flex -->

                <div>
                    
                </div>

                
                <UiColorModeSwitch class='inline align-top'/>
            </div><!-- Flex -->
        </div><!-- Navi Menu -->
      
    </div><!-- Menu, Mode Toggle --> 

</div><!-- Bow -->

</template>
