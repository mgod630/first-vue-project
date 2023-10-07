<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { useUserStore } from "./stores/user";
import { ref, onMounted } from "vue";

const stores = useUserStore();
const enterUsername = ref<string>("");
const saveUsername = () => {
    if (enterUsername.value.length) {
        stores.setUsername(enterUsername.value);
        localStorage.setItem("user", enterUsername.value);
        enterUsername.value = "";
    }
};
onMounted(() => {
    stores.$state.username = localStorage.getItem("user")!;
    stores.$state.isDarkMode = localStorage.getItem("darkMode") === "true";
});
</script>

<template>
    <div
        v-if="stores.$state.username"
        :class="
            stores.$state.isDarkMode
                ? 'bg-slate-500 text-white'
                : 'bg-white text-slate-500'
        "
        class="lg:w-1/2 w-5/6 mt-10 mx-auto"
    >
        <p class="text-center border py-1">{{ $t("Main.title") }}</p>
        <div class="flex">
            <nav class="flex flex-col items-center p-3 border">
                <RouterLink to="/">{{ $t("nav.dashboard") }}</RouterLink>
                <RouterLink to="/todo">{{ $t("nav.todo") }}</RouterLink>
                <RouterLink to="/weather">{{ $t("nav.weather") }}</RouterLink>
                <RouterLink to="/profile">{{ $t("nav.profile") }}</RouterLink>
            </nav>
            <RouterView class="border w-full py-10" />
        </div>
    </div>
    <div
        v-else
        class="w-1/2 h-40 rounded mt-10 mx-auto border border-slate-500 flex justify-center items-center"
        :class="
            stores.$state.isDarkMode
                ? 'bg-slate-500 text-white'
                : 'bg-white text-slate-500'
        "
    >
        <form @submit.prevent="saveUsername">
            <input
                placeholder="enter your username"
                class="border px-2 py-1 text-slate-500"
                v-model="enterUsername"
            />
            <button class="bg-slate-400 text-white px-3 py-1">
                {{ $t("Profile.enter") }}
            </button>
        </form>
    </div>
</template>
