<script setup lang="ts">
import { ref, onMounted, watch } from "vue";

const todos = ref<string[]>([]);
const newTodo = ref<string>("");
const deleteTodo = (id: string) => {
    todos.value = todos.value.filter((item) => item !== id);
};
const addTodo = () => {
    todos.value = [...todos.value, newTodo.value];
    newTodo.value = "";
};
watch(
    todos,
    (newTodoValue) => {
        localStorage.setItem("todos", JSON.stringify(newTodoValue));
    },
    { deep: true }
);
onMounted(() => {
    todos.value = JSON.parse(localStorage.getItem("todos")!);
});
</script>
<template>
    <div class="about">
        <div class="border mx-8">
            <p class="text-center">{{ $t("Todo.list") }}</p>
            <form @submit.prevent="addTodo()" class="flex justify-center my-3">
                <input v-model="newTodo" class="border px-2 text-slate-500" />
                <button type="submit" class="bg-slate-400 text-white px-3 py-1">
                    {{ $t("Todo.add") }}
                </button>
            </form>
            <div
                v-for="todo in todos"
                class="flex justify-between px-2 items-center py-2 border border-b-slate-400"
            >
                <p>{{ todo }}</p>
                <button
                    class="rounded ml-1 text-white bg-red-400 px-2 h-6"
                    @click="deleteTodo(todo)"
                >
                    x
                </button>
            </div>
        </div>
    </div>
</template>
