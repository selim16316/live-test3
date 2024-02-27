<template>
  <div>
    <h1>Task List</h1>
    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        {{ task.name }} - {{ task.time }} minutes
        <button @click="editTask(task)">Edit</button>
      </li>
    </ul>
    <TaskEditPopup v-if="showEditPopup" :task="selectedTask" @update="updateTask" @close="closeEditPopup" />
  </div>
</template>

<script>
import { ref } from 'vue';
import TaskEditPopup from './components/TaskEditPopup.vue';
import { useTaskEditor } from './composition/useTaskEditor';

export default {
  name: 'App',
  components: {
    TaskEditPopup
  },
  setup() {
    const { tasks, editTask, updateTask, showEditPopup, selectedTask, closeEditPopup } = useTaskEditor();

    return { tasks, editTask, updateTask, showEditPopup, selectedTask, closeEditPopup };
  }
};
</script>
