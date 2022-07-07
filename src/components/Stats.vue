<template>
  <div class="grid gap-8 my-10">
    <div
      class="flex items-end justify-between p-6 bg-white dark:bg-darkSecondary border border-slate-200 rounded-lg dark:border-gray-700"
    >
      <div>
        <p class="text-sm text-gray-400">Total</p>
        <Skeleton v-if="!total" />
        <p class="text-2xl font-medium text-gray-900 dark:text-white">
          {{ total }}
        </p>
      </div>

      <div
        v-if="totalPct"
        class="inline-flex gap-2 p-1 text-green-600 bg-green-100 rounded"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>

        <span class="text-xs font-medium"> {{ totalPct.toFixed(2) }}% </span>
      </div>
    </div>
    <div
      class="flex items-end justify-between p-6 bg-white dark:bg-darkSecondary border border-slate-200 rounded-lg dark:border-gray-700"
    >
      <div>
        <p class="text-sm text-gray-400">Active</p>
        <Skeleton v-if="!active" />
        <p class="text-2xl font-medium text-gray-900 dark:text-white">
          {{ active }}
        </p>
      </div>

      <div
        v-if="activePct"
        class="inline-flex gap-2 p-1 text-green-600 bg-green-100 rounded"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>

        <span class="text-xs font-medium"> {{ activePct.toFixed(2) }}% </span>
      </div>
    </div>
    <div
      class="flex items-end justify-between p-6 bg-white dark:bg-darkSecondary border border-slate-200 rounded-lg dark:border-gray-700"
    >
      <div>
        <p class="text-sm text-gray-400">Deaths</p>
        <Skeleton v-if="!deaths" />
        <p class="text-2xl font-medium text-gray-900 dark:text-white">
          {{ deaths }}
        </p>
      </div>

      <div
        v-if="deathPct"
        class="inline-flex gap-2 p-1 text-green-600 bg-green-100 rounded"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>

        <span class="text-xs font-medium"> {{ deathPct.toFixed(2) }}% </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import Skeleton from '@/components/Skeleton.vue';

  interface Props {
    total: number | undefined;
    active: number | undefined;
    deaths: number | undefined;
    totalPct: number | undefined;
    activePct: number | undefined;
    deathPct: number | undefined;
  }

  defineProps<Props>();
</script>
