<script setup>
import { defineStore } from "pinia";
import { storeToRefs } from 'pinia'
const useDropdownStore = defineStore("dropdownStore", {
  state: () => ({
    order: "ASC",
  }),
  getters: {},
  actions: {
    handleSorting() {
      this.order = this.order === 'ASC' ? 'DESC' : 'ASC'
    }
  },
})

const dropdownStore = useDropdownStore();
const { order } = storeToRefs(dropdownStore);
const handleSorting = () => {
  dropdownStore.handleSorting();
}
</script>

<template>
  <div class="-space-x-px rounded-m shadow-sm isolate inline-flex">
    <button
      class="bg-white border rounded-l-md font-medium border-gray-300 text-sm p-2 text-gray-500 relative inline-flex items-center hover:bg-gray-50 focus:z-20"
      aria-label="Sort" @click="handleSorting">
      <Icon name="ion:filter-outline" size="18" :class="order === 'ASC' ? 'rotate-180' : ''"
        class="transform transform-origin-center transition-transform" />
    </button>
    <select
      class="bg-white border rounded-l-none rounded-r-md font-medium border-gray-300 flex-1 text-sm p-1.5 pr-12 pl-4 text-gray-500 relative inline-flex items-center hover:bg-gray-50 focus:z-20"
      aria-label="Order by"
      >
      <option value="alphabetically" selected>Alphabetically</option>
    </select>
  </div>
</template>
