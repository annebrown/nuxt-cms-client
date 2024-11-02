<script setup lang="ts">

</script>

<template>

<div id='bow' class='bow flex'><!-------- Bow -------->

    <div class='menu-logo grow-0'><!-------- Logo -------->
        <ImgLogo 
            class='inline-block m-0 -ml-7 p-0 h-12 w-12 align-bottom' 
        />
        <div class='inline-block align-top -ml-2'>
            <NuxtLink href='/'>
                DOCS 
            </NuxtLink>
        </div>
    </div><!-- Logo -->
    
    <div class="grow-0"><!-- Spacer --></div>

    <!---------- Menu, Mode Toggle --------> 
    <div class='inline-block text-right -mr-8 w-96'>

        <div id='navi-menu' class='align-top mr-2'><!-- Navi Menu -->

            <div class="flex-row-reverse"><!-- Flex -->

                <div id="tech" class='dropdown inline'>
                    <button class='dropdown-button'>
                        <NuxtLink href='/docs/tech'>
                            <strong>TECH</strong>
                        </NuxtLink>
                    </button>&nbsp;
                    <div class='dropdown-content'>           
                        <!-- <NaviMenuFromNode :aNode="aNode='tech'" :key="key='tech'" /> -->
                        <NaviMenuFromNode :aNode="'/docs/tech'" :key="'/docs/tech'" />
                    </div>
                </div>

                <div id="tech" class='dropdown inline'>
                    <button class='dropdown-button'>
                        <NuxtLink href='/docs/devy'>
                            <strong>DEVY</strong>
                        </NuxtLink>
                    </button>&nbsp;
                    <div class='dropdown-content'>           
                        <!-- <NaviMenuFromNode :aNode="aNode='tech'" :key="key='tech'" /> -->
                        <NaviMenuFromNode :aNode="'/docs/devy'" :key="'/docs/devy'" />
                    </div>
                </div>

                <div id="tech" class='dropdown inline'>
                    <button class='dropdown-button'>
                        <NuxtLink href='/local-tech'>
                            <strong>LTECH</strong>
                        </NuxtLink>
                    </button>&nbsp;
                    <div class='dropdown-content tech'>           
                        <!-- <NaviMenuFromNode :aNode="aNode='tech'" :key="key='tech'" /> -->
                        <NaviMenuFromNode :aNode="'/local-tech'" :key="'/local-tech'" />
                    </div>
                </div>

                <div id="devy" class='dropdown inline'>
                    <button class="dropdown-button">
                        <NuxtLink href="/local-devy">
                            <strong>LDEVY</strong>
                        </NuxtLink>
                    </button>&nbsp;
                    <div class="dropdown-content devy">           
                        <!-- <NaviMenuFromNode :aNode="aNode='devy'" :key="key='devy'"/> -->
                        <NaviMenuFromNode  :aNode="'local-devy'" :key="'local-devy'" />
                    </div>
                </div>
                <UiColorModeSwitch class='inline align-top -mt-2'/>
            </div><!-- Flex -->
        </div><!-- Navi Menu -->
      
    </div><!-- Menu, Mode Toggle --> 

</div><!-- Bow -->

</template>

<style>
/* Bow */

.navi-menu-item { @apply hover:text-green-800 text-sm align-top; }
.dropdown:hover .dropdown-content { display: block; @apply m-10; }
.dropdown-content { @apply hidden absolute bg-gray-950
    ring-2 ring-sky-500 rounded-lg; }
.tech { @apply ring-sky-500; }
.devy { @apply ring-purple-500; }

.dropdown-content a {
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}
.drop-item a { @apply text-sm p-5; }

.dropdown-sub:hover .dropdown-sub-content { display: block; }
.dropdown-sub-content { @apply hidden relative 
    ring-2 ring-red-200 rounded-lg text-red-300; }
.dropdown-sub-content a {
  @apply block no-underline p-2;
}
.drop-sub-item a { @apply text-xs p-2 text-red-300; }

</style>
