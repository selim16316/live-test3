import { ref } from 'vue';

export function useTaskEditor() {
  const tasks = ref([
    { name: 'Task 1', time: 30 },
    { name: 'Task 2', time: 40 },
    { name: 'Task 3', time: 60 },
    { name: 'Task 4', time: 45 },
    { name: 'Task 5', time: 50 }
  ]);
  const showEditPopup = ref(false);
  const selectedTask = ref(null);

  const editTask = (task) => {
    selectedTask.value = { ...task };
    showEditPopup.value = true;
  };

  const updateTask = (updatedTask) => {
    console.log('Updating task:', updatedTask);
    const index = tasks.value.findIndex(task => task.name === updatedTask.name);
    if (index !== -1) {
      tasks.value[index] = updatedTask;
      console.log('Task updated successfully');
    } else {
      console.error('Task not found');
    }
    closeEditPopup();
  };

  const closeEditPopup = () => {
    showEditPopup.value = false;
    selectedTask.value = null;
  };

  return { tasks, editTask, updateTask, showEditPopup, selectedTask, closeEditPopup };
}
