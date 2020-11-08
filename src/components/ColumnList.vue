<template>
  <div class="row">
    <div v-for="column in columnList" :key="column.id" class="col-4 mb-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body text-center">
          <img class="rounded-circle border border-light my-3" style="height: 200px" :src="column.avatar" alt="">
          <h5 class="card-title">{{column.title}}</h5>
          <p class="card-text text-left">{{column.description}}</p>
          <router-link :to="`/details/${column.id}`" class="btn btn-outline-primary">进入专栏</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { ColumnProps } from '../testData'

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
        console.log('图片 ------->', c.avatar)
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
