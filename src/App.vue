<template>
  <div id="app">
    <b-container>
      <todo />
    </b-container>
  </div>
</template>

<script>
import todo from './components/todo/todo.vue';

export default {
  name: 'app',
  components: {
    todo,
  },
};
</script>
