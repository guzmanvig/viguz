<template>
  <div class="columns is-mobile is-vcentered">
      <div class="column is-one-third has-text-left">
        <p class="subtitle is-6">
            <strong> {{ name }}</strong>
        </p>
      </div>
      <div class="column is-one-third has-text-centered">
        <p class="subtitle is-6">
            <strong> $ {{ unitPrice }}</strong>
        </p>
      </div>
      <div class="column is-one-third">
        <div class="columns is-mobile is-vcentered">
           <div class="column is-one-third has-text-right">
              <p class="subtitle is-6">
                <strong> {{ ammount }}</strong>
              </p>
          </div>
          <div class="column">
            <span class="icon" @click.stop="add()">
              <i class="fa fa-plus"></i>
            </span>
            <span class="icon" @click.stop="remove()">
              <i class="fa fa-minus"></i>
            </span>
          </div>
        </div> 
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "item",
  props: ['item', 'payed'],
  data () {
      return {
        name: this.item.name,
        unitPrice: this.item.price,
        ammount: 0
      }
  },
  watch: {
    payed: function () {
      if(this.payed)
        this.ammount = 0;
    }
  },
  methods: {
      add() {
        this.ammount = this.ammount + 1;
        this.$emit('item-added', this.item)
      },
      remove() {
        if (this.ammount != 0){
          this.ammount = this.ammount - 1;
          this.$emit('item-removed', this.item)
        }
      }
    }
};
</script>