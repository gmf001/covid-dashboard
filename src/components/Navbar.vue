<template>
  <nav class="flex justify-between items-center h-16 py-2">
    <div>
      <h1 class="font-bold tracking-tight text-2xl uppercase">
        Covid Dashboard
      </h1>
    </div>

    <div>
      <button
        class="rounded-full border border-slate-200 dark:border-gray-700/50 p-3"
        @click="toggleDark()"
      >
        <MoonIcon v-if="!isDark" class="h-5 w-5 text-gray-500" />
        <SunIcon v-if="isDark" class="h-5 w-5 text-gray-200" />
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
  import { useToggle, useDark } from '@vueuse/core';
  import { MoonIcon, SunIcon } from '@heroicons/vue/solid';

  const isDark = useDark();
  const toggleDark = useToggle(isDark);
</script>
