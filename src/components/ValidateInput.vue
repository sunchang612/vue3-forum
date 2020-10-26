<template>
  <div class="validate-input-container pb-3">
    <input
      :class="{'is-invalid': inputRef.error}"
      type="email" v-model="inputRef.val"
      name="" id="" class="form-control"
      @blur="validateInput"
      @input="udpateValue">
    <span v-if="inputRef.error" class="invalid-feedback">{{inputRef.message}}</span>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, reactive } from 'vue'
const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

interface RuleProp {
  type: 'required' | 'email';
  message: string;
  validator?: () => boolean;
}
export type RulesProp = RuleProp[]

export default defineComponent({
  props: {
    rules: Array as PropType<RulesProp>,
    modelValue: String
  },
  setup (props, context) {
    console.log('modelVaule ---->', props.modelValue)
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
            default:
              break
          }
          return passed
        })
        inputRef.error = !allPassed
        return allPassed
      }
    }

    const udpateValue = (e: KeyboardEvent) => {
      const targetValue = (e.target as HTMLInputElement).value
      inputRef.val = targetValue
      context.emit('update:modelValue', targetValue)
    }

    return {
      inputRef,
      validateInput,
      udpateValue
    }
  }
})
</script>
