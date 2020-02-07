<template>
  <div>
    <form v-on:submit.once="addItemToList">
      <input type="text" ref="field-text" />
      <button v-on:click="addItemToList">Add</button>
    </form>
    <button v-if="0 < this.$store.state.todo.listItems.length"
      v-on:click="clearList">Clear list</button>
  </div>
</template>

<script>
export default {
  name: 'updater-form',
  methods: {
    addItemToList(event) {
      event.preventDefault();
      const newItem = this.$refs['field-text'].value;
      this.$store.commit('addItem', {newItem});
      this.$refs['field-text'].value = '';
    },
    clearList() {
      this.$store.commit('clear');
    },
  },
};
</script>
