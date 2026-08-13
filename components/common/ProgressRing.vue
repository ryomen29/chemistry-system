<script setup>
import { computed } from 'vue'
const props=defineProps({pct:{type:Number,default:0},size:{type:Number,default:72},sw:{type:Number,default:7},color:{type:String,default:'#2c7a50'}})
const radius=computed(()=> (props.size-props.sw)/2); const circumference=computed(()=>2*Math.PI*radius.value); const offset=computed(()=>circumference.value-(props.pct/100)*circumference.value)
</script>
<template><div class="progress-ring" :style="{width:size+'px',height:size+'px'}"><svg :width="size" :height="size" :viewBox="`0 0 ${size} ${size}`" style="transform:rotate(-90deg)"><circle :cx="size/2" :cy="size/2" :r="radius" fill="none" stroke="#e5e7eb" :stroke-width="sw"/><circle :cx="size/2" :cy="size/2" :r="radius" fill="none" :stroke="color" :stroke-width="sw" :stroke-dasharray="circumference" :stroke-dashoffset="offset" stroke-linecap="round"/></svg><slot/></div></template>
