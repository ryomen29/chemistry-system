<script setup>
import { ChevronLeft, ChevronRight, CheckCircle, XCircle, Sparkles } from 'lucide-vue-next'
import { useRouter } from 'vue-router'
import PBar from '../components/common/PBar.vue'
import { useAppState } from '../state/appState'
const router=useRouter(); const { QUIZ, quizIndex, quizAnswers, chooseAnswer, nextQuestion }=useAppState()
</script>
<template><section class="page quiz-page"><div class="quiz-top"><button class="back-btn" @click="router.push('/modules/dna-genetics')"><ChevronLeft :size="16"/> Exit quiz</button><span>Question {{quizIndex+1}} of {{QUIZ.length}}</span></div><PBar :pct="((quizIndex)/QUIZ.length)*100" color="#2c7a50" h="6"/><div class="quiz-card panel"><div class="quiz-label">DNA & GENETICS · FINAL QUIZ</div><h1>{{QUIZ[quizIndex].question}}</h1><div class="options"><button v-for="(o,i) in QUIZ[quizIndex].options" :key="o" class="option" :class="{selected:quizAnswers[quizIndex]===i}" @click="chooseAnswer(i)"><span>{{String.fromCharCode(65+i)}}</span><b>{{o}}</b></button></div><div class="quiz-actions"><span v-if="quizAnswers[quizIndex]!==undefined">Answer selected</span><button class="primary-btn" :disabled="quizAnswers[quizIndex]===undefined" @click="nextQuestion(router)">{{quizIndex===QUIZ.length-1?'Finish quiz':'Next question'}} <ChevronRight :size="15"/></button></div></div></section></template>
