<template>
  <table class="data-table">
    <thead>
      <tr>
        <th v-for="head in headers" :key="head">{{ head }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, i) in rows" :key="i">
        <td v-for="(cell, j) in row" :key="j">{{ cell }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
defineProps<{
  headers: string[]
  rows: (string | number)[][]
}>()
</script>

<style scoped>
/* Primarily for /buefy. Replaces stat cards — bordered, dense, Inconsolata
   numerics read like a spec sheet rather than a marketing tile. */
.data-table {
  width: 100%;
  border-collapse: collapse;
  font-family: var(--font-mono);
  font-size: var(--text-small);
}
.data-table th,
.data-table td {
  padding: var(--space-2xs) var(--space-sm);
  border-bottom: var(--border-hairline);
  text-align: left;
}
.data-table th {
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: var(--tracking-label);
  font-weight: var(--weight-medium);
}
.data-table td {
  color: var(--color-text-strong);
}
.data-table tbody tr:last-child th,
.data-table tbody tr:last-child td {
  border-bottom: none;
}
</style>
