<template>
  <ul>
    <li
      v-for="(shopCartFunko, index) in shopCartFunkos"
      :key="index"
      :id="`li-shop-item-${index}`"
      class="card mb-3"
    >
      <div class="row no-gutters">
        <div class="col-md-4">
          <img :src="shopCartFunko?.image_url" class="img-fluid" />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="funko-funko-tittle">{{ shopCartFunko?.title }}</h5>
            <p class="card-text">{{ shopCartFunko?.price }}</p>
            <p class="card-text">{{ shopCartFunko?.cantidad }}</p>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "ShopItemFunkoCart",
  props: {
    shopCartFunkos: {
      type: Array,
      default: [],
    },
  },
};
</script>

<style lang="scss" scoped>
ul {
  margin: 0;
  padding: 0;
  overflow: auto;
  height: 100%;
  li {
    border: 0;
  }
}
</style>
