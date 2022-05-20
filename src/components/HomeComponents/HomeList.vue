<template>
  <section>
    <span
      v-if="isBigScreen"
      key="column-grid"
    >
      <TwoColumnsGrid
        :first-list-data-props="listDataFirstHalf"
        :second-list-data-props="listDataSecondHalf"
      />
    </span>
    <span
      v-else
      key="column-grid"
    >
      <OneColumnGrid :list-data-props="listData"/>
    </span>
  </section>
</template>

<script>
import OneColumnGrid from '@/components/HomeComponents/OneColumnGrid.vue';
import TwoColumnsGrid from '@/components/HomeComponents/TwoColumnsGrid.vue';

export default {
  name: 'HomeList',
  components: {
    OneColumnGrid,
    TwoColumnsGrid,
  },
  data() {
    return {
      requiredScreenSize: 720,
    };
  },
  computed: {
    listData() {
      return this.$store.state.listModule.listData;
    },
    listDataFirstHalf() {
      return this.$store.state.listModule.listDataFirstHalf;
    },
    listDataSecondHalf() {
      return this.$store.state.listModule.listDataSecondHalf;
    },
    isBigScreen() {
      return window.screen.width > this.requiredScreenSize;
    },
  },
  mounted() {
    this.fetchList();
  },
  methods: {
    fetchList() {
      this.$store.dispatch('listModule/FETCH_LIST_DATA');
    },
  },
};
</script>

<style scoped>

</style>
