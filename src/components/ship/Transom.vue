<script lang="ts" setup>
function toggleDebugFrontPage() {
  var toggle = document.getElementById('front-page');
  if (toggle.style.visibility === 'hidden') {
    toggle.style.visibility = 'visible';
  } else {
    toggle.style.visibility = 'hidden';
  }
}
</script>

<template><div>

    <div class="transom flex justify-between h-8 mb-0 pb-0">
        <!-- Copyright -->
        <span id="copy" class="pt-0 mt-0 mb-0 pb-0 text-bottom">
            Copyright  
          
                <span class="invisible-link">
                    <button onclick="toggleDebugFrontPage()"
                        class="text-[--text-dimmed-light]
                        dark:text-[--text-dimmed-dark]
                        cursor-text"
                    >
                        @
                    </button>
                </span> 2024  
            <NuxtLink href='/' 
                class="text-green-700 dark:text-cyan-700 cursor-text"
            >
                Anne Brown
            </NuxtLink>
        </span>

         <!-- Center of Transom -->
        <span class=""><!-- spacer --></span>
       
         <!-- GitHub & Color Mode Toggle -->
        <span class="inline-block h-9 align-top self-center w-fit">
           <ShipSocialIcons class="mr-2 mt-1  social-icon inline-block align-top mt-0.75" />
           <UiColorModeSwitch class="inline-block align-base " />
        </span>
        <DebugFrontPage /><!-- Debug/Test/Prototype -->
    </div> 

</div></template
