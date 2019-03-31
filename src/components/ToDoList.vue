<template>
<div>
  <div class="headerWrapper">
      <button @click='handleNewToDo'>New To Do Item</button>
    </div>
  <div v-if='newToDo'>
    <ToDoForm :addNewTask='addNewTask'/>
  </div>
  <div v-if='toDoList'>
    <div v-for='(toDoItem, index) in todoList' :key='index'>
      <ToDo :toDoItem='toDoItem' :index='index' :editToDo='handleEditToDo'/>
    </div>
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
      toDoList: true,
      todoList: [
        {task: 'Learn Vue', importance: 1, complete: false, id: 1},
        {task: 'Study testing frameworks', importance: 2, complete: false, id: 2},
        {task: 'Wash dishes', importance: 3, complete: false, id: 3}
      ]
    }
  },
  methods: {
    handleEditToDo (toDo) {
      console.log('i was clicked', toDo.id)
    },
     handleNewToDo () {
      this.newToDo = true;
      this.toDoList = false;
    },
    addNewTask (task) {
      console.log(task)
      this.todoList.push(task);
      this.newToDo = false;
      this.toDoList = true;
    }
  }
}
</script>

<style></style>


  }
