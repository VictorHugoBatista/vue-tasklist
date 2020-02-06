<template>
  <ul>
    <li v-for="item in listItems" v-bind:key="item.id">
      {{ item.title }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'list',
  computed: {
    listItems() {
      return this.$store.state.todo.listItems;
    },
  },
};
</script>
