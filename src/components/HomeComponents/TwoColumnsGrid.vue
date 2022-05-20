<template>
<section>
  <div class="row">
    <div class="column" style="background-color:#aaa;">
      <h2>Column 1</h2>
      <p>
        <ListComponent :items-props="firstListDataProps" />
      </p>
    </div>
    <div class="column" style="background-color:#bbb;">
      <h2>Column 2</h2>
      <p>
        <ListComponent :items-props="secondListDataProps" />
      </p>
    </div>
  </div>
  <pre>
<!--    {{ listDataProps }}-->
  </pre>
</section>
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
  data() {
    return {
      firstHalf: [],
      secondHalf: [],
    };
  },
  mounted() {
    this.divideListData();
  },
  methods: {
    divideListData() {
      const dummy = JSON.parse(JSON.stringify(this.listDataProps));
      const middleIndex = Math.ceil(dummy.length / 2);
      this.firstHalf = dummy.splice(0, middleIndex);
      this.secondHalf = dummy.splice(-middleIndex);
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
    width: 50%;
    padding: 10px;
    height: 300px; /* Should be removed. Only for demonstration */
  }

  /* Clear floats after the columns */
  .row:after {
    content: "";
    display: table;
    clear: both;
  }
</style>
