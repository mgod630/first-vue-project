<script setup lang="ts">
import Clock from "@/components/Clock.vue";

const username = localStorage.getItem("user");
</script>

<template>
    <main class="pt-10 text-2xl text-center font-semibold">
        <Clock />
        <p class="mt-4">{{ $t("Dashboard.goodmorning") }} {{ username }}</p>
    </main>
</template>
