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
  highlightColor: 0xfff8f5,
  midtoneColor: 0xf5833f,
  lowlightColor: 0xffb073,
  baseColor: 0xfa5993,
  blurFactor: 0.45,
  speed: 0.30,
  zoom: 0.60,
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
