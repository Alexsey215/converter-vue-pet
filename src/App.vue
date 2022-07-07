<template>
  <span v-if="isLoading">Loading...</span>
  <div v-else>
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import { mapActions, mapState } from 'vuex';

export default {
  components: {
    Navbar
  },
  methods: {
    ...mapActions({
      fetchCurrencies: 'currencies/fetchCurrencies'
    })
  },
  computed: {
    ...mapState({
      currencies: state => state.currencies.currencies,
      isLoading: state => state.currencies.isLoading
    })
  },
  mounted() {
    this.fetchCurrencies()
  },
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
