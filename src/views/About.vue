<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import dummyModule from "@/store/modules/dummy";

export default {
  // 動態載入store
  created() {
    this.$store.registerModule("dummy", dummyModule);
  }
};
</script>
