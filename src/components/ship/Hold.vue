<template><div>

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
            
</div></template>