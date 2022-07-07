<template>
    <div class="container">
        <ul class="list-group" v-for="currency in currencies">
            <li class="list-group-item p-1 mb-1 w-50 d-block m-auto" :key="currency.ID">
                <span>{{ currency.Name }}({{ currency.CharCode }}) = {{ currency.Value.toFixed(2) }}Р</span>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'CurrenciesList',
    computed: {
        ...mapState({
            currencies: state => state.currencies.currencies,
        })
    }
}
</script>

<style scoped lang="scss">
</style>
