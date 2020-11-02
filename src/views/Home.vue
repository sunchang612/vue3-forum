<template>
  <div class="home">
    这里是 home 页面
    <column-list :list="testData"></column-list>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import { GlobalDataProps } from '../store'
import ColumnList from '../components/ColumnList.vue'

export default defineComponent({
  components: {
    ColumnList
  },

  setup () {
    const store = useStore<GlobalDataProps>()
    const list = computed(() => store.state.columns)
    return {
      testData: list
    }
  }
})
</script>
