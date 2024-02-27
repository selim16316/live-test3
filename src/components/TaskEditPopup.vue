<template>
    <div class="popup-overlay">
      <div class="popup-content">
        <h2>Edit Task</h2>
        <form @submit.prevent="submitForm">
          <div>
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="editedTask.name">
          </div>
          <div>
            <label for="time">Time (minutes):</label>
            <input type="number" id="time" v-model.number="editedTask.time">
          </div>
          <button type="submit">Submit</button>
          <button type="button" @click="close">Cancel</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    props: ['task'],
    emits: ['update', 'close'],
    setup(props, { emit }) {
      const editedTask = ref({ ...props.task });
  
      const submitForm = () => {
        console.log('Submitting form with editedTask:', editedTask.value);
        emit('update', editedTask.value);
      };
  
      const close = () => {
        emit('close');
      };
  
      return { editedTask, submitForm, close };
    }
  };
  </script>
  
  <style scoped>
  .popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .popup-content {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
  }
  
  .popup-content form div {
    margin-bottom: 10px;
  }
  
  .popup-content form div label {
    display: block;
  }
  
  .popup-content form div input {
    width: 100%;
    padding: 5px;
    box-sizing: border-box;
  }
  
  .popup-content form button {
    margin-top: 10px;
  }
  </style>
  