<template>
  <div>
    <b-form inline v-on:submit.once="addItemToList" class="my-3">
      <b-form-group>
        <b-form-input type="text" ref="field-text" class="mr-3"></b-form-input>
        <b-button variant="primary" v-on:click="addItemToList" class="mr-3">Add</b-button>
        <b-button variant="primary" v-if="0 < this.$store.state.todo.listItems.length"
          v-on:click="clearList">Clear list</b-button>
      </b-form-group>
    </b-form>
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
