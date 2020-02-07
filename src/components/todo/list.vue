<template>
  <ul>
    <li v-for="(item, itemIndex) in listItems" v-bind:key="itemIndex">
      {{ item.title }}  <button v-on:click="removeItem(itemIndex)">Remove</button>
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
    removeItem(itemIndex) {
      this.$store.commit('removeItem', {itemIndex});
    },
  },
};
</script>
