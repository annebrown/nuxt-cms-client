<script setup lang="ts">
    definePageMeta({
        title: 'ABOUT',
        description: 'Technology development and documentation site',
    })
    const colorMode = useColorMode()

</script>

<template>

    <NuxtLayout name="splash">

        <template #title>
            About
        </template>

        <div class="grid grid-cols-2 justify-between w-full"><!-- Grid -->

            <p>Technology development and documentation site</p>
            
            <div class="pl-5 pr-12">
                <NuxtLink href="/">
                    <template v-if="colorMode.value === 'dark'">
                        <NuxtImg 
                            src="/images/logo-it-dark-sq.svg" 
                            alt="Logo - Anne Brown, IT Architect"
                            height="200"
                            width="200"
                        />
                        <span class="sr-only">Dark Mode</span>
                    </template>
                    <template v-else>
                        <NuxtImg 
                            src="/images/logo-it-light-sq.svg" 
                            alt="Logo - Anne Brown, IT Architect"
                            height="200"
                            width="200"
                        />
                        <span class="sr-only">Light Mode</span>
                    </template>
                </NuxtLink>
            </div><!-- NuxtLink -->

        </div><!-- Grid -->

    </NuxtLayout>

</template>
 