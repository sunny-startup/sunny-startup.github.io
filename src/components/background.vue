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
  highlightColor: 0xffeea5,
  midtoneColor: 0xe5aefc,
  lowlightColor: 0xffc1dd,
  baseColor: 0xfff6e4,
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
