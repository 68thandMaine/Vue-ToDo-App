<template>
<div>
  <ul>
  <li v-for='(item, index) in todoList' :key='index'>{{item.task}}</li>
  <hr />
  </ul>
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
    handleAddToDo () {
      alert('add todo was clicked')
    }
  }
}
</script>

<style></style>
