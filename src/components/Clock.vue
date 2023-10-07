<script setup lang="ts">
import { ref } from "vue";

let clock = ref("");
const getTime = () => {
    const hour = new Date().getHours();
    let minute = new Date().getMinutes();
    if (minute < 10) {
        minute = "0" + minute.toString();
    }
    clock.value = `${hour} : ${minute}`;
};
getTime();
setInterval(() => {
    getTime();
}, 1000);
</script>
<template>
    <p>{{ clock }}</p>
</template>
