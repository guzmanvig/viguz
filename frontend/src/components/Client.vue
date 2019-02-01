<template>
  <div id=cient class="card">
    <header class="card-header">
      <p @click="showDetail = !showDetail" class="card-header-title">
        {{ client.firstName }} {{ client.randomId }}
      </p>
      <a class="card-header-icon" @click.stop="deleteClient(client)">
        <span class="icon">
          <i class="fa fa-trash"></i>
        </span>
      </a>
    </header>
    <div v-show="showDetail" class="card-content">
      <expandedclient title="Details" :client="client" @save-client="onUpdateClient" />
    </div>
  </div>
</template>

<script>
import ExpandedClient from "./ExpandedClient";

export default {
  name: "client",
  props: ['client'],
    components: { 'expandedclient': ExpandedClient },
    data () {
      return {
        showDetail: false
      }
    },
    methods: {
      deleteClient (client) {
        this.$emit('delete-client', client)
      }
    }
}
</script>