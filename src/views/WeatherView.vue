<script setup lang="ts">
import { ref } from "vue";

const ApiKey = "f474b2372ea1759d4d1d78783a18b0b4";
const cityName = ref("");
const showError = ref(false);
const infoEmpty = ref(true);
const getInfo = ref({});
const getTemp = async () => {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=${ApiKey}`
    );
    const data = await response.json();
    if (data.cod === 200) {
        infoEmpty.value = false;
        getInfo.value = data;
        showError.value = false;
        cityName.value = "";
        return;
    }
    infoEmpty.value = true;
    getInfo.value = {};
    showError.value = true;
    cityName.value = "";
};
</script>

<template>
    <div>
        <form @submit.prevent="getTemp()" class="flex justify-center my-3">
            <input v-model="cityName" class="border px-2 text-slate-500" />
            <button type="submit" class="bg-slate-400 text-white px-3 py-1">
                {{$t("Weather.search")}}
            </button>
        </form>
        <div v-if="!infoEmpty" class="text-center">
            <p class="my-2">{{ getInfo.name }}</p>
            <p class="my-2">{{ (getInfo.main.temp - 271).toFixed(0) }} °</p>
            <p class="my-2">{{ getInfo.weather[0].main }}</p>
        </div>
        <p v-if="showError" class="mt-2 text-center text-red-500 font-semibold">
            {{$t("Weather.error")}}
        </p>
    </div>
</template>
