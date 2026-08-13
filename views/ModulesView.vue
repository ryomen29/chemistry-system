<script setup>
import { Search } from 'lucide-vue-next'
import { useRouter } from 'vue-router'
import ModuleCard from '../components/common/ModuleCard.vue'
import { useAppState } from '../state/appState'
const router=useRouter(); const { search, filterSubject, filterDiff, filteredModules }=useAppState()
</script>
<template><section class="page"><div class="page-head"><span class="eyebrow green">EXPLORE</span><h1>Learning modules</h1><p>Explore interactive science topics at your own pace.</p></div><div class="filters"><div class="search-box"><Search :size="17"/><input v-model="search" placeholder="Search modules…"></div><select v-model="filterSubject"><option>All</option><option>Chemistry</option><option>Biology</option><option>Physics</option></select><select v-model="filterDiff"><option>All</option><option>Beginner</option><option>Intermediate</option><option>Advanced</option></select></div><div class="module-grid three"><ModuleCard v-for="m in filteredModules" :key="m.id" :module="m" @open="router.push(`/modules/${m.id}`)"/></div><div v-if="!filteredModules.length" class="empty"><Search :size="30"/><h3>No modules found</h3><p>Try another search or filter.</p></div></section></template>
