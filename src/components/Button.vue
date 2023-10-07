<template>
    <button class="bg-slate-400 text-white px-3 py-1">{{ buttonText }}</button>
</template>

<script lang="ts">
export default {
    props: {
        buttonText: {
            type: String,
            default: () => "button",
        },
    },
};
</script>
