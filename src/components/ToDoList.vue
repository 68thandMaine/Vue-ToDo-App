<template>
  <!-- <div v-for=('todo, index') in todoList :key='index'>
    <ToDo :todo='todo' :index='index' />
  </div> -->
  <div>ToDoList works
  <ToDo />
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

  }
}
</script>

<style></style>
