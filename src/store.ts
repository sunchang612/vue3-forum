import { createStore } from 'vuex'
import { ColumnProps, PostProps, testData, testPosts } from './testData'

interface UserProps {
  isLogin: boolean;
  name?: string;
  columns?: string;
}

export interface GlobalDataProps {
  columns: ColumnProps[];
  posts: PostProps[];
  user: UserProps;
}

const store = createStore<GlobalDataProps>({
  state: {
    columns: testData,
    posts: testPosts,
    user: { isLogin: false }
  },

  mutations: {
    login (state) {
      state.user = { ...state.user, isLogin: true, name: 'achang' }
    }
  },

  getters: {
    getPostsByCid: (state) => (id: number) => {
      console.log('id -------->', state.columns.filter(c => c.id === id))
      return state.posts.filter(c => c.id === id)[0]
    }
  }
})

export default store
