<template>
  <div id="customer" class="container">
    <section class="section section-container" style="padding-top: 24px; padding-bottom: 5px;">
      <h1 class="title">Montevideo Beer Company</h1>
      <h4 class="title">by Viguz</h4>
      </section>
    <section class="section section-container" style="padding-bottom: 10px;">
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