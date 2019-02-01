<template>
 <div class="order">
   <form class="form" @submit.prevent="pay">
      <h3 class='subtitle'>{{ title }}</h3>
      <div class="field">
        <label>First Name</label>
        <div class="control">
          <input class="input" type="text" v-model="firstName">
        </div> 
      </div>
      <div class="field">
        <label>Beer 1</label>
        <div class="control">
          <input class="input" type="text" v-model="beer1">
        </div> 
      </div>
      <div class="field">
        <label>Beer 2</label>
          <div class="control">
            <input class="input" type="text" v-model="beer2">
          </div> 
      </div>
      <div class="field">
        <div class="control">
          <button class="button is-success">Pay</button>
        </div> 
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "order",
  data () {
      return {
        firstName: '',
        beer1: '',
        beer2: ''
      }
    },
  methods: {
      pay() {
        this.$emit('pay-order', {firstName: this.firstName, beer1: this.beer1, beer2: this.beer2})
        this.firstName = '';
        this.beer1 = '';
        this.beer2 = '';
      }
    }
};
</script>