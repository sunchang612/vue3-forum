<template>
  <div class="row">
    <div v-for="column in columnList" :key="column.id" class="col-4 mb-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body text-center">
          <img class="rounded-circle border border-light my-3" style="height: 200px" :src="column.avatar" alt="">
          <h5 class="card-title">{{column.title}}</h5>
          <p class="card-text text-left">{{column.description}}</p>
          <a href="#" class="btn btn-outline-primary">进入专栏</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'

// 类型断言
// 好处就是后面写代码时，可以自动补全
export interface ColumnProps {
  id: number;
  title: string;
  avatar: string;
  description: string;
}

export default defineComponent({
  name: 'ColumnList',
  props: {
    list: {
      type: Array as PropType<ColumnProps[]>,
      required: true
    }
  },
  setup (props) {
    // 添加默认图片
    const columnList = computed(() => {
      return props.list.map(c => {
        if (!c.avatar) {
          c.avatar = require('@/assets/logo.png')
        }
        return c
      })
    })
    return {
      columnList
    }
  }
})
</script>
