<template>
    <section>
      <ul>
        <li v-for="listItem in itemsProps" :key="listItem.id">
          {{ listItem.title }}
        </li>
      </ul>
    </section>
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

<style scoped>

</style>
