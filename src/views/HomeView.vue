<script lang="ts" setup>
import { reactive, onMounted } from 'vue'
import PostCard from '@/components/PostCard.vue'

const users = reactive<[]>([])

// get users
const getUsers = async (): Promise<void> => {
  const response = await fetch('https://randomuser.me/api/?results=20')
  const data = await response.json()
  users.push(...data.results)
  
}
// onMounted
onMounted(() => {
  getUsers()
})
</script>

<template>
  <main class="bg-white w-100 mt-4 rounded-lg p-5 shadow-lg">
    <h4 class="mb-5 text-gray-800">{{ users.length }} Recommended for you</h4>

    <div v-if="users.length === 0">
      <div v-for="i in 3" :key="i" class="flex items-center gap-6 mb-8 relative animate-pulse">
        <div class="rounded-lg w-[70px] h-[70px] bg-slate-200"></div>

        <div>
          <div class="h-4 w-20 bg-slate-200 rounded"></div>
          <div class="h-3 w-[200px] bg-slate-200 rounded mt-3"></div>
        </div>
      </div>
    </div>

    <div
      class="flex items-center gap-6 mb-8 relative"
      v-for="user in users.slice(0, 3)"
      :key="user.email"
    >
      <div class="relative">
        <span
          class="absolute h-[18px] w-[18px] -top-2 -right-2 border-white border-2 rounded-full bg-red-400"
        ></span>
        <img
          :src="user.picture.large"
          :alt="user.name.first"
          class="rounded-lg w-[70px] h-[70px]"
        />
      </div>
      <div class="flex-1">
        <h2 class="text-xl font-bold text-gray-900 mt-2">{{ user.name.first }}</h2>
        <p class="text-gray-400">{{ user.email }}</p>
      </div>
      <button>
        <font-awesome-icon icon="circle-plus" class="text-indigo-400 text-2xl" />
      </button>
    </div>

    <a href="#" class="link">See more</a>
  </main>

  <PostCard v-if="users[0]" :user="users[0]" :users="users"/>
</template>

<style scoped>
.link {
  color: #3b82f6;
}

.link:hover {
  text-decoration: underline;
}

.slide-enter-active {
  transition: all 0.3s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}

.slide-enter-to {
  opacity: 1;
  transform: translateX(0);
}

.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
