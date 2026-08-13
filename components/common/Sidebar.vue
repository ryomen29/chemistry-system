<script setup>
import { Home, BookOpen, FlaskConical, MessageSquare, BarChart2, User, Settings, X } from 'lucide-vue-next'
import AtomLogo from './AtomLogo.vue'
const props=defineProps({current:String}); const emit=defineEmits(['navigate','close'])
const navMain=[{id:'dashboard',label:'Dashboard',icon:Home},{id:'modules',label:'Modules',icon:BookOpen},{id:'simulation',label:'Simulations',icon:FlaskConical},{id:'ai-tutor',label:'AI Tutor',icon:MessageSquare},{id:'progress',label:'Progress',icon:BarChart2}]
const navBottom=[{id:'profile',label:'Profile',icon:User},{id:'settings',label:'Settings',icon:Settings}]
</script>
<template><div class="sidebar-inner"><div class="brand"><span class="brand-icon"><AtomLogo/></span><div><b>ChemSystem</b><small>Learn. Explore. Experiment.</small></div><button class="sidebar-close" @click="emit('close')"><X :size="16"/></button></div><nav class="nav-list"><button v-for="x in navMain" :key="x.id" class="nav-item" :class="{active:props.current===x.id}" @click="emit('navigate',x.id)"><component :is="x.icon" :size="17"/><span>{{x.label}}</span><i v-if="props.current===x.id"></i></button></nav><div class="nav-bottom"><button v-for="x in navBottom" :key="x.id" class="nav-item" :class="{active:props.current===x.id}" @click="emit('navigate',x.id)"><component :is="x.icon" :size="17"/><span>{{x.label}}</span><i v-if="props.current===x.id"></i></button><div class="user-mini"><div class="mini-avatar">C</div><div><b>Christian</b><small>Grade 11</small></div></div></div></div></template>
