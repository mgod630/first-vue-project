import { defineStore } from "pinia";
export const useUserStore = defineStore({
    id: "user",
    state: () => ({
        language: "en",
        isDarkMode: false,
        username: "",
    }),
    getters: {
        darkState: (state) => state.isDarkMode,
        getUsername: (state) => state.username,
    },
    actions: {
        toggleMode() {
            this.isDarkMode = !this.isDarkMode;
        },
        toggleLanguage() {
            if (this.language == "en") {
                this.language = "fa";
            } else {
                this.language = "en";
            }
        },
        setUsername(input: string) {
            this.username = input;
        },
        logout() {
            this.username = "";
        },
    },
});
