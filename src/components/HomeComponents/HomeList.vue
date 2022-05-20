<template>
  <section>
    isBigScreen: {{ isBigScreen }}
    <span v-if="isBigScreen">
      <TwoColumnsGrid
        :first-list-data-props="firstHalf"
        :secound-list-data-props="secondHalf"
      />
    </span>
    <span v-else>
      <OneColumnGrid :list-data-props="listData"/>
    </span>
  </section>

</template>

<script>
import OneColumnGrid from './OneColumnGrid.vue';
import TwoColumnsGrid from './TwoColumnsGrid.vue';

export default {
  name: 'HomeList',
  components: {
    OneColumnGrid,
    TwoColumnsGrid,
  },
  data() {
    return {
      // firstHalf: [],
      // secondHalf: [],
    };
  },
  computed: {
    listData() {
      return this.$store.state.listModule.listData;
    },
    dummyListData() {
      return JSON.parse(JSON.stringify(this.listData));
    },
    isBigScreen() {
      return window.screen.width > 720;
    },
    middleIndex() {
      // const dummy = JSON.parse(JSON.stringify(this.listData));
      return Math.ceil(this.dummyListData.length / 2);
    },
  /*
    firstHalf() {
      return this.dummyListData.splice(0, this.middleIndex);
    },
    secondHalf() {
      return this.dummyListData.splice(-this.middleIndex);
    },
    */
  },
  /*
  watch: {
    listData(value) {
      if (value) {
        this.divideListData();
      }
    },
  },
  */
  mounted() {
    this.fetchList();
    console.log('window.innerWidth: ', window.innerWidth);
    console.log('window.screen.width: ', window.screen.width);
  },
  methods: {
    fetchList() {
      this.$store.dispatch('listModule/FETCH_LIST_DATA');
    },
    divideListData() {
      const dummy = JSON.parse(JSON.stringify(this.listData));
      const middleIndex = Math.ceil(dummy.length / 2);
      this.firstHalf = dummy.splice(0, middleIndex);
      this.secondHalf = dummy.splice(-middleIndex);
    },
  },
};
</script>

<style scoped>

</style>
