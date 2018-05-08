import Vue from 'vue'
//import App from './components/App.vue'
import App from './new/App.vue'

import { createStore } from './store.js'

new Vue({
    el: '#app',

    store: createStore(),

    render: function (createEl) {
        return createEl(App)
    }
})
