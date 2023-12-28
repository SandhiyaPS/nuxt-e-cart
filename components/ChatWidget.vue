<script setup>
import axios from "axios";
import { nanoid } from 'nanoid';
import { reactive } from 'vue'
import { useHeaderStore } from '../stores/headerStore';
const headerStore = useHeaderStore();
import { storeToRefs } from 'pinia';
const { chatMessages } = storeToRefs(headerStore);
const storeData = storeToRefs(headerStore);
const me = {
  id: "user",
  avatar: "/avatar.jpg",
  name: "You",
};
const bot = {
  id: "assistant",
  avatar: "/bot.jpg",
  name: "Botman",
};

const { emit } = defineEmits(['closeChat']);
const users = computed(() => [me, bot]);
const storedChateData = storeData.chatMessages.value
const inputData = Array.from(storedChateData).map(msg => Object.assign({}, msg))
const messages = reactive(inputData);
const usersTyping = reactive({ value: [] });
let botError = ref(false);

function handleCloseChat() {
  const result = Array.from(messages).map(msg => Object.assign({}, msg))
  headerStore.updateChatMessages(result)
  
}

async function chatWithBot(query) {
  botError = false
  const requestBody = {
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: query,
      },
    ],
    temperature: 0.6,
    max_tokens: 50,
  };
  axios
    .post("https://api.openai.com/v1/chat/completions", requestBody, {
      headers: {
        Authorization: `Bearer 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`,
      },
    })
    .then((response) => {
      const msg = {
        id: nanoid(),
        userId: "assistant",
        createdAt: new Date(),
        text: response?.data?.choices[0]?.message.content,
      };
      messages.push(Object.assign({}, msg));
      usersTyping.value = [];
    })
    .catch((error) => {
      const msg = {
        id: nanoid(),
        userId: "assistant",
        createdAt: new Date(),
        text: error?.response?.data?.error?.message,
        error: true
      };
      messages.push(Object.assign({}, msg));
      usersTyping.value = [];
    });
}

async function handleNewMessage(message) {
  messages.push(Object.assign({}, message));
  usersTyping.value.push(bot);
  const resp = chatWithBot(message.text);
}
</script>
<template>
  <ChatBox :me="me" :users="users" :messages="messages" @new-message="handleNewMessage" :usersTyping="usersTyping"
    @closeChat="handleCloseChat();$emit('closeChat')" />
</template>
