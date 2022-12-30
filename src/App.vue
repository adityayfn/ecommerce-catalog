<template>
  <div id="app">
    <product-display></product-display>
  </div>
</template>

<script>
import ProductDisplay from "./components/ProductDisplay.vue"

export default {
  name: "App",
  data: function () {
    return {
      products: [],
    }
  },
  components: {
    ProductDisplay,
  },
}
</script>

<style></style>
