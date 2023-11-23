<template>
  <div class="p-sticky">
    <div class="bg-green-900 text-slate-50 text-xs py-1.5">
      <div class="w-11/12 mx-auto flex justify-between font-bold">
        <div class="font-bold">
          <Icon name="mdi:phone" /><span>+0012345678</span>
        </div>
        <div>Get 50% off on Selected Items | shop now</div>
        <div>
          <span>
            <CommonDropdownComp :menuList="langList" />
          </span><span>
            <CommonDropdownComp :menuList="locationList" />
          </span>
        </div>
      </div>
    </div>
    <div class="shadow-sm bg-white">
      <nav class="
        w-11/12
        py-5
        mx-auto
        md:flex md:justify-between md:items-center
      ">
        <div class="flex items-baseline justify-between">
          <div class="md:flex items-center justify-between space-x-4">
            <NuxtLink to="/" class="
            text-xl
            font-bold
            md:text-2xl
          ">Logo
            </NuxtLink>
            <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
            <ul :class="showMenu ? 'flex' : 'hidden'" class="
            flex-col
            mt-8
            space-y-4
            md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0
          ">
              <!-- <CommonDropdownComp :menuList="categoryList" title="Category" /> -->
              <NuxtLink to="/">Home</NuxtLink>
              <NuxtLink to="/about">What's New</NuxtLink>
              <NuxtLink to="/product">Products</NuxtLink>
            </ul>
          </div>
          <!-- Mobile menu button -->
          <div @click="toggleNav" class="flex md:hidden">
            <button type="button">
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
                </path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <div :class="showMenu ? 'flex' : 'hidden'" class="justify-between md:items-center w-1/3
        flex-col
        mt-8
        space-y-4
        md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0">
          <form>
            <label for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative">
              <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input type="search" id="default-search"
                class="block w-full py-1 px-4 pr-10 text-xs text-gray-900 border border-gray-300 focus:outline-none rounded-full bg-gray-50  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Search Product" required>
            </div>
          </form>
          <div class="flex items-center">
            <Icon name="mdi:account-outline" class="text-lg" />
            <p class="text-sm">Account</p>
          </div>
          <div class="flex items-center">
            <Icon name="ic:outline-add-shopping-cart" class="text-lg" />
            <p class="text-sm">Cart</p>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue';
export default {
  props: ["langList", "locationList", "categoryList"],
  setup() {
    let showMenu = ref(false);
    const toggleNav = () => (showMenu.value = !showMenu.value);
    return { showMenu, toggleNav };
  },
};
</script>
<style>
.p-sticky {
  position: sticky;
  top: 0;
  z-index: 9999;
}
</style>