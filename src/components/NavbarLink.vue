<script lang="ts" setup>
import { ref,  reactive, onMounted } from 'vue'

type User =  {
    name: string,
    age: number,
    email: string,
    phone: string,
    file: string,
}

const search = ref<HTMLInputElement | null>(null)
const showCancel = ref<boolean>(false)
const users = reactive<User[]>([]);

const isTyping = (): void => {
    
  if (search.value?.value) {
    showCancel.value = true
  } else {
    showCancel.value = false
  }
}

const cancelSearch = (): void => {
  search.value!.value = ''
  search.value!.blur()
  showCancel.value = false
}


const getUsers = async (): Promise<void> => {
    const response = await fetch('https://randomuser.me/api/?results=10')
    const data = await response.json()
    users.push(...data.results)
}


onMounted(() => {
    getUsers()
})
</script>

<template>
  <nav class="relative">
    <font-awesome-icon
      icon="search"
      class="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400"
    />
    <font-awesome-icon
      icon="circle-xmark"
      class="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400"
      v-show="showCancel"
      @click="cancelSearch"
    />
    <input
      type="text"
      class="rounded-lg p-2 w-full pl-10 outline-none text-gray-800"
      ref="search"
      placeholder="Search"
      @input="isTyping"
    />
  </nav>
</template>
