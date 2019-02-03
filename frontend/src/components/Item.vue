<template>
  <div id=item class="card-text-center">
    <header class="card-header">
      <p class="card-header-title">
       {{ name }}
      </p>
      <p @click="showDetail = !showDetail" class="card-header-title">
       $ {{ unitPrice }}
      </p>
      <p class="card-header-icon">
        {{ ammount }}
      </p>
      <a class="card-header-icon" @click.stop="add()">
        <span class="icon">
          <i class="fa fa-plus"></i>
        </span>
      </a>
    </header>
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
      }
    }
};
</script>