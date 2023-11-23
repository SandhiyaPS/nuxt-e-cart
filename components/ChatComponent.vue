<template>
  <div>
    <div class="chatbox">
      <div class="chat-messages">
        <div class="message received">Hello, how can I help you?</div>
        <div class="message sent">I have a question.</div>
        <div class="message received">Sure, ask away.</div>
      </div>
      <div class="input-container">
        <input type="text" placeholder="Type your message...">
        <button @click="chatwithbot"><img :src="sendIcon" alt="send"/></button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useHeaderStore } from '../stores/headerStore';
import sendIcon from "assets/images/send-icon.png"
import { storeToRefs } from 'pinia'
const headerStore = useHeaderStore();
const toggleChat = () => {
  headerStore.toggleChatBox()
}
const chatwithbot = () => {
  headerStore.chatWithBot("I have a question")
}
const { showChat } = storeToRefs(headerStore);
</script>

<style scoped>
.chatbox {
    max-width: 300px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    /* background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px; */
    /* box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    overflow: hidden; */
}

.chat-messages {
    padding: 10px;
    /* max-height: 300px;
    overflow-y: scroll; */
}

.message {
    margin: 10px;
    padding: 5px 10px;
    border-radius: 5px;
    word-wrap: break-word;
}

.received {
    background-color: #e1e1e1;
    width: 78%;
    float: left;
}

.sent {
    background-color: #007bff;
    width: 78%;
    float: right;
    color: #fff;
    align-self: flex-end;
}

.input-container {
    display: flex;
    align-items: center;
    padding: 10px;
    border-top: 1px solid #ccc;
}

input[type="text"] {
    flex: 1;
    padding: 5px;
    border: none;
    border-radius: 3px;
}

button {
    /* background-color: #007bff; */
    color: #fff;
    border: none;
    border-radius: 3px;
    padding: 5px 10px;
    cursor: pointer;
}
button img {
  width: 20px;
}
</style>