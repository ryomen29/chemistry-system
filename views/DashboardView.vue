<script setup>
import { ArrowRight, Flame, BookOpen, Award, Clock, Check, Play, ChevronRight, CheckCircle, FlaskConical, Dna } from 'lucide-vue-next'
import { useRouter } from 'vue-router'
import MoleculeDecor from '../components/common/MoleculeDecor.vue'
import ProgressRing from '../components/common/ProgressRing.vue'
import PBar from '../components/common/PBar.vue'
import StatCard from '../components/common/StatCard.vue'
import ModuleCard from '../components/common/ModuleCard.vue'
import { useAppState } from '../state/appState'
const router=useRouter(); const { USER, MODULES, ACTIVITY }=useAppState()
const openModule=id=>router.push(`/modules/${id}`)
</script>
<template>
<section class="page dashboard-page"><div class="page-head split"><div><span class="eyebrow green">YOUR LEARNING SPACE</span><h1>Good morning, {{USER.name}} <span>👋</span></h1><p>Keep the momentum going. You're doing great.</p></div><button class="primary-btn" @click="router.push('/modules')">Explore modules <ArrowRight :size="16"/></button></div>
<div class="hero-card"><div><span class="hero-kicker"><Flame :size="15"/> {{USER.streak}} day streak</span><h2>You're on a roll.</h2><p>Complete one more lesson today to keep your streak alive.</p><button class="light-btn" @click="openModule('dna-genetics')">Continue learning <ChevronRight :size="16"/></button></div><MoleculeDecor class="hero-molecule"/><div class="hero-ring"><ProgressRing :pct="62" :size="118" :sw="9" color="#f59e0b"/><div><b>62%</b><span>Overall progress</span></div></div></div>
<div class="stat-grid"><StatCard label="Lessons completed" value="24" hint="+3 this week" :icon="BookOpen" icon-bg="#eef7f2" icon-color="#2c7a50"/><StatCard label="Average quiz score" value="79%" hint="+6% this month" :icon="Award" icon-bg="#fff7ed" icon-color="#ea580c"/><StatCard label="Learning time" value="12.5h" hint="+2.4h this week" :icon="Clock" icon-bg="#eff6ff" icon-color="#1d4ed8"/><StatCard label="Current streak" value="7 days" hint="Personal best: 12" :icon="Flame" icon-bg="#fdf2f8" icon-color="#be185d"/></div>
<div class="section-grid two"><div class="panel"><div class="panel-head"><div><h2>Continue learning</h2><p>Pick up where you left off</p></div><button class="text-btn" @click="router.push('/modules')">View all <ArrowRight :size="14"/></button></div><div class="continue-card" @click="openModule('dna-genetics')"><div class="subject-icon biology"><Dna :size="20"/></div><div class="grow"><div class="row"><b>DNA & Genetics</b><span>62%</span></div><p>3 of 8 lessons completed</p><PBar :pct="62" color="#be185d"/></div><ChevronRight class="muted"/></div><div class="lesson-row" @click="router.push('/lesson')"><span class="lesson-check"><Check :size="13"/></span><div><b>Genes & Traits</b><small>Reading · 25 min</small></div><span class="done">Completed</span></div><div class="lesson-row current" @click="router.push('/lesson')"><span class="play-circle"><Play :size="11" fill="currentColor"/></span><div><b>Interactive Experiment</b><small>Simulation · 30 min</small></div><span class="continue-link">Continue <ChevronRight :size="13"/></span></div></div>
<div class="panel"><div class="panel-head"><div><h2>Recent activity</h2><p>Your latest learning moments</p></div></div><div v-for="a in ACTIVITY" :key="a.id" class="activity-row"><div class="activity-icon" :class="a.type"><CheckCircle v-if="a.type==='completed'" :size="16"/><Award v-else-if="a.type==='quiz'" :size="16"/><FlaskConical v-else :size="16"/></div><div class="grow"><b>{{a.title}}</b><small>{{a.detail}}</small></div><span class="time">{{a.time}}</span></div></div></div>
<div class="section-title"><div><h2>Recommended for you</h2><p>Based on your progress and interests</p></div></div><div class="module-grid three"><ModuleCard v-for="m in MODULES.slice(0,3)" :key="m.id" :module="m" @open="openModule(m.id)"/></div>
</section>
</template>
