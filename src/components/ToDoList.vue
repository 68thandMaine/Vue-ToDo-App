<template>
<div>
  <div v-for='(toDoItem, index) in todoList' :key='index'>
    <ToDo :toDoItem='toDoItem' :index='index' :editToDo='handleEditToDo'/>
  </div>
</div>
</template>

<script>
import ToDo from '@/components/ToDo.vue'

export default {
  name: 'ToDoList',
  components: {
    ToDo
  },
  data () {
    return {
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
    }
  }
}
</script>

<style></style>
