<script lang="ts" setup>
import { reactive } from 'vue'

defineProps(['user','users'])

const posts = reactive<{ id: number; userId: number; title: string; body: string }[]>([])

const getPosts = async (): Promise<void> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await response.json()

  // check if user has posts
  const userPosts: { id: number; userId: number; title: string; body: string }[] = data.filter(
    (post: any) => post.userId === 1
  )

  posts.push(...userPosts)
  console.log(posts)

  
}

getPosts()

//shuffle users
const copy = () => {
  navigator.clipboard.writeText('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
}
</script>

<template>
  <article
    class="bg-white w-100 mt-4 rounded-lg p-5 shadow-lg"
    v-for="post in posts"
    :key="post.id"
  >
    <div class="flex gap-5 mb-5">
      <img :src="user.picture.large" :alt="user.name.first" class="rounded-lg w-[60px] h-[60px]" />

      <div>
        <h2 class="text-xl text-slate-700 mt-2">{{ user.name.first }}</h2>
        <p class="text-slate-400">{{ Math.ceil(Math.random() * 10) }} hours ago</p>
      </div>
    </div>
    <div class="mb-4">
      <h3 class="font-bold text-lg mb-4 text-slate-800">{{ post.title }}</h3>
      <p class="text-slate-700">{{ post.body }}</p>
    </div>

    <div class="flex gap-3">
      <font-awesome-icon icon="share-nodes" class="text-blue-500 text-2xl" />
      <span class="text-blue-500 font-bold">{{
        Math.ceil(Math.random() * 10000).toLocaleString()
      }}</span>
      <span class="text-gray-500">Shares on social medias</span>
    </div>

    <hr class="my-5" />

    <div class="flex gap-3">
        <img v-for="user in ([...users].sort(() => 0.5 - Math.random())).slice(0,3)" :key="user.id" :src="user.picture.large" :alt="user.name.first" class="rounded-lg w-[40px] h-[40px]" />
        <div @click="copy" class="text-center p-2 rounded-lg text-slate-700 bg-gray-200 w-[40px] h-[40px]">+{{ Math.floor(Math.random() * 10) }}</div>
        
    </div>

  </article>
</template>
