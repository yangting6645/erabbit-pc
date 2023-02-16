import { createStore } from 'vuex'

import cart from './modules/cart'
import user from './modules/user'
import category from './modules/category'
import creatPersistedState from 'vuex-persistedstate'

export default createStore({
  // 分模块
  modules: {
    cart,
    user,
    category
  },
  // 配置插件
  plugins: [
    // 默认存储在localStorage
    creatPersistedState({
      // 本地存储名字
      key: 'erabbit-pc-vue-project',
      // 指定需要存储的模块
      paths: ['user', 'cart']
    })
  ]
})
