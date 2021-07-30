<template>
  <app-header />

  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>

  <!-- <router-view /> -->
  <app-player />

  <auth-modal />
</template>
<script>
import AppHeader from "@/components/Header";
import AuthModal from "@/components/Auth";
import AppPlayer from "@/components/Player";

export default {
  name: "App",
  components: {
    AppHeader,
    AuthModal,
    AppPlayer
  },
  created() {
    this.$store.dispatch("init_login");
  }
};
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
