<template>
  <div id="customer" class="container" style="width: unset; max-width: none">
    <section class="section" style="padding-bottom: 10px;">
      <h1 class="title">Realiza tu pedido aqui!</h1>
      </section>
    <section class="section" style="padding: 10px;">
      <div class="box">
        <Order title="Place your order" @pay-order="saveClient" />
      </div>
    </section>
  </div>
</template>


<script>
  import Order from "./Order";
  import axios from 'axios';
  import Url from "../main"

  export default {
    name: "customer",
    components: {
      Order
    },
    data() {
       return  {
          clients: [],
          backendURL: Url
       }
    },
    methods: {
      saveClient (client) {
        return axios.post(this.backendURL, client)
          .then((response) => {
        })
      }
    } 
  };
</script>