<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>


<script>
  import Customer from "./components/Customer";

  export default {
    name: "app",
    components: {
      Customer
    }
  };
</script>