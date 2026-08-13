import { computed, nextTick, reactive, ref } from 'vue'
import { MODULES, LESSONS, QUIZ, ACTIVITY, AI_INIT, USER } from '../data'
import { authService } from '../services/auth'
import { aiTutorService } from '../services/aiTutor'

const routeState = reactive({ moduleId: 'dna-genetics' })
const authed = ref(sessionStorage.getItem('chemsystem-auth') === '1')
const mobileOpen = ref(false)
const login = reactive({ email: '', password: '', show: false, loading: false, error: '' })
const register = reactive({ name: '', email: '', password: '', confirm: '', show: false, loading: false, error: '' })
const search = ref('')
const filterSubject = ref('All')
const filterDiff = ref('All')
const quizIndex = ref(0)
const quizAnswers = ref({})
const quizScore = ref(0)
const chat = ref(AI_INIT.map(x => ({ ...x })))
const chatInput = ref('')
const chatBusy = ref(false)
const chatBox = ref(null)
const settingsTab = ref('Account')
const notifs = ref({ email: true, push: false, reminders: true, achievements: true })
const prefs = ref({ autoPlay: true, hints: true, dark: false, dyslexic: false })
const selectedSubjects = ref([...USER.subjects])
const simulationRunning = ref(false)
const simStep = ref(0)
const simFullscreen = ref(false)

const filteredModules = computed(() => MODULES.filter(m =>
  (filterSubject.value === 'All' || m.subject === filterSubject.value) &&
  (filterDiff.value === 'All' || m.difficulty === filterDiff.value) &&
  (m.title + m.description).toLowerCase().includes(search.value.toLowerCase())
))

const selectedModule = computed(() => MODULES.find(m => m.id === routeState.moduleId) || MODULES.find(m => m.id === 'dna-genetics'))
const activeMods = computed(() => MODULES.filter(m => m.progress > 0))
const moduleLessons = computed(() => selectedModule.value.id === 'dna-genetics'
  ? LESSONS
  : LESSONS.map((l, i) => ({ ...l, title: `${['Introduction', 'Core Concepts', 'Guided Practice', 'Interactive Experiment', 'Practice Problems', 'Final Quiz'][i] || l.title} — ${selectedModule.value.title}` })))
const dark = computed(() => prefs.value.dark)
const pageTitle = page => ({ dashboard: 'Dashboard', modules: 'Modules', simulation: 'Simulations', 'ai-tutor': 'AI Tutor', progress: 'Progress', profile: 'Profile', settings: 'Settings', 'module-detail': selectedModule.value.title, lesson: 'Lesson', quiz: 'Quiz', 'quiz-results': 'Quiz Results' }[page] || 'ChemSystem')

const subjectColor = s => ({ Chemistry: '#2c7a50', Biology: '#be185d', Physics: '#1d4ed8', 'Earth Science': '#92400e' }[s] || '#6b7280')
const subjectBg = s => ({ Chemistry: '#eef7f2', Biology: '#fdf2f8', Physics: '#eff6ff', 'Earth Science': '#fffbeb' }[s] || '#f3f4f6')
const nowTime = () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
const genId = () => Math.random().toString(36).slice(2)

function setModule(id) { routeState.moduleId = id }
function openSession() { authed.value = true; sessionStorage.setItem('chemsystem-auth', '1') }
function closeSession() { authed.value = false; sessionStorage.removeItem('chemsystem-auth') }

async function doLogin(router) {
  login.loading = true; login.error = ''
  const r = await authService.login(login.email, login.password)
  login.loading = false
  if (r.ok) { openSession(); await router.push('/dashboard') }
  else login.error = r.error
}

async function doRegister(router) {
  register.loading = true; register.error = ''
  const r = await authService.register(register)
  register.loading = false
  if (r.ok) { openSession(); await router.push('/dashboard') }
  else register.error = r.error
}

function startQuiz(router) {
  quizIndex.value = 0; quizAnswers.value = {}; quizScore.value = 0
  router.push('/quiz')
}
function chooseAnswer(i) { quizAnswers.value[quizIndex.value] = i }
function nextQuestion(router) {
  if (quizIndex.value < QUIZ.length - 1) quizIndex.value++
  else {
    let score = 0
    QUIZ.forEach((q, i) => { if (quizAnswers.value[i] === q.correct) score++ })
    quizScore.value = Math.round(score / QUIZ.length * 100)
    router.push('/quiz-results')
  }
}

async function sendChat() {
  const text = chatInput.value.trim()
  if (!text || chatBusy.value) return
  chat.value.push({ id: genId(), role: 'user', content: text, time: nowTime() })
  chatInput.value = ''; chatBusy.value = true
  await nextTick(); chatBox.value?.scrollTo({ top: chatBox.value.scrollHeight, behavior: 'smooth' })
  const answer = await aiTutorService.send(text)
  chat.value.push({ id: genId(), role: 'ai', content: answer, time: nowTime() })
  chatBusy.value = false
  await nextTick(); chatBox.value?.scrollTo({ top: chatBox.value.scrollHeight, behavior: 'smooth' })
}

function resetSim() { simulationRunning.value = false; simStep.value = 0 }
function toggleSubject(s) {
  selectedSubjects.value = selectedSubjects.value.includes(s) ? selectedSubjects.value.filter(x => x !== s) : [...selectedSubjects.value, s]
}

export function useAppState() {
  return { USER, MODULES, LESSONS, QUIZ, ACTIVITY, routeState, authed, mobileOpen, login, register, search, filterSubject, filterDiff, filteredModules, selectedModule, activeMods, moduleLessons, quizIndex, quizAnswers, quizScore, chat, chatInput, chatBusy, chatBox, settingsTab, notifs, prefs, selectedSubjects, simulationRunning, simStep, simFullscreen, dark, pageTitle, subjectColor, subjectBg, setModule, openSession, closeSession, doLogin, doRegister, startQuiz, chooseAnswer, nextQuestion, sendChat, resetSim, toggleSubject }
}
