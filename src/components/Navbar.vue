<template>
  <nav class="flex justify-between items-center h-16 py-2">
    <div>
      <h1 class="font-bold tracking-tight text-2xl uppercase">
        Covid Dashboard
      </h1>
    </div>

    <div class="flex items-center space-x-2">
      <button
        :class="[
          'rounded-full h-11 w-11 text-xs font-semibold flex items-center justify-center border border-slate-200 dark:border-gray-700/50 p-3',
          { 'text-pink-500 dark:text-pink-300': timeframe == 7 }
        ]"
        @click="$emit('updateTimeframe', 7)"
      >
        7
      </button>
      <button
        :class="[
          'rounded-full h-11 w-11 text-xs font-semibold flex items-center justify-center border border-slate-200 dark:border-gray-700/50 p-3',
          { 'text-pink-500 dark:text-pink-300': timeframe == 30 }
        ]"
        @click="$emit('updateTimeframe', 30)"
      >
        30
      </button>
      <button
        :class="[
          'rounded-full h-11 w-11 text-xs font-semibold flex items-center justify-center border border-slate-200 dark:border-gray-700/50 p-3',
          { 'text-pink-500 dark:text-pink-300': timeframe == 90 }
        ]"
        @click="$emit('updateTimeframe', 90)"
      >
        3M
      </button>
      <button
        :class="[
          'rounded-full h-11 w-11 text-xs font-semibold flex items-center justify-center border border-slate-200 dark:border-gray-700/50 p-3',
          { 'text-pink-500 dark:text-pink-300': timeframe == 360 }
        ]"
        @click="$emit('updateTimeframe', 360)"
      >
        1YR
      </button>

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

  defineEmits({ updateTimeframe: Number });
  defineProps({
    timeframe: {
      type: Number,
      default: 0
    }
  });
</script>
