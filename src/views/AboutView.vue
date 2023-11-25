<script lang="ts" setup>
import { reactive, ref, watch } from 'vue'

let counter = reactive<{ count: number }>({ count: 5 })

let button = ref<HTMLButtonElement | null>(null)

watch(
  () => counter.count,
  (newValue, oldValue) => {
    console.log('counter changed from', oldValue, 'to', newValue)
  }
)

</script>

<template>
  <main>
    <p class="py-3 px-1">this is the about page</p>
    <button ref="button"
      class="bg-red-200 px-3 py-2 rounded-lg min-w-[70px] active:bg-red-300 transition-all"
      @mousedown="counter.count++"
    >
      {{ counter.count }}
    </button>
  </main>
</template>
