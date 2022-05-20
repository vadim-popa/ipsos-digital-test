<template>
  <div class="home">
    <h1>Home view</h1>
    <home-list />
  </div>
</template>

<script>
import HomeList from '@/components/HomeComponents/HomeList.vue';

export default {
  name: 'HomeView',
  components: { HomeList },
};
</script>
