<script setup>
import { defineProps, defineEmits, ref, watch, nextTick } from 'vue';
import { nanoid } from 'nanoid';


const props = defineProps(['messages', "users", "me", "usersTyping"])
const open = ref(false);
const input = ref();
const messageBox = ref();

function getUser(id) {
  return props.users.find((user) => user.id === id);
}

watch(open, () => {
  if (!open.value) return;
  nextTick(() => {
    input.value.focus();
  });
});

watch(
  () => props.messages,
  () => {
    nextTick(
      () => (messageBox.value.scrollTop = messageBox.value.scrollHeight)
    );
  },
  { deep: true }
);

const { emit } = defineEmits(['newMessage','closeChat']);
</script>
<template>
  <div class="fixed bottom-[10px] right-[10px]">
    <div
      class="box bg-gray-300 dark:bg-gray-800 rounded w-[450px] overflow-hidden"
    >
      <!-- Header -->
      <header
        class="dark:bg-gray-900 bg-gray-200 px-4 flex justify-between items-center"
      >
        Customer Support Chat
        <button class="p-4 pr-0" @click="$emit('closeChat')">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
      </header>
      <!-- Messages -->
      <div class="messages p-4 overflow-y-scroll" ref="messageBox">
        <div v-if="!props.messages.length" class="text-center w-[350px] m-auto">
          <strong class="text-lg">Chat with Botman!</strong>
        </div>
        <div v-if="props.messages.length">
        <ChatBubble
          v-for="message in props.messages"
          :key="message.id"
          :message="message"
          :user="getUser(message.userId)"
          :my-message="message.userId === me.id"
        />

        <ChatBubble v-for="user in usersTyping.value" :key="user.id" :user="user">
          <AppLoading />
        </ChatBubble>
      </div>
      </div>
      <!-- Footer -->
      <footer class="p-2">
        <input
          ref="input"
          class="input w-full p-2 block"
          type="text"
          :disabled="usersTyping.value.length"
          placeholder="Type your message"
          @keypress.enter="
            $emit('newMessage', {
              id: nanoid(),
              userId: me.id,
              createdAt: new Date(),
              text: ($event.target).value,
            });
            ($event.target).value = '';
          "
        />

        <div class="h-6 py-1 px-2 text-sm italic">
          <span v-if="usersTyping.value.length">
            {{ usersTyping.value.map((user) => user.name).join(" and ") }}
            {{ usersTyping.value.length === 1 ? "is" : "are" }} typing
          </span>
        </div>
      </footer>
    </div>
  </div>
</template>
<style>
.messages{
  max-height: 50vh;
}
</style>