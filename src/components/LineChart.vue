<template>
  <LineChart ref="chartRef" :chart-data="graphData" :options="options" />
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue';
  import { LineChart } from 'vue-chart-3';
  import { Chart, registerables } from 'chart.js';

  const props = defineProps<{ data: number[] }>();

  Chart.register(...registerables);

  const chartRef = ref();

  const graphData = computed(() => ({
    labels: Array(props.data.length).fill(''),
    datasets: [
      {
        data: props.data,
        backgroundColor: '#f471b5',
        fill: true
      }
    ]
  }));

  const options = ref({
    responsive: true,
    plugins: {
      legend: {
        display: false
      }
    },
    interaction: {
      intersect: false
    },
    scales: {
      x: {
        display: false
      },
      y: {
        display: false
      }
    }
  });
</script>
