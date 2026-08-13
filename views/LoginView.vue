<script setup>
import { Eye, EyeOff, ArrowRight } from 'lucide-vue-next'
import { useRouter } from 'vue-router'
import AtomLogo from '../components/common/AtomLogo.vue'
import MoleculeDecor from '../components/common/MoleculeDecor.vue'
import { useAppState } from '../state/appState'

const router = useRouter()
const { login, doLogin } = useAppState()
</script>

<template>
  <div class="auth-page">
    <div class="auth-visual"><div class="hex-bg"></div><div class="auth-brand"><AtomLogo :size="42"/><span>ChemSystem</span></div><div class="auth-copy"><div class="eyebrow">LEARN · EXPLORE · EXPERIMENT</div><h1>Science becomes<br><em>curiosity</em>.</h1><p>A focused learning space for students to explore chemistry, biology and physics through lessons, simulations and an AI tutor.</p><div class="auth-stats"><div><b>8</b><span>Modules</span></div><div><b>40+</b><span>Lessons</span></div><div><b>24/7</b><span>AI Tutor</span></div></div></div><MoleculeDecor class="auth-molecule"/></div>
    <div class="auth-form-wrap"><form class="auth-form" @submit.prevent="doLogin(router)"><div class="mobile-brand"><AtomLogo :size="34"/><b>ChemSystem</b></div><div class="form-head"><span class="eyebrow green">WELCOME BACK</span><h2>Continue learning.</h2><p>Sign in to pick up where you left off.</p></div><div v-if="login.error" class="error-box">{{login.error}}</div><label>Email<input v-model="login.email" type="email" placeholder="you@example.com" autocomplete="email"></label><label>Password<span class="pass"><input v-model="login.password" :type="login.show?'text':'password'" placeholder="••••••••"><button type="button" @click="login.show=!login.show"><EyeOff v-if="!login.show" :size="17"/><Eye v-else :size="17"/></button></span></label><div class="form-row"><label class="check"><input type="checkbox"> Remember me</label><button type="button" class="link">Forgot password?</button></div><button class="primary-btn wide" :disabled="login.loading">{{login.loading?'Signing in…':'Sign In'}}<ArrowRight v-if="!login.loading" :size="17"/></button><div class="or"><span>or</span></div><button type="button" class="outline-btn wide" @click="router.push('/register')">Create a new account</button></form></div>
  </div>
</template>
