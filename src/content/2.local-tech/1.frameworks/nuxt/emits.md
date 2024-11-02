---
title: Emits
description: Emits for Data Objects
---

Use v-model directive or use a custom two-way binding approach.

## v-model

In the parent component:

```js
<template>
  <SignForm v-model:selectedOptions="selectedOptions" />
</template>

<script setup>
import { ref } from 'vue'

const selectedOptions = ref({
  email: '',
  password: ''
})
</script>
```

In the child component (SignForm.vue):

```js
<script setup>
import { computed } from 'vue'

const props = defineProps({
  selectedOptions: Object
})

const emit = defineEmits(['update:selectedOptions'])

const form = computed({
  get() {
    return props.selectedOptions
  },
  set(value) {
    emit('update:selectedOptions', value)
  }
})
</script>

<template>
  <div>
    <form>
      <input v-model="form.email" type="email" placeholder="Email">
      <input v-model="form.password" type="password" placeholder="Password">
      <button type="submit" @click.prevent="$emit('update:selectedOptions', form)">
        Submit
      </button>
    </form>    
  </div>
</template>
```

This approach is based on the solution provided in the Stack Overflow post and the Vue.js two-way data binding post.
Using a custom two-way binding:
If you prefer not to use v-model, you can implement a custom two-way binding:
In the parent component:

```js
<template>
  <SignForm :selectedOptions="selectedOptions" @update:selectedOptions="updateSelectedOptions" />
</template>

<script setup>
import { ref } from 'vue'

const selectedOptions = ref({
  email: '',
  password: ''
})

function updateSelectedOptions(newValue) {
  selectedOptions.value = newValue
}
</script>
In the child component (SignForm.vue):

<script setup>
const props = defineProps({
  selectedOptions: Object
})

const emit = defineEmits(['update:selectedOptions'])

function updateForm(key, value) {
  const updatedForm = { ...props.selectedOptions, [key]: value }
  emit('update:selectedOptions', updatedForm)
}
</script>

<template>
  <div>
    <form>
      <input :value="selectedOptions.email" @input="updateForm('email', $event.target.value)" type="email" placeholder="Email">
      <input :value="selectedOptions.password" @input="updateForm('password', $event.target.value)" type="password" placeholder="Password">
      <button type="submit" @click.prevent="$emit('update:selectedOptions', selectedOptions)">
        Submit
      </button>
    </form>    
  </div>
</template>
```

Both of these approaches allow you to emit a data object from the child component to the parent component, updating the parent's state without using a method. The v-model approach is more concise, while the custom two-way binding gives you more control over when and how the data is updated.
Remember to adjust the form fields and object properties according to your specific needs.

