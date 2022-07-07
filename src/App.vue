<template>
  <div class="container">
    <Navbar />
    <Stats
      :total="total"
      :total-pct="totalPct"
      :deaths="deaths"
      :death-pct="deathPct"
      :active="active"
      :active-pct="activePct"
    />
    <div
      class="border p-10 border-slate-200 dark:border-gray-700 bg-white dark:bg-darkSecondary"
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

  const total = ref();
  const totalPct = ref();
  const deaths = ref();
  const deathPct = ref();
  const active = ref();
  const activePct = ref();
  const graphData = ref<number[]>([]);

  async function getCovidData() {
    const data = await useApiData('/total/country/australia');
    const latest = data.pop();
    if (!latest) return;

    const last7Days = data.slice(-7);

    graphData.value = last7Days.map((stats) => {
      return stats.Active;
    });

    const start = last7Days.shift();
    const end = last7Days.pop();

    if (start && end) {
      totalPct.value =
        ((end.Confirmed - start.Confirmed) / start.Confirmed) * 100;
      activePct.value = ((end.Active - start.Active) / start.Active) * 100;
      deathPct.value = ((end.Deaths - start.Deaths) / start.Deaths) * 100;
      console.log(((end.Deaths - start.Deaths) / start.Deaths) * 100);
    }

    total.value = latest.Confirmed.toLocaleString();
    deaths.value = latest.Deaths.toLocaleString();
    active.value = latest.Active.toLocaleString();
  }

  onMounted(() => getCovidData());
</script>
