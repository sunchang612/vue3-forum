<template>
  <div class="container">
    <global-header :user="currentUser"></global-header>
    <link rel="stylesheet" href="../src/assets/column.json">
    <router-view></router-view>
    <loading v-if="isLoading"></loading>
    <footer class="text-center py-4 text-secondary bg-light mt-6">
      <small>
        <ul class="list-inline mb-0">
          <a href="https://www.jianshu.com/u/639201a5d397" class="list-inline-item">© 2020 阿畅</a>
          <a href="https://sunchang612.github.io/blog/Vue/principle/" class="list-inline-item">Vue</a>
          <a href="https://sunchang612.github.io/blog/typescript/" class="list-inline-item">TypeScript</a>
          <a href="https://sunchang612.github.io/blog/" class="list-inline-item">博客</a>
          <a href="https://sunchang612.github.io/blog/react/combat/" class="list-inline-item">React</a>
        </ul>
      </small>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useStore } from 'vuex'
import GlobalHeader, { UserProps } from './components/GlobalHeader.vue'
import Loading from '@/components/Loading.vue'
import { GlobalDataProps } from './store'

const userData: UserProps = {
  isLogin: false,
  name: 'achang'
}

export default defineComponent({
  name: 'App',
  components: {
    GlobalHeader,
    Loading
  },
  setup () {
    const store = useStore<GlobalDataProps>()
    const isLoading = computed(() => store.state.showLoader)
    const currentUser = computed(() => {
      return store.state.user
    })
    // console.log('current user ------>', currentUser)
    return {
      currentUser,
      isLoading
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
