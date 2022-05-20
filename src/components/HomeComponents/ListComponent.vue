<template>
  <ul class="striped-list">
    <li v-for="listItem in itemsProps" :key="listItem.id">
      {{ listItem.title }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ListComponent',
  props: {
    itemsProps: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
  @import "src/assets/style/listComponent";
</style>
