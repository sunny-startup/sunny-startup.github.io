<template>
  <div id="background"></div>
</template>

<script setup lang="js">
  import { onMounted } from 'vue';
  import * as THREE from 'three';
  import FOG from 'vanta/dist/vanta.fog.min.js';

  onMounted(() => {
    const fogEffect = FOG({
      el: "#background",
      mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  highlightColor: 0xffc29e,
  midtoneColor: 0xe2b4ff,
  lowlightColor: 0xd9c3ff,
      THREE,
    });
  });
</script>

<style lang="css" scoped>
  #background {
    position: fixed;
    top: 0px;
    width: 100dvw;
    height: 100dvh;
    padding:0px;
    overflow: hidden;
  }

  #background > canvas {
    position: absolute;
    top: 0px;
    left: 15px !important;
    width: 100lvw !important;
    padding: 0px;
    margin: 0px;
  }
</style>
