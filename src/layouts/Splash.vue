<template><div><!-- Layouts -> Single Root Element -->

    <div class="relative min-w-72 p-1 sm:p-2 md:p-4">
    
        <!-- Title -->
        <h1 class="pt-4">
            <slot name="title"></slot>
        </h1><!-- Title -->
    
        <!-- Description -->
        <p id="description" class="text-center text-xs">
            <slot name="description"></slot>
        </p>
        <!-- description -->
    
        <!-- Cargo -->
        <div id="cargo">
            <slot></slot>
        </div>
    
    </div>
    
    </div></template><!-- Layouts -->

