<template>
  <div>
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
import { defineComponent, ref } from 'vue'
import mitt from 'mitt'

import ValidateInput, { RulesProp } from '../components/ValidateInput.vue'
import ValidateForm from '../components/ValidateForm.vue'
export default defineComponent({
  components: {
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
      emailRules,
      modelValue,
      passValue,
      passRules,
      onFormSubmit
    }
  }
})
</script>
