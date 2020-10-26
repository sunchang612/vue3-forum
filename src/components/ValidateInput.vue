<template>
  <div class="validate-input-container pb-3">
    <input
      v-bind="$attrs"
      :class="{'is-invalid': inputRef.error}"
      v-model="inputRef.val"
      name="" id="" class="form-control"
      @blur="validateInput"
      @input="udpateValue"
    >
    <span v-if="inputRef.error" class="invalid-feedback">{{inputRef.message}}</span>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, PropType, reactive } from 'vue'
import { emitter } from './ValidateForm.vue'

const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

interface RuleProp {
  type: 'required' | 'email' | 'password';
  message: string;
  validator?: () => boolean;
}
export type RulesProp = RuleProp[]

export default defineComponent({
  props: {
    rules: Array as PropType<RulesProp>,
    modelValue: String
  },
  inheritAttrs: false, // 不允许继承属性
  setup (props, context) {
    const inputRef = reactive({
      val: props.modelValue || '',
      error: false,
      message: ''
    })

    const validateInput = () => {
      // 判断是否所有验证都通过了
      if (props.rules) {
        const allPassed = props.rules.every(r => {
          let passed = true
          inputRef.message = r.message
          switch (r.type) {
            case 'required':
              passed = inputRef.val.trim() !== ''
              break
            case 'email':
              passed = emailReg.test(inputRef.val)
              break
            case 'password':
              passed = inputRef.val.trim().length > 6
              break
            default:
              break
          }
          return passed
        })
        inputRef.error = !allPassed
        return allPassed
      }
      return true
    }

    const udpateValue = (e: KeyboardEvent) => {
      const targetValue = (e.target as HTMLInputElement).value
      inputRef.val = targetValue
      context.emit('update:modelValue', targetValue)
    }

    // 发送检查 input 事件
    onMounted(() => {
      emitter.emit('form-check-created', validateInput)
    })

    return {
      inputRef,
      validateInput,
      udpateValue
    }
  }
})
</script>
