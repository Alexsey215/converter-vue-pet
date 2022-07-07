<template>
  <div class="container">
    <div class="col-4">
      <form class="d-flex">
        <input v-model.number="valuesToConvert" class="form-control w-50" type="number" placeholder="1000">
        <select @change="(e) => selectedСurrency = e.target.value" class="form-select w-25" name="CharCode">
          <option :value="currency.CharCode" v-for="currency in currencies">{{ currency.CharCode }}</option>
        </select>
      </form>
      <div v-if="valuesToConvert !== null">{{ valuesToConvert }}</div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  name: 'CurrencyConverter',
  data: () => {
    return {
      selectedСurrency: 'AUD',
      valuesToConvert: null
    }
  },
  methods: {
  },
  computed: {
    ...mapState({
      currencies: state => state.currencies.currencies,
    })
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
