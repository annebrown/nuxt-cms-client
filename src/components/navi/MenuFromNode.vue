<script setup lang="ts">
const props = defineProps(['aNode'])
const someNode = props.aNode
</script>

<template>

<!-- Debug -->
<div v-if="false"><!-- Debug Toggle -->
    <h2 class="text-white">
        <span class="text-purple-500">-- ImmediateChildren --</span> 
        Component called from 
        <span class="text-amber-500">ListTech:</span>
    </h2>
</div>
 
<h2 class="text-left">props.aNode: {{ props.aNode }}</h2>
<h2 class="text-left">someNode: {{ someNode }}</h2>
<NaviImmediateChildren v-slot="{ childNodes }" 
    :theNode="theNode=someNode" :key="'key'"
>
    <ul v-if="childNodes">
        <li v-for="item in childNodes" :key="item._path">
        
            <NuxtLink 
                v-if="item._path === '/' + someNode + '/_dir'"
                    :to="item._path" class="parent-node">
                    {{ item.title.toUpperCase() }}
            </NuxtLink>
            <NuxtLink 
                v-else 
                    :to="item._path" class="child-node">
                        {{ item.title }}
            </NuxtLink>
            
        </li>
    </ul>
</NaviImmediateChildren>

<slot :child-nodes="childNodes"></slot>

</template>

<style>
/* Debug */
h2, h3 { @apply text-green-500; }

</style>