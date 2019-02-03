<template>
  <div id="expandedclient">
	<form class="form" @submit.prevent="save">
      <h3 class='subtitle'>{{ title }}</h3>
      <div class="field">
         <p v-for="item in addedItems">
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
        addedItems: this.client ? this.client.addedItems : '',
        randomId: this.client ? this.client.randomId : '1111'
      }
    },
    methods: {
      save() {
        this.$emit('save-client', { id: this.id, firstName: this.firstName, addedItems: this.addedItems, randomId: this.randomId })
        if (!this.id) {
          this.firstName = ''
          this.addedItems = ''
          this.randomId = ''
        }
      }
    }
}   
</script>