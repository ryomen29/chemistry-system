<script setup>
import { computed } from 'vue'
const props=defineProps({subject:String}); const colors={Chemistry:['#eef7f2','#2c7a50'],Biology:['#fdf2f8','#be185d'],Physics:['#eff6ff','#1d4ed8'],'Earth Science':['#fffbeb','#92400e']}; const style=computed(()=>{const c=colors[props.subject]||['#f3f4f6','#6b7280'];return {background:c[0],color:c[1]}})
</script>
<template><span class="subject-badge" :style="style">{{subject}}</span></template>
