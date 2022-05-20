<template>
  <div class="row">
    <div class="column">
      <h2>Column 1</h2>
      <p>
        <ListComponent :items-props="firstListDataProps" />
      </p>
    </div>
    <div class="column">
      <h2>Column 2</h2>
      <p>
        <ListComponent :items-props="secondListDataProps" />
      </p>
    </div>
  </div>
</template>

<script>
import ListComponent from '@/components/HomeComponents/ListComponent.vue';

export default {
  name: 'TwoLists',
  components: { ListComponent },
  props: {
    firstListDataProps: {
      type: Array,
      required: true,
    },
    secondListDataProps: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>

</style>
