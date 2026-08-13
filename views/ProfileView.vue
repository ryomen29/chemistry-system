<script setup>
import { Flame, BookOpen, Star, Award } from 'lucide-vue-next'
import SubjectBadge from '../components/common/SubjectBadge.vue'
import StatCard from '../components/common/StatCard.vue'
import { useAppState } from '../state/appState'
const { USER }=useAppState()
</script>
<template><section class="page narrow-page"><h1>Profile</h1><div class="profile-cover"><div class="hex-bg"></div></div><div class="profile-card panel"><div class="profile-avatar">{{USER.name[0]}}</div><button class="outline-btn edit-profile">Edit Profile</button><h2>{{USER.name}}</h2><p>{{USER.email}}</p><small>{{USER.grade}}</small><div class="badges"><SubjectBadge v-for="s in USER.subjects" :key="s" :subject="s"/></div></div><div class="mini-stat-grid"><StatCard label="Day streak" value="7 days" hint="" :icon="Flame" icon-bg="#fff7ed" icon-color="#ea580c"/><StatCard label="Lessons done" value="24" hint="" :icon="BookOpen" icon-bg="#eef7f2" icon-color="#2c7a50"/><StatCard label="Quizzes taken" value="8" hint="" :icon="Star" icon-bg="#fff7ed" icon-color="#f59e0b"/><StatCard label="Avg score" value="79%" hint="" :icon="Award" icon-bg="#fdf2f8" icon-color="#be185d"/></div></section></template>
