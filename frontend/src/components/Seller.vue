<template>
  <div id="seller">
    <section class="section section-container" style="padding-top: 24px; padding-bottom: 5px;">
    <h2 class="title">Clients</h2>
    <client v-for="client in clients"
       :key="client.name"
       :client="client"
       @save-client="onUpdateClient" 
       @delete-client="deleteClient" />
    </section>
  </div>
</template>

<script>
  import Client from "./Client";
  import axios from 'axios';
  import Url from "../main"

  export default {
    name: "seller",
    components: {
      Client
    },
    data() {
         return  {
            clients: [],
            backendURL: 'http://localhost:3000/api/clients'
         }
    },
    methods: {
      deleteClient (client) {
        return axios.delete(`${this.backendURL}/${client.id}`)
          .then((response) => {
            let copy = this.clients.slice()
            const idx = copy.findIndex((c) => c.id === response.data.id)
            copy.splice(idx, 1)
            this.clients = copy
        })
      }
    },
    beforeMount () {
      axios.get(this.backendURL)
        .then((response) => {
          this.clients = response.data
        })
    } 
  };
</script>