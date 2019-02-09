<template>
 <div class="order">
   <form class="form" @submit.prevent="pay">
      <div class="field" style="margin-bottom: 30px">
        <label>Nombre:</label>
        <div class="control" style="margin-top: 10px">
          <input class="input" type="text" v-model="firstName">
        </div> 
      </div>
      <item v-for="item in availableItems"
       :key="item.name"
       :item="item"
       :payed="payed"
       @item-added="itemAdded"
       @item-removed="itemRemoved"/>
      <div class="field" style="margin-top:25px">
        <div class="control">
          <button class="button is-success">Pagar&nbsp; ${{totalPrice}}</button>
        </div> 
      </div>
    </form>
    <div class="modal is-active" v-show="payed">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div v-show="payed" class="notification is-info">
          La orden fue pagada! Retirala con este identificador: <strong>{{firstNameCopy}}&nbsp;{{randomId}}</strong>
        </div>
      </div>
      <button class="modal-close is-large" aria-label="close" @click="payed = false"></button>
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
      },
      itemRemoved(item){
        this.payed = false;
        var index = this.addedItems.indexOf(5);
        if (index > -1) {
          this.addedItems.splice(index, 1);
        }
        this.totalPrice = this.totalPrice - item.price
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