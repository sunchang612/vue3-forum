<template>
  <div class="container">
    <global-header :user="currentUser"></global-header>
    <validate-input :rules="emailRules" v-model="modelValue"></validate-input>
    <div>{{modelValue}}</div>
    <!-- <column-list :list="list"></column-list> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList, { ColumnProps } from './components/ColumnList.vue'
import GlobalHeader, { UserProps } from './components/GlobalHeader.vue'
import ValidateInput, { RulesProp } from './components/ValidateInput.vue'

const userData: UserProps = {
  isLogin: true,
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
const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

export default defineComponent({
  name: 'App',
  components: {
    // ColumnList,
    GlobalHeader,
    ValidateInput
  },
  setup () {
    const emailRules: RulesProp = [
      { type: 'required', message: '邮箱不能为空' },
      { type: 'email', message: '请输入正确的邮箱格式' }
    ]
    const modelValue = ref('achang')
    return {
      list: testData,
      currentUser: userData,
      emailRules,
      modelValue
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
