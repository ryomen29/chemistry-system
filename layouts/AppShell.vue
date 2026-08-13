<script setup>
import { computed } from 'vue'
import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router'
import { Bell, Menu } from 'lucide-vue-next'
import Sidebar from '../components/common/Sidebar.vue'
import { useAppState } from '../state/appState'

const route = useRoute()
const router = useRouter()
const { USER, mobileOpen, dark, selectedModule, closeSession } = useAppState()
const page = computed(() => route.name || route.path.split('/')[1])
const title = computed(() => {
  if (route.params.moduleId) return selectedModule.value.title
  return ({ dashboard:'Dashboard', modules:'Modules', lesson:'Lesson', simulation:'Simulations', 'ai-tutor':'AI Tutor', quiz:'Quiz', 'quiz-results':'Quiz Results', progress:'Progress', profile:'Profile', settings:'Settings' }[route.path.slice(1)] || 'ChemSystem')
})
function navigate(id) { router.push(id === 'module-detail' ? `/modules/${selectedModule.value.id}` : `/${id}`) }
function logout() { closeSession(); router.push('/login') }
</script>

<template>
  <div class="app" :class="{dark}">
    <aside class="sidebar desktop-sidebar"><Sidebar :current="page" @navigate="navigate"/></aside>
    <div v-if="mobileOpen" class="mobile-drawer"><div class="drawer-backdrop" @click="mobileOpen=false"></div><aside class="drawer"><Sidebar :current="page" @navigate="navigate" @close="mobileOpen=false"/></aside></div>
    <main class="main-shell">
      <header class="topbar">
        <button class="icon-btn mobile-only" @click="mobileOpen=true"><Menu :size="20"/></button>
        <div class="crumb"><span>{{title}}</span><span v-if="route.params.moduleId"> / {{selectedModule.title}}</span></div>
        <div class="top-actions"><button class="icon-btn"><Bell :size="18"/><i></i></button><div class="top-avatar">{{USER.name[0]}}</div><button class="text-btn logout-btn" @click="logout">Log out</button></div>
      </header>
      <RouterView />
    </main>
  </div>
</template>
