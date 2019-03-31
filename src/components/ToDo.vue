<template>
<div>
  <div id="toDoItemWrapper">
    <ul v-if='toDoItem.complete===false' >
     <li @click="selectTaskToEdit">{{ toDoItem.task }}<span>Complete: <input type='checkbox' @click='toggleDone'></span> </li>
     <p>{{toDoItem.id}}</p>
    </ul>
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
    },
    toggleDone () {
      this.toDoItem.complete=true;
    }
  }
}
</script>

<style scoped>
#toDoItemWrapper {
  border: solid 2px red;
  display: flex;
  justify-content: center;
  align-self: left
}

</style>
