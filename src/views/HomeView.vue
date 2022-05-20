<template>
  <section>
    <h1>Home view</h1>
    <home-list />
  </section>
</template>

<script>
import HomeList from '@/components/HomeComponents/HomeList.vue';

export default {
  name: 'HomeView',
  components: { HomeList },
};
</script>
