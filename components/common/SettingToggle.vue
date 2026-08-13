<script setup>defineProps({label:String,desc:String,model:Boolean}); defineEmits(['toggle'])</script>
<template><div class="setting-toggle"><div><b>{{label}}</b><p>{{desc}}</p></div><button class="toggle" :class="{on:model}" @click="$emit('toggle')"><span></span></button></div></template>
