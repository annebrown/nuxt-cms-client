---
title: Passing Objects
description: Passing Objects in Nuxt
---

## Managing Shared State

To maintain reactivity across components, use a composable to manage shared state.  

Employ useState composable for creating shared reactive state. Here's an example:

```js
// composables/useSharedState.ts
export const useSharedState = () => useState('sharedObject', () => ({
  // Your initial object properties here
}))
```

Use this composable in any component where you need access to the shared object:

```js
<script setup>
const sharedObject = useSharedState()

// You can now use sharedObject.value to access or modify the shared state
</script>
```

## Update the state

When you need to update the state from a component, you can simply modify the sharedObject.value:

```js
<script setup>
const sharedObject = useSharedState()

function updateObject() {
  sharedObject.value = { ...sharedObject.value, newProperty: 'New Value' }
}
</script>
```

This approach ensures that the state remains reactive across components and that changes are reflected wherever the state is used.
It's important to note that this method is different from directly returning an object from a component, which is not typically how data sharing is handled in Vue and Nuxt applications. Instead, we use composables and state management to share data between components.

xxxxxxxxxxxxxxxxxxxxxxx

## Using Object Between Components

Use props to pass data from the parent to the child,
Use emits to send data back from the child to the parent

More direct approach for component communication without using global state management.

### Parent Component Use Props

```js
<template>
  <ChildComponent :props="props" @method="signUp"/>
</template>

<script setup>
const props = {
  fields: [
    "email",
    "password",
    "confirm",
  ],
  header: "Register a new account",
  button: [
    {
      text: "Sign Up",
      color: "green-500",
    }
  ]
};

function signUp(email) {
  console.log(email)
}
</script>
```

In the child component (ChildComponent.vue):

```js
<script setup>
const { props } = defineProps(['props']);
</script>
```

This example is based on the code provided in the Stack Overflow post.

## Data from Child to Parent w Emits

In the child component:

```js
<script setup>
const emit = defineEmits(['method']);

function sendDataToParent(data) {
  emit('method', data);
}
</script>
```

The child component can now call sendDataToParent with the data it wants to send to the parent.

## Receiving emitted data in the parent

The parent component can receive this data in the method it passed to the child, in this case, the signUp function:

```js
<script setup>
function signUp(email) {
  console.log(email) // This will log the data sent from the child
}
</script>
```

This approach allows you to pass objects between parent and child components without using global state management. The parent can send data to the child via props, and the child can send data back to the parent via emits.
Remember that props in Vue 3 and Nuxt 3 are one-way down. If you need two-way binding, you can use v-model or implement a custom two-way binding using props and emits.
For more detailed information on props and custom events in Vue 3, which Nuxt 3 is based on, you can refer to the Vue 3 documentation.
