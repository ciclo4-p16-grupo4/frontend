import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import { createApolloProvider } from '@vue/apollo-option'
import store from './store'
import { vfmPlugin } from 'vue-final-modal'
import { setContext } from 'apollo-link-context'

const httpLink = createHttpLink({
    uri: process.env.VUE_APP_API,
})

const authLink = setContext((_, {headers}) => {
    const token = _.variables.reqAuth?localStorage.getItem('token_access'):null
    return {
        headers: {
            ...headers,
            authorization: token ? token: "",
        }
    }
});
const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache({addTypename: false})
})

const apolloProvider = new createApolloProvider({
    defaultClient: apolloClient
})
createApp(App).use(store).use(router).use(vfmPlugin).use(apolloProvider).mount('#app')