<template>

<div><!-- Logo and Web Name -->
    <ImgLogo class='smooth-rotating-svg inline-block m-0 p-0 h-12 w-12 align-bottom' />
    <div class='inline-block align-top -ml-2 mt-2 mr-2'>
        <NuxtLink href='/'>
            <span> browndomain.com</span>
        </NuxtLink>
    </div>
</div><!-- Logo -->

</template>

<style>
@keyframes smoothRotate {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(15deg); }
  50% { transform: rotate(0deg); }
  75% { transform: rotate(-15deg); }
}

.smooth-rotating-svg {
  animation: smoothRotate 4s ease-in-out infinite;
}@keyframes smoothRotate {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(15deg); }
  50% { transform: rotate(0deg); }
  75% { transform: rotate(-15deg); }
}

.smooth-rotating-svg {
  animation: smoothRotate 30s ease-in-out infinite;
}

</style>
