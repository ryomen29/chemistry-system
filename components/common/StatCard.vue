<script setup>
const props=defineProps({label:String,value:String,hint:String,icon:Object,iconBg:String,iconColor:String})
</script>
<template><div class="stat-card"><div class="stat-icon" :style="{background:iconBg,color:iconColor}"><component :is="icon" :size="17"/></div><div class="stat-value">{{value}}</div><div class="stat-label">{{label}}</div><div v-if="hint" class="stat-hint">{{hint}}</div></div></template>
