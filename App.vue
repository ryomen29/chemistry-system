<script setup>
import { watch } from 'vue'
import { useAppState } from './state/appState'

const { dark, prefs } = useAppState()
watch(dark, value => { document.documentElement.classList.toggle('dark-mode', value) }, { immediate: true })
watch(() => prefs.value.dyslexic, value => { document.documentElement.classList.toggle('dyslexic-font', value) }, { immediate: true })
</script>

<template>
  <RouterView />
</template>
