<template>
<div>
  <div class="headerWrapper">
      <button @click='handleNewToDo'>New To Do Item</button>
    </div>
  <div v-if='newToDo'>
    <ToDoForm :addNewTask='addNewTask'/>
  </div>
  <div v-for='(toDoItem, index) in todoList' :key='index'>
    <ToDo :toDoItem='toDoItem' :index='index' :editToDo='handleEditToDo'/>
  </div>
</div>
</template>

<script>
import ToDo from '@/components/ToDo.vue'
import ToDoForm from '@/components/ToDoForm.vue'

export default {
  name: 'ToDoList',
  components: {
    ToDo,
    ToDoForm
  },
  data () {
    return {
      newToDo: false,
      todoList: [
        {task: 'Learn Vue', importance: 1},
        {task: 'Study testing frameworks', importance: 2},
        {task: 'Wash dishes', importance: 3}
      ]
    }
  },
  methods: {
    handleEditToDo () {
      alert('edit todo was clicked')
    },
     handleNewToDo () {
      this.newToDo = true;
    },
    addNewTask (task) {
      console.log(task)
      this.todoList.push(task);
    }
  }
}
</script>

<style></style>


  }
