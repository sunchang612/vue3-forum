<template>
  <div class="home">
    这里是 home 页面
    <column-list :list="testData"></column-list>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import ColumnList from '../components/ColumnList.vue'
import { testData } from '../testData'
export default defineComponent({
  components: {
    ColumnList
  },

  setup () {
    return {
      testData
    }
  }
})
</script>
