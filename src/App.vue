<template>
  <div class="container">
    <Navbar :timeframe="timeframe" @update-timeframe="updateTimeframe" />
    <Stats
      :total="total"
      :total-pct="totalPct"
      :deaths="deaths"
      :death-pct="deathPct"
    />
    <div
      class="border p-4 py-3 border-slate-200 rounded-lg dark:border-gray-700/50 bg-white dark:bg-darkSecondary"
    >
      <LineChart :data="graphData" />
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
  import Stats from '@/components/Stats.vue';
  import LineChart from '@/components/LineChart.vue';
  import Footer from '@/components/Footer.vue';
  import Navbar from '@/components/Navbar.vue';
  import { useApiData } from '@/api';
  import { ref, onMounted } from 'vue';

  const timeframe = ref(7);
  const total = ref();
  const totalPct = ref();
  const deaths = ref();
  const deathPct = ref();
  const graphData = ref<number[]>([]);

  function updateTimeframe(value: number) {
    console.log(value);
    timeframe.value = value;
    getCovidData();
  }

  async function getCovidData() {
    const data = await useApiData('/total/country/australia');
    const latest = data[data.length - 1];
    if (!latest) return;

    const filteredData = data.slice(
      data.length - 1 - timeframe.value,
      data.length - 1
    );
    const start = filteredData[0];
    const end = filteredData[filteredData.length - 1];

    graphData.value = filteredData.map((stats) => stats.Active);

    if (start && end) {
      totalPct.value =
        ((end.Confirmed - start.Confirmed) / start.Confirmed) * 100;
      deathPct.value = ((end.Deaths - start.Deaths) / start.Deaths) * 100;
    }

    total.value = latest.Confirmed.toLocaleString();
    deaths.value = latest.Deaths.toLocaleString();
  }

  onMounted(() => getCovidData());
</script>
