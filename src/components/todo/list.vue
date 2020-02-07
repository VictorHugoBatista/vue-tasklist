<template>
  <ul>
    <li v-for="item in listItems" v-bind:key="item.id">
      {{ item.title }}  <button v-on:click="removeItem(item.id)">Remove</button>
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
  methods: {
    removeItem(itemId) {
      this.$store.commit('removeItem', {itemId});
    },
  },
};
</script>
