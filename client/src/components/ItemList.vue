<template lang="html">
  <div class="row">
    <div class="col-xs-3 col-sm-12">
      <div class="card">
        <a class="img-card" href="http://www.fostrap.com/">
          <img src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"/>
        </a>
        <br />
        <div class="card-content">
          <h4 class="card-title">
            <a href="http://www.fostrap.com/">
              BMW X5 SERIES
            </a>
          </h4>
          <div class="">
            New Delhi, 2005, Petrol
          </div>
        </div>
        <div class="card-read-more">
          <a class="btn btn-link btn-block" href="http://www.fostrap.com/">
            BID NOW
          </a>
        </div>
      </div>
    </div>

    <div class="col-md-3 panel panel-primary" v-for="item in items">
      <div class="panel-heading">
        <h3 class="panel-title">{{ item.name }}</h3>
      </div>
      <div class="panel-body">
        Price: {{ item.price }}<br>
        Stock: {{ item.stock }}
      </div>
    </div>

  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState([
      'items'
    ])
  },
  methods: {
    ...mapActions([
      'getAllItems'
    ])
  },
  created () {
    this.getAllItems()
  }
}
</script>

<style lang="css">
</style>
