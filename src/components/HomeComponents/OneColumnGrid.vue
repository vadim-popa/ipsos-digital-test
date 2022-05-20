<template>
  <div class="row">
    <div class="column" style="background-color:#aaa;">
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
  * {
    box-sizing: border-box;
  }

  /* Create two equal columns that floats next to each other */
  .column {
    float: left;
    width: 100%;
    padding: 10px;
  }

  /* Clear floats after the columns */
  .row:after {
    content: "";
    display: table;
    clear: both;
  }
</style>
