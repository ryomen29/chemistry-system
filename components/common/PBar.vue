<script setup>defineProps({pct:{type:Number,default:0},color:{type:String,default:'#2c7a50'},h:{type:Number,default:6}})</script>
<template><div class="pbar" :style="{height:h+'px'}"><div :style="{width:`${pct}%`,background:color}"></div></div></template>
