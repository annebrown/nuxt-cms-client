---
title: Variables
description: Using Vars in Nuxt
---

## ref()

```js
const myVariable = ref('some string')
```

- Part of Vue's Composition API
- Uses Vue's reactivity system to create a reactive reference.
- Makes primitive values reactive.
- Wraps the primitive value in an object with a single property named value.
- Allows Vue to track changes to the value and trigger updates in components that depend on it

## Accessing a Ref() Value

```js
console.log(myVariable.value) // Outputs: 'some string'
myVariable.value = 'new string' // Changes the value
```

In template expressions, refs are automatically unwrapped, so use directly without .value:

```js
<template>
  <div>{{ myVariable }}</div>
</template>
```
