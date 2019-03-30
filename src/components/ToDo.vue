<template>
<div>
  <div>
    <p @click='editToDo'>{{ toDoItem.task }}</p>
  </div>
</div>
</template>

<script>
export default {
  name: 'ToDo',
  props: [
    'toDoItem',
    'editToDo'
  ]
}
</script>

<style></style>
