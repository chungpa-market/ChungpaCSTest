<template>
    <div class="share">
      <header class="body-header">
        <img src="../assets/res/buy 1.png" alt="" width="70px" height="70px" />나눠요
      </header>
      <section>
        <ItemComp></ItemComp>
        <ItemComp></ItemComp>
        <ItemComp></ItemComp>
        <ItemComp></ItemComp>
      </section>
    </div>
</template>

<script>
import ItemComp from '@/components/ItemComp.vue';

export default {
  name: 'ProductDetail',
  components: {
    ItemComp,
  },
};
</script>

<style>
.share .body-header {
  width: 205px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 70px 0 0 34.988px;
  font-weight: 800;
  font-size: 30px;
}

.share section {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>