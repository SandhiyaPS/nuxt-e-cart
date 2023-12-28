<script setup>
// @ts-expect-error I couldn't find any types for vue 3 markdownit
import Markdown from "vue3-markdown-it";
const { message, user, myMessage } = defineProps(['message', "user", "myMessage"])
const options = {
  day: '2-digit',
  month: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
};
</script>
<template>
  <div class="chat d-flex my-2" :class="{
    'chat-end': myMessage,
    'chat-start': !myMessage,
  }">
    <div class="chat-image avatar">
      <div class="w-10 rounded-full">
        <img :src="user?.avatar" />
      </div>
    </div>
    <div class="chat-bubble py-0 px-2 mx-2 br-5 prose prose-sm  max-w-max w-full"
      :class="{ 
        'botError': message?.error,
        'bg-white dark:bg-gray-900': !message?.error,
        }"
    >
      <slot>
        <Markdown :source="message?.text" class="w-full" />
        <time v-if="message" class="text-xs opacity-50">{{
          new Intl.DateTimeFormat('en-IN', options).format(new Date(message?.createdAt) || new Date())
        }}</time>
      </slot>
    </div>
  </div>
</template>
<style scoped>
.chat {
  width: 90%;
}

.d-flex {
  display: flex;
  align-items: end;
}

.chat.chat-start {
  margin-right: auto;
}

.chat.chat-end {
  margin-left: auto;
  justify-content: end;
  flex-direction: row-reverse;
}

.br-5 {
  border-radius: 5px;
}

.botError {
  border: 1px solid red;
  background: rgba(239,68,68,.1);
}
</style>
