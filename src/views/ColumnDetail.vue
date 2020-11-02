<template>
  <div class="column-detail-page w-75 mx-auto">
    <div class="column-info row mb-4 border-bottom pb-4 align-items-center">
      <div class="col-9">
        <h4>{{column.title}}</h4>
        <p class="text-muted">{{column.content}}</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { GlobalDataProps } from '../store'

export default defineComponent({
  setup () {
    const route = useRoute()
    const currentId = route.params.id
    const store = useStore<GlobalDataProps>()
    const column = computed(() => store.getters.getPostsByCid(Number(currentId)))

    console.log(currentId, column)
    return {
      column
    }
  }
})
</script>
