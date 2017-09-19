<template lang="html">
  <div>
    <NavBar></NavBar>
    <div class="container">
      <ItemList></ItemList>
    </div>
  </div>
</template>

<script>
import ItemList from '@/components/ItemList'
import NavBar from '@/components/NavBar'
export default {
  components: {
    ItemList,
    NavBar
  }
}
</script>

<style lang="css">
</style>
