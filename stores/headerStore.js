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
  }),
  getters: {},
  actions: {
    handleSorting() {

      this.productSortOrder = this.productSortOrder === 'ASC' ? 'DESC' : 'ASC'
    },
    async getCategories() {
      const res = await fetch("https://fakestoreapi.com/products/categories");
      const data = await res.json();
      this.categoryList = data?.map((value, index) => {
        return { id: index + 1, value };
      });
    },
    async chatWithBot(query) {
      console.log(query, "query in chatWithBot");
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
          console.log(
            "OpenAI Response: ",
            response.data.choices[0].message.content
          );
        })
        .catch((error) => {
          console.error("OpenAI API Error: ", error);
        });
      // try {
      //   const response = await axios.post(
      //     "https://api.openai.com/v1/chat/completions",
      //     JSON.stringify(requestBody),
      //     {
      //       headers: {
      //         Authorization: `Bearer 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`,
      //       },
      //     }
      //   );
      //   console.log(response, "response of query");
      //   // res.json({ response: response.data.choices[0].text });
      // } catch (error) {
      //   res.status(500).json({ error: "AI response generation failed." });
      // }
    },

    toggleChatBox() {
      this.showChat = !this.showChat;
    },
  },
});
