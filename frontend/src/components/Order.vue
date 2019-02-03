<template>
 <div class="order">
   <form class="form" @submit.prevent="pay">
      <div class="field">
        <label>Nombre</label>
        <div class="control">
          <input class="input" type="text" v-model="firstName">
        </div> 
      </div>
      <item v-for="item in availableItems"
       :key="item.name"
       :item="item"
       :payed="payed"
       @item-added="itemAdded"/>
      <div class="field" style="margin-top:50px">
        <div class="control">
          <button class="button is-success">Pagar&nbsp; ${{totalPrice}}</button>
        </div> 
      </div>
    </form>
    <div v-show="payed" class="notification is-info" style="margin-top:50px">
        La orden fue pagada! Retirala con este identificador: <strong>{{firstNameCopy}}&nbsp;{{randomId}}</strong>
    </div>
  </div>
</template>

<script>
import Item from "./Item"

export default {
  name: "order",
  components: {
      Item
  },
  data () {
      return {
        firstName: '',
        firstNameCopy: '',   //Copy to show in the alert
        availableItems: [],
        addedItems: [],
        totalPrice: 0,
        payed: false,
        randomId: 0,
      }
    },
  methods: {
      pay() {
        this.randomId = Math.floor(Math.random() * 9999);
        this.$emit('pay-order', {firstName: this.firstName, addedItems: this.addedItems, randomId: this.randomId});
        this.addedItems = [];
        this.totalPrice = 0;
        this.firstNameCopy = this.firstName;
        this.firstName = '';
        this.payed = true;
      },
      itemAdded(item){
        this.payed = false;
        this.addedItems.push(item);
        this.totalPrice = this.totalPrice + item.price
      }
  },
  beforeMount () {  //TODO: get this from database
    this.availableItems = [
      {
        'name' : 'Blonde Ale',
        'price': 150
      },
      {
        'name' : 'Red Ale',
        'price': 180
      },
      {
        'name' : 'Ipa',
        'price': 170
      }
    ] 
  }
};
</script>