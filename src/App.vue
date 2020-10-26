<template>
  <div class="container">
    <global-header :user="currentUser"></global-header>
    <validate-form @form-submit="onFormSubmit">
      <div class="mb-3">
        <label class="form-label">邮箱地址</label>
        <validate-input
          :rules="emailRules"
          v-model="modelValue"
          placeholder="Hello"
          type="text"
        ></validate-input>
      </div>
      <div class="mb-3">
        <label class="form-label">密码</label>
        <validate-input
          :rules="passRules"
          v-model="passValue"
          placeholder="请输入你的密码"
          type="password"
        ></validate-input>
      </div>
      <template #submit>
        <button type="submit" class="btn btn-primary btn-block btn-large">登录</button>
      </template>
    </validate-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import mitt from 'mitt'
import ColumnList, { ColumnProps } from './components/ColumnList.vue'
import GlobalHeader, { UserProps } from './components/GlobalHeader.vue'
import ValidateInput, { RulesProp } from './components/ValidateInput.vue'
import ValidateForm from './components/ValidateForm.vue'

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

export default defineComponent({
  name: 'App',
  components: {
    // ColumnList,
    GlobalHeader,
    ValidateInput,
    ValidateForm
  },
  setup () {
    const inputRef = ref()

    const emailRules: RulesProp = [
      { type: 'required', message: '邮箱不能为空' },
      { type: 'email', message: '请输入正确的邮箱格式' }
    ]
    const passRules: RulesProp = [
      { type: 'required', message: '密码不能为空' },
      { type: 'password', message: '长度不能小于 6' }
    ]

    const modelValue = ref('achang')
    const passValue = ref('')

    const onFormSubmit = (res: boolean) => {
      console.log('res --->', res)
    }

    return {
      list: testData,
      currentUser: userData,
      emailRules,
      modelValue,
      passValue,
      passRules,
      onFormSubmit
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
