<template>
<div class="page relative p-2">

    <ContentDoc v-slot='{ doc }' class="float-left">
        <h1 id='title' class='title pb-3'>
            <slot name='title'>
                {{ doc.title }}
            </slot>
        </h1>
        <p class="description text-center pb-5">
                <slot name='description'>
                {{ doc.description }}
            </slot>
        </p>
        <div class="">
            <ContentRenderer :value="doc" />
        </div>
    </ContentDoc>

    <div class="absolute top-[70px] -right-[48px] justify-end w-fit h-fit m-0 p-0">
        <Sidebar  id="sidebar" class="p-8" />
    </div>
            

</div>
</template>