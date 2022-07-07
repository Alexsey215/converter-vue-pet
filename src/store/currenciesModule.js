export const currenciesModule = {
    state: () => ({
        currencies: [],
        isLoading: false,
        error: "",
    }),
    getters: {
    },
    mutations: {
        currenciesFetching(state) {
            state.isLoading = true;
        },
        currenciesFetchingSuccess(state, currencies) {
            state.isLoading = false;
            state.error = "";
            state.currencies = currencies;
        },
        currenciesFetchingError(state, currencies) {
            state.isLoading = false;
            state.error = currencies;
        },
    },
    actions: {
        async fetchCurrencies({ commit }) {
            try {
                commit('currenciesFetching');
                const response = await fetch("https://www.cbr-xml-daily.ru/daily_json.js")
                const result = await response.json();
                const currencies = Object.values(result.Valute)
                commit('currenciesFetchingSuccess', currencies);
            } catch (e) {
                commit('currenciesFetchingError', e);
                console.log(e);
            }
        }
    },
    namespaced: true
}