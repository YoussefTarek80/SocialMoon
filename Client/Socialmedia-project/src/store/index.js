import { createStore } from 'vuex';

import Auth from './modules/Auth/index.js';
import userdata from './modules/user/index.js'
const store = createStore({
  modules: {
    auth: Auth,
    user: userdata
  }
});

export default store;