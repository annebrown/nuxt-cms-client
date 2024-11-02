---
title: v-if
description: Using v-if in Nuxt
---

## Purpose

Conditional rendering in Vue and Nuxt

```js
<template>
  <div>
    <h1>Welcome to my app</h1>
    <p v-if="isLoggedIn">Hello, {{ username }}!</p>
    <p v-else>Please log in to continue.</p>

    <button v-if="isLoggedIn" @click="logout">Logout</button>
    <button v-else @click="login">Login</button>
  </div>
</template>

<script setup>
const isLoggedIn = ref(false)
const username = ref('')

const login = () => {
  isLoggedIn.value = true
  username.value = 'John Doe'
}

const logout = () => {
  isLoggedIn.value = false
  username.value = ''
}
</script>
```

Uses `v-if="isLoggedIn"` to conditionally render a welcome message when user is logged in.

`v-else` shows an alternative message when the user is not logged in.

Can also use v-if and v-else to toggle between showing a "Login" or "Logout" button based on the login state.

The v-if directive is used for conditional rendering in Vue.js and Nuxt. It will only render the element if the expression evaluates to a truthy value. When the condition changes, Vue will efficiently update the DOM, adding or removing elements as necessary.
Remember that in Nuxt 3, you don't need to explicitly import ref as it's auto-imported as mentioned in the Nuxt documentation.
Vue.js documentation on v-if
This example demonstrates a basic use of v-if in a template. You can use more complex expressions or computed properties with v-if as needed for your specific use case.
