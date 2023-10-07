import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TodoView from "../views/TodoView.vue";
import WeatherView from '../views/WeatherView.vue'
import ProfileView from '../views/ProfileView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/todo",
            name: "todo",
            component: TodoView,
        },
        {
            path: "/weather",
            name: "weather",
            component: WeatherView,
        },
        {
            path: "/profile",
            name: "profile",
            component: ProfileView,
        },
    ],
});

export default router;
