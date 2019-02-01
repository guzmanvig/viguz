<template>
  <div id="expandedclient">
	<form class="form" @submit.prevent="save">
      <h3 class='subtitle'>{{ title }}</h3>
      <div class="field">
         <p v-for="item in order">
              {{ item }}
         </p>
      </div>
    </form>
  </div>
</template>


<script>
export default {
  name: "expandedclient",
  props: ['client', 'title'],
    data () {
      return {
        id: this.client ? this.client.id : null,
        firstName: this.client ? this.client.firstName : '',
        order: this.client ? this.client.order : '',
        randomId: this.client ? this.client.randomId : '1111'
      }
    },
    methods: {
      save() {
        this.$emit('save-client', { id: this.id, firstName: this.firstName, order: this.order, randomId: this.randomId })
        if (!this.id) {
          this.firstName = ''
          this.order = ''
          this.randomId = ''
        }
      }
    }
}   
</script>