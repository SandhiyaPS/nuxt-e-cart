import axios from "axios";
import { defineStore } from "pinia";

export const useHeaderStore = defineStore("headerStore", {
  state: () => ({
    langList: [{ id: 1, value: "eng" }],
    locationList: [
      { id: 1, value: "TN" },
      { id: 2, value: "KL" },
      { id: 3, value: "KN" },
      { id: 4, value: "AP" },
      { id: 5, value: "MP" },
    ],
    categoryList: [],
    isLoading: false,
    showChat: false,
    productSortOrder: "ASC",
    chatMessages: []
  }),
  getters: {},
  actions: {
    handleSorting() {
      this.productSortOrder = this.productSortOrder === 'ASC' ? 'DESC' : 'ASC'
    },
    updateChatMessages(data) {
      console.log(Array.from(data),"data")
      this.chatMessages = Array.from(data)
    },
    async getCategories() {
      const res = await fetch("https://fakestoreapi.com/products/categories");
      const data = await res.json();
      this.categoryList = data?.map((value, index) => {
        return { id: index + 1, value };
      });
    },
    toggleChatBox() {
      this.showChat = !this.showChat;
    },
  },
});
