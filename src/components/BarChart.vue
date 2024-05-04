<!-- BarChart.vue -->
<template>
    <canvas ref="chart"></canvas>
  </template>
  
  <script>
  import Chart from 'chart.js/auto';
  
  export default {
    props: {
      labels: {
        type: Array,
        required: true,
      },
      data: {
        type: Array,
        required: true,
      },
    },
    mounted() {
      this.renderChart();
    },
    methods: {
      renderChart() {
        const ctx = this.$refs.chart.getContext('2d');
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: this.labels,
            datasets: [{
              label: 'Ventas',
              data: this.data,
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1,
            }],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
                grid: {
                display: false, // Esto elimina la malla en el eje Y
              },
              },
            },
          },
        });
      },
    },
  };
  </script>
  