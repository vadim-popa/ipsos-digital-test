<template>
  <div class="row">
    <div class="column-full">
      <h2>Column 1</h2>
      <p>
        <ListComponent :items-props="listDataProps"/>
      </p>
    </div>
  </div>
</template>

<script>
import ListComponent from '@/components/HomeComponents/ListComponent.vue';

export default {
  name: 'TwoColumnsGrid',
  components: { ListComponent },
  props: {
    listDataProps: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>

</style>
