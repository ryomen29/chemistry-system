import { createRouter, createWebHistory } from 'vue-router'
import { useAppState } from '../state/appState'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import AppShell from '../layouts/AppShell.vue'
import DashboardView from '../views/DashboardView.vue'
import ModulesView from '../views/ModulesView.vue'
import ModuleDetailView from '../views/ModuleDetailView.vue'
import LessonView from '../views/LessonView.vue'
import SimulationView from '../views/SimulationView.vue'
import AITutorView from '../views/AITutorView.vue'
import QuizView from '../views/QuizView.vue'
import QuizResultsView from '../views/QuizResultsView.vue'
import ProgressView from '../views/ProgressView.vue'
import ProfileView from '../views/ProfileView.vue'
import SettingsView from '../views/SettingsView.vue'

const routes = [
  { path: '/', redirect: '/dashboard' },
  { path: '/login', component: LoginView, meta: { guest: true } },
  { path: '/register', component: RegisterView, meta: { guest: true } },
  { path: '/', component: AppShell, children: [
    { path: 'dashboard', component: DashboardView },
    { path: 'modules', component: ModulesView },
    { path: 'modules/:moduleId', component: ModuleDetailView },
    { path: 'lesson', component: LessonView },
    { path: 'simulation', component: SimulationView },
    { path: 'ai-tutor', component: AITutorView },
    { path: 'quiz', component: QuizView },
    { path: 'quiz-results', component: QuizResultsView },
    { path: 'progress', component: ProgressView },
    { path: 'profile', component: ProfileView },
    { path: 'settings', component: SettingsView },
  ]},
]

const router = createRouter({ history: createWebHistory(), routes })
router.beforeEach((to) => {
  const { authed } = useAppState()
  if (to.meta.guest && authed.value) return '/dashboard'
  if (!to.meta.guest && !authed.value) return '/login'
})

export default router
