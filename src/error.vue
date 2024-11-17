<script setup lang="ts">
    import type { NuxtError } from '#app'

    const props = defineProps({
    error: Object as () => NuxtError
    })
</script>

<template>


        <div>
            <h1>
                Sorry, boss
            </h1>

                    
            <p class="text-red-800">
                No Authz.: {{ error.statusCode }}
            </p>
        
        </div> 

        
    
</template>
