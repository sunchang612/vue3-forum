import { createStore } from 'vuex'
import { ColumnProps, PostProps, testPosts } from './testData'
import axios from './axios'

interface UserProps {
  isLogin: boolean;
  name?: string;
  columns?: string;
}

export interface GlobalDataProps {
  columns: ColumnProps[];
  posts: PostProps[];
  user: UserProps;
  showLoader: boolean;
}

const store = createStore<GlobalDataProps>({
  state: {
    columns: [],
    posts: testPosts,
    user: { isLogin: false },
    showLoader: false
  },

  mutations: {
    login (state) {
      state.user = { ...state.user, isLogin: true, name: 'achang' }
    },

    getColumns (state, newData) {
      state.columns = newData
    },

    setLoading (state, val) {
      state.showLoader = val
    }
  },

  actions: {
    getColumns (contenxt) {
      axios.get('/api/columns')
        .then(({ data }) => {
          contenxt.commit('getColumns', data)
        })
    }
  },

  getters: {
    getPostsByCid: (state) => (id: number) => {
      return state.posts.filter(c => c.id === id)[0]
    }
  }
})

export default store
