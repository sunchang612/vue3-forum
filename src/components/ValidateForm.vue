<template>
  <form class="validate-form-container">
    <slot name="default"></slot>
    <div class="submit-area" @click.prevent="submitForm">
      <slot name="submit">
        <button type="submit" class="btn btn-primary">提交</button>
      </slot>
    </div>
  </form>
</template>
<script lang="ts">
import { defineComponent, onUnmounted } from 'vue'
import mitt from 'mitt'
type ValidateFun = () => boolean
export const emitter = mitt()
export default defineComponent({
  name: 'ValidateForm',
  emits: ['form-submit'],
  setup (props, context) {
    const funArr: ValidateFun[] = []
    const submitForm = () => {
      // 点击提交时，检查 input 的规则是否为 true
      // 分别执行传入的 validateInput 函数，检查是否满足规则
      const res = funArr.map(f => f()).every(r => r)
      context.emit('form-submit', res)
    }
    const callback = (fun?: ValidateFun) => {
      if (fun) {
        funArr.push(fun)
      }
    }
    // 接收事件，并存入到 funArr 数组中
    emitter.on('form-check-created', callback)
    onUnmounted(() => {
      emitter.off('form-check-created', callback)
    })
    return {
      submitForm
    }
  }
})
</script>
