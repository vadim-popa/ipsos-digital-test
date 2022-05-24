<template>
  <section>
    <h1>Card Store</h1>
    <div v-for="product in products" :key="product.id">
      <h4>{{ product.title }}</h4>
      <button @click="addProduct(product.id)">Add</button>
      <button @click="deleteProduct(product.id)">Delete</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CartStore',
  data() {
    return {
      products: [
        {
          id: 1,
          title: 'One',
        },
        {
          id: 2,
          title: 'Two',
        },
        {
          id: 3,
          title: 'Three',
        },
        {
          id: 4,
          title: 'Four',
        },
      ],
    };
  },
  methods: {
    addProduct(id) {
      const selectedProductsSession = localStorage.getItem('selectedProducts');
      if (selectedProductsSession) {
        const clonedProducts = JSON.parse(selectedProductsSession);
        clonedProducts.push(id);
        localStorage.setItem('selectedProducts', JSON.stringify(clonedProducts));
      } else {
        const arr = [];
        arr.push(id);
        localStorage.setItem('selectedProducts', JSON.stringify(arr));
      }
    },
    deleteProduct(id) {
      console.log(id);
    },
  },
};
</script>

<style scoped>

</style>
