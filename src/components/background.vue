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
      highlightColor: 0xff9c00,
      midtoneColor: 0xee00ff,
      lowlightColor: 0x76beff,
      baseColor: 0x5900a0,
      blurFactor: 0.59,
      speed: 0.70,
      zoom: 0.20,
      THREE,
    });
  });
</script>

<style lang="css">
  #background {
    position: fixed;
    top: 0px;
    width: 100dvw;
    height: 100dvh;
    padding:0px;
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
