<script setup>
import { ref } from 'vue'
const nameError = ref();
const timeError = ref();
const taskData = {
    name: '',
    time: ''
}
</script>
<template>
    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <form class="w-full">
                    <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                        <div class="sm:flex sm:items-start">
                            <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                                <i class="fa-solid fa-list-check"></i>
                            </div>
                            <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-5/6">
                                <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">Edit Task</h3>
                                
                                    <div class="sm:col-span-4 mt-3 w-full">
                                        <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Task name</label>
                                        <div class="mt-2">
                                            <input v-model="taskData.name" id="name" name="name" type="text" placeholder="e.g. Task 1" class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                        <span class="text-red-500">{{ nameError }}</span>
                                        </div>
                                    </div>
                                    <div class="sm:col-span-4 w-full mt-3">
                                        <label for="time" class="block text-sm font-medium leading-6 text-gray-900">Task time</label>
                                        <div class="mt-2">
                                            <input v-model="taskData.time" id="time" name="time" type="number" class="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="e.g. 60">
                                        <span class="text-red-500">{{ timeError }}</span>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button type="submit" class="inline-flex w-full justify-center rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 sm:ml-3 sm:w-auto">Update</button>
                        <button @click="modalClose" type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
input:focus-visible{
    border: none !important;
    outline: none !important;
}
input:focus{
    border: none !important;
    outline: none !important;
}
</style>