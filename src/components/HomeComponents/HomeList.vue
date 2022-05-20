<template>
  <section>
    isBigScreen: {{ isBigScreen }}
    <div class="row">
      <div class="column" style="background-color:#aaa;">
        <h2>Column 1</h2>
        <p>Some text..</p>
      </div>
      <!--
      <div class="column" style="background-color:#bbb;">
        <h2>Column 2</h2>
        <p>Some text..</p>
      </div>
      -->
    </div>
    <div v-if="isBigScreen">
      <ul>
        <li v-for="listItem in listData" :key="listItem.id">
          {{ listItem.title }}
        </li>
      </ul>
    </div>
    <pre>
      {{ listData }}
    </pre>
  </section>

</template>

<script>
export default {
  name: 'HomeList',
  data() {
    return {
      firstHalf: [],
      secondHalf: [],
    };
  },
  computed: {
    listData() {
      return this.$store.state.listModule.listData;
    },
    isBigScreen() {
      return window.screen.width > 720;
    },
  },
  watch: {
    /*
    listData(value) {
      if (!value) return false;
      // this.divideListData();
    }
    */
  },
  mounted() {
    this.fetchList();
    console.log('window.innerWidth: ', window.innerWidth);
    console.log('window.screen.width: ', window.screen.width);
  },
  methods: {
    fetchList() {
      this.$store.dispatch('listModule/FETCH_LIST_DATA');
    },
    /*
    divideListData() {
      if (this.isBigScreen) {
        return false;
      }
    },
    */
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
