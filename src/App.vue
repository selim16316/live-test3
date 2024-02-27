<script setup>
import { ref } from 'vue'
import Popup from './components/Popup.vue';
const popupActive = ref(false);
const tasks = ref([
{
  name: 'Task 1',
  time: 30
}, 
{
  name: 'Task 2',
  time: 40
}, 
{
  name: 'Task 3',
  time: 60
}, 
{
  name: 'Task 4',
  time: 45
}, 
{
  name: 'Task 5',
  time: 50
}
]);
</script>

<template>
  <Popup v-show="popupActive"/>
  <section class="p-10 bg-green-200 mt-20 mx-3 md:m-auto md:mt-20 rounded-md sm:w-4/5 md:w-3/5 lg:w-2/5">
    <div class="flex flex-col">
      <h1 class="text-3xl font-semibold">Task List</h1>
      <div class="m-auto mt-4 flex flex-col items-start w-full">
        <div class="flex flex-col mt-2 w-full gap-2">
          <div v-for="(task, index) in tasks" :key="index" class="flex justify-between bg-slate-50 p-3 rounded-md w-full">
            <h3 class="font-medium"><span>{{ index + 1 }}. </span>{{ task.name }}</h3>
            <span class="font-medium">{{ task.time }} Min</span>
            <div>
              <span class="ml-2 text-blue-500 cursor-pointer" @click="callChildFunc(index)"><i class="fa-solid fa-pen-to-square"></i></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>