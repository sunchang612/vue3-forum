<template>
  <div class="container">
    <global-header :user="currentUser"></global-header>
    <router-view></router-view>
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
import { defineComponent, reactive, ref } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList, { ColumnProps } from './components/ColumnList.vue'
import GlobalHeader, { UserProps } from './components/GlobalHeader.vue'

const userData: UserProps = {
  isLogin: false,
  name: 'achang'
}

const testData: ColumnProps[] = [
  {
    id: 1,
    title: 'test1',
    description: '这是测试描述',
    avatar: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3615133320,1462308236&fm=26&gp=0.jpg'
  },
  {
    id: 2,
    title: 'test2',
    description: '这是测试描述2',
    avatar: ''
  }
]

export default defineComponent({
  name: 'App',
  components: {
    GlobalHeader
  },
  setup () {
    return {
      list: testData,
      currentUser: userData
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
