<script setup>
import { ArrowRight } from 'lucide-vue-next'
import { useRouter } from 'vue-router'
import AtomLogo from '../components/common/AtomLogo.vue'
import { useAppState } from '../state/appState'
const router = useRouter()
const { register, doRegister } = useAppState()
</script>
<template>
  <div class="auth-page"><div class="auth-visual"><div class="hex-bg"></div><div class="auth-brand"><AtomLogo :size="42"/><span>ChemSystem</span></div><div class="auth-copy"><div class="eyebrow">LEARN · EXPLORE · EXPERIMENT</div><h1>Build your<br><em>curiosity.</em></h1><p>Create a focused learning space for lessons, simulations, quizzes and AI-powered explanations.</p><div class="auth-stats"><div><b>8</b><span>Modules</span></div><div><b>40+</b><span>Lessons</span></div><div><b>24/7</b><span>AI Tutor</span></div></div></div></div><div class="auth-form-wrap"><form class="auth-form" @submit.prevent="doRegister(router)"><div class="mobile-brand"><AtomLogo :size="34"/><b>ChemSystem</b></div><div class="form-head"><span class="eyebrow green">GET STARTED</span><h2>Create your account.</h2><p>Build your own science learning journey.</p></div><div v-if="register.error" class="error-box">{{register.error}}</div><label>Full name<input v-model="register.name" placeholder="Your name"></label><label>Email<input v-model="register.email" type="email" placeholder="you@example.com"></label><label>Password<input v-model="register.password" type="password" placeholder="At least 4 characters"></label><label>Confirm password<input v-model="register.confirm" type="password" placeholder="Repeat your password"></label><button class="primary-btn wide" :disabled="register.loading">{{register.loading?'Creating account…':'Create Account'}}<ArrowRight v-if="!register.loading" :size="17"/></button><p class="switch-auth">Already have an account? <button type="button" class="link" @click="router.push('/login')">Sign in</button></p></form></div></div>
</template>
