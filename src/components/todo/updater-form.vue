<template>
  <form v-on:submit.once="addItemToList">
    <input type="text" ref="field-text" placeholder="Texto à ser adicionado à lista" />
    <button v-on:click="addItemToList">Adicionar à lista</button>
  </form>
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
  },
};
</script>
