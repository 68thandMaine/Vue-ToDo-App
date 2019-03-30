<template>
 <div>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="headerWrapper">
      <button>New To Do Item</button>
    </div>
    </div>
    <div>
      <ToDoList />
    </div>
  </div>
</template>

<script>
import ToDoList from '@/components/ToDoList.vue'

export default {
  name: 'HelloWorld',
  components: {
    ToDoList
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js To Do App'
    }
  },
  methods: {
    handleNewToDo () {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
