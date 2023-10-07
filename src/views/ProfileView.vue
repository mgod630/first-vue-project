<script setup lang="ts">
import { useUserStore } from "@/stores/user";
import LanguageSwitcher from "@/components/LanguageSwitcher.vue";
import { ref } from "vue";

const editName = ref("");
const stores = useUserStore();
const toggleDarkMode = () => {
    stores.toggleMode();
    if (stores.$state.isDarkMode) {
        localStorage.setItem("darkMode", "true");
    } else {
        localStorage.removeItem("darkMode");
    }
};
const logout = () => {
    stores.logout();
    localStorage.removeItem("user");
};
const changeName = () => {
    stores.setUsername(editName.value);
    localStorage.setItem("user", editName.value);
    editName.value = "";
};
</script>

<template>
    <div class="flex flex-col items-center">
        <form @submit.prevent="changeName" class="flex mb-2">
            <input
                placeholder="edit username"
                v-model="editName"
                class="border px-2 text-slate-500"
            />
            <button
                type="submit"
                class="bg-slate-400 text-white px-3 py-1"
            >
                {{ $t("Profile.save") }}
            </button>
        </form>
        <div class="flex">
            <label for="toggler" class="mr-1 mb-1 cursor-pointer">{{
                $t("Profile.darkTheme")
            }}</label>
            <input
                id="toggler"
                type="checkbox"
                class="cursor-pointer"
                @click="toggleDarkMode()"
                :checked="stores.$state.isDarkMode"
            />
        </div>
        <div class="my-2">
            <LanguageSwitcher />
        </div>
        <div>
            <button @click="logout" class="bg-slate-400 text-white px-3 py-1">
                {{ $t("Profile.logout") }}
            </button>
        </div>
    </div>
</template>
