<template>
  <div>
    <h4>Add a task to your to do list</h4>
    <form>
      <label for='task'>Task</label>
      <div>
        <input id='task' type='text' v-model='task' required autofocus>
      </div>
      <label for='importance'>Importance</label>
      <div>
        <select id='importance' v-model='importance' required>
          <option value= 1>Urgent</option>
          <option value= 2>Somewhat</option>
          <option value= 3>Not at all</option>
        </select>
      </div>
      <div>
        <button type='submit' @click.prevent='newToDo'>Add to the list!</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props
}
