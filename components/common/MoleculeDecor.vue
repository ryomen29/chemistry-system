<template><svg viewBox="0 0 200 200" class="molecule-decor" fill="none"><g opacity=".9"><circle v-for="(n,i) in nodes" :key="i" :cx="n[0]" :cy="n[1]" :r="n[2]" fill="currentColor" :opacity="n[3]"/></g><g><line v-for="(n,i) in lines" :key="i" :x1="n[0]" :y1="n[1]" :x2="n[2]" :y2="n[3]" stroke="currentColor" stroke-width="2" opacity=".12"/></g></svg></template>
<script setup>
const nodes=[[100,100,14,.25],[148,70,9,.18],[52,70,9,.18],[148,130,9,.18],[52,130,9,.18],[100,36,6,.12],[100,164,6,.12]]
const lines=[[100,100,148,70],[100,100,52,70],[100,100,148,130],[100,100,52,130],[100,100,100,36],[100,100,100,164]]
</script>
