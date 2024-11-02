<script setup lang='ts'>

const props = defineProps(['theNode'])
const dirNode = props.theNode

// Regex - No sub-links, just children (Navi 0.index nos ignored in config)
const pathRegexp = '^/' + dirNode + '/[^/]+$'
/*  const pathRegexp = '^/' + dirNode + '/' + dirNode  */

const { data: childNodes } = await useAsyncData('childNodes', () => 
  queryContent(dirNode)
    .where({ _path: { $regex: pathRegexp } })
    .find()
)
</script>

<template>

<slot :child-nodes="childNodes"></slot>

</template>

  
