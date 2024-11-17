<script setup>
async function googleLogin() {

    const { data, } = await useFetch("/login/google");
    navigateTo(data.value.url, { external: true })
}
</script>

<template>
    <UButton @click="googleLogin">Login with google</UButton>
</template>