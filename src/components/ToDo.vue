<template>
<div>
  <div id="toDoItemWrapper">
    <div @click="selectTaskToEdit">
     <p>{{ toDoItem.task }}</p>
     <p>{{toDoItem.id}}</p>
    </div>
    <div>
      <label for='complete'>Complete</label>
      <div>
        <input type='checkbox' value='toDoItem.complete'>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ToDo',
  props: [
    'toDoItem',
    'editToDo'
  ],
  methods: {
    selectTaskToEdit () {
      let taskToEdit = this.toDoItem
      this.editToDo(taskToEdit)
    }
  }
}
</script>

<style scoped>
#toDoItemWrapper {
  border: solid 2px red;
  display: flex;
  justify-content: center;
  align-items: baseline;
}
</style>
