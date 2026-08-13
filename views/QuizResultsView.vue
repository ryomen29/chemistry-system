<script setup>
import { Trophy, RefreshCw } from 'lucide-vue-next'
import { useRouter } from 'vue-router'
import ProgressRing from '../components/common/ProgressRing.vue'
import { useAppState } from '../state/appState'
const router=useRouter(); const { USER, QUIZ, quizScore, startQuiz }=useAppState(); const correct=()=>Math.round(quizScore.value/100*QUIZ.length)
</script>
<template><section class="page result-page"><div class="result-card panel"><div class="trophy"><Trophy :size="34"/></div><span class="eyebrow green">QUIZ COMPLETE</span><h1>Great work, {{USER.name}}!</h1><p>You've completed the DNA & Genetics final quiz.</p><div class="score-ring"><ProgressRing :pct="quizScore" :size="170" :sw="12" color="#2c7a50"/><div><b>{{quizScore}}%</b><span>Your score</span></div></div><div class="result-stats"><div><b>{{correct()}}</b><span>Correct</span></div><div><b>{{QUIZ.length-correct()}}</b><span>To review</span></div><div><b>{{QUIZ.length}}</b><span>Questions</span></div></div><div class="result-actions"><button class="primary-btn" @click="router.push('/modules')">Back to modules</button><button class="outline-btn" @click="startQuiz(router)"><RefreshCw :size="15"/> Try again</button></div></div></section></template>
