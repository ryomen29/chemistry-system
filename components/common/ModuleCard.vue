<script setup>
import { BookOpen, ChevronRight, Dna, FlaskConical, Globe, Zap } from 'lucide-vue-next'
import SubjectBadge from './SubjectBadge.vue'; import PBar from './PBar.vue'
const props=defineProps({module:Object}); const emit=defineEmits(['open'])
const subjectColor=s=>({Chemistry:'#2c7a50',Biology:'#be185d',Physics:'#1d4ed8','Earth Science':'#92400e'}[s]||'#6b7280'); const subjectBg=s=>({Chemistry:'#eef7f2',Biology:'#fdf2f8',Physics:'#eff6ff','Earth Science':'#fffbeb'}[s]||'#f3f4f6'); const iconFor=s=>s==='Biology'?Dna:s==='Physics'?Zap:s==='Earth Science'?Globe:FlaskConical
</script>
<template><div class="module-card" @click="emit('open')"><div class="module-card-top"><span class="module-icon" :style="{background:subjectBg(module.subject),color:subjectColor(module.subject)}"><component :is="iconFor(module.subject)" :size="20"/></span><SubjectBadge :subject="module.subject"/></div><h3>{{module.title}}</h3><p>{{module.description}}</p><div class="module-card-meta"><span>{{module.difficulty}}</span><span><BookOpen :size="13"/> {{module.lessons}} lessons</span><span>{{module.hours}}h</span></div><div class="row progress-meta"><span>{{module.progress}}% complete</span><ChevronRight :size="15"/></div><PBar :pct="module.progress" :color="subjectColor(module.subject)"/></div></template>
