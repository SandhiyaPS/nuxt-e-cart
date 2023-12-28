<template>
  <div class="p-relative">
    <CommonTopbarComp :langList="langList" :locationList="locationList" :categoryList="categoryList" />
    <div>
      <slot />
    </div>
    <CommonAppFooter />
    <div class="chatImg-wrapper">
      <div >
        <ChatWidget v-if="showChat" @closeChat="toggleChat"/>
      </div>
      <img v-if="!showChat" :src="chatImg" alt="img" class="thumb" @click="toggleChat" />
    </div>
  </div>
</template>

<script setup>
import "tw-elements/dist/css/tw-elements.min.css";
import chatImg from "assets/images/chat.png"
import { useHeaderStore } from '../stores/headerStore';
import { storeToRefs } from 'pinia'
const headerStore = useHeaderStore();
headerStore.getCategories();
const toggleChat = () => {
  headerStore.toggleChatBox()
}
const { langList, locationList, categoryList, showChat } = storeToRefs(headerStore);
</script>

<style scoped>
.router-link-exact-active {
  color: #12b488;
  font-weight: 700
}

.chatImg-wrapper {
  /* width: 50px;
  height: 50px; */
  position: fixed;
  right: 20px;
  bottom: 20px;
  background-color: #E0F2F1;
  cursor: pointer;
}

.chatImg-wrapper img {
  width: 40px;
  height: 40px;
  float: right;
}
</style>
 