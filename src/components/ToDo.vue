<template>
<li>

    {{todo.item}}

</li>
</template>

<script>
export default {
  name: 'ToDo',
  props: [
    'item'
  ]
}
</script>

<style></style>
