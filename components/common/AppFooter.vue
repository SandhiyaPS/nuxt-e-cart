<script setup>
const runtimeConfig = useRuntimeConfig();
</script>

<template>
  <div class="bg-white">
    <div class="mx-auto w-11/12 flex flex-wrap my-24 gap-12 justify-between md:gap-24">
      <div class="mr-auto">
        <Logo />
        <p class="mt-4 text-sm text-gray-700 xl:max-w-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl sit amet aliquam lacinia, nunc odio lacinia tortor, vel aliquam nisl lorem quis nunc. Sed
          euismod, nisl sit amet aliquam lacinia, nunc odio lacinia tortor, vel aliquam nisl lorem quis nunc.
        </p>
        <LangSwitcher class="mt-8" />
      </div>
      <div class="w-3/7 lg:w-auto">
        <div class="font-semibold mb-1">Information</div>
        <div class="text-sm">
          <a href="#" class="py-1.5 block">About Us</a>
          <a href="#" class="py-1.5 block">Careers</a>
          <a href="#" class="py-1.5 block">Press</a>
          <a href="#" class="py-1.5 block">Affiliates</a>
        </div>
      </div>
      <div class="w-3/7 lg:w-auto">
        <div class="font-semibold mb-1">Products</div>
        <div class="text-sm">
          <NuxtLink to="" class="py-1.5 block">New Arrivals</NuxtLink>
          <a href="#" class="py-1.5 block">Gift Cards</a>
        </div>
      </div>
      <div class="w-3/7 lg:w-auto">
        <div class="font-semibold mb-1">Customer Service</div>
        <div class="text-sm">
          <a href="#" class="py-1.5 block">Contact Us</a>
          <a href="#" class="py-1.5 block">Shipping & Returns</a>
          <a href="#" class="py-1.5 block">Privacy Policy</a>
          <a href="#" class="py-1.5 block">Terms & Conditions</a>
        </div>
      </div>
      <div class="w-3/7 lg:w-auto">
        <div class="font-semibold mb-1">My Account</div>
        <div class="text-sm">
          <NuxtLink to="/my-account" class="py-1.5 block">My Account</NuxtLink>
          <NuxtLink to="/my-account?tab=orders" class="py-1.5 block">Order History</NuxtLink>
          <NuxtLink to="/wishlist" class="py-1.5 block">Wishlist</NuxtLink>
          <a href="#" class="py-1.5 block">Newsletter</a>
        </div>
      </div>
    </div>
    <div class="mx-auto border-t">
      <div class="copywrite">
        <p class="text-xs text-center py-4">
          <a href="https://woonuxt.com">WooNuxt v3.2.11</a> - by
          <a href="https://scottyzen.com" target="_blank">Scottyzen</a>
        </p>
      </div>
    </div>
  </div>
</template>
