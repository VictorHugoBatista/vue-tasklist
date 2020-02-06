<template>
  <div>
    <updaterForm />
    <list />
  </div>
</template>

<script>
import updaterForm from './updater-form.vue';
import list from './list.vue';

export default {
  name: 'todo',
  components: {
    updaterForm,
    list,
  },
};
</script>
