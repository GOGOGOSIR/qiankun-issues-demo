<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import registerMicroAppsByQiankun from "@/qiankun/index";

export default defineComponent({
  setup() {
    onMounted(() => {
      registerMicroAppsByQiankun(
        {
          prefetch: false,
        },
        {
          beforeLoad: async () => {
            console.log("主应用 beforeLoad");
          },
          beforeMount: async () => {
            console.log("主应用 beforeMount");
          },
          beforeUnmount: async () => {
            console.log("主应用 beforeUnmount");
          },
        }
      );
    });
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
