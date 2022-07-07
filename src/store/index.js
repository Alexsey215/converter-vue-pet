import { createStore } from 'vuex'
import { currenciesModule } from '@/store/currenciesModule'

export default createStore({

  modules: {
    currencies: currenciesModule
  }
})

