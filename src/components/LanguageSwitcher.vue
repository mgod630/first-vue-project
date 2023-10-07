<template>
    <select
        @change="switchLanguage"
        class="border rounded px-2 py-1 text-slate-500"
    >
        <option
            v-for="sLocale in supportedLocales"
            :key="`locale-${sLocale}`"
            :value="sLocale"
            :selected="locale === sLocale"
        >
            {{ t(`locale.${sLocale}`) }}
        </option>
    </select>
</template>

<script lang="ts">
import { useI18n } from "vue-i18n";
import { useUserStore } from "./../stores/user";
import Tr from "@/i18n/translation";
export default {
    setup() {
        const { t, locale } = useI18n();
        const stores = useUserStore();
        const supportedLocales = Tr.supportedLocales;

        const switchLanguage = async (event: any) => {
            const newLocale = event.target.value;
            await Tr.switchLanguage(newLocale);
            stores.toggleLanguage();
            if (stores.$state.language == "en") {
                localStorage.removeItem("language");
            } else {
                localStorage.setItem("language", "fa");
            }
        };

        return { t, locale, supportedLocales, switchLanguage };
    },
};
</script>
