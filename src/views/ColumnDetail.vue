<template>
  <div class="column-container">
    详情页面
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
export default defineComponent({
  setup () {
    const route = useRoute()
    const currentId = route.params.id
    console.log(currentId)
  }
})
</script>
