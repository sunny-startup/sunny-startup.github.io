<template>
  <div class="overflow-y-auto position-fixed flex lg:flex-row flex-col w-full h-full top-0 left-0 p-2 z-[200] lg:justify-center md:justify-start align-center xl:space-x-[120px] lg:space-x-[16px] space-y-[16px] lg:space-y-0">
    <div class="bg-[#ffffff80] backdrop-blur-md lg:py-[68px] lg:px-[72px] py-[20px] px-[16px] rounded-[8px] flex flex-col justify-center align-center space-y-8">
      <img src="/artiverse.png" class="lg:h-[28px] h-[20px] lg:w-[221px] w-[160.14px]" />
      <img src="/app.webp" class="h-[146px] lg:h-[350px] lg:max-w-[478px] min-w-[199.39px]" />
      <p class="max-w-[548px] font-[300] text-center text-black italic">“Our goal is to help Philippines be the number one creative economy in ASEAN by 2030” - Creators</p>
    </div>
    <div class="xl:p-[96px] p-8 bg-white rounded-[8px] drop-shadow-xl lg:space-y-[32px] space-y-[16px]">
      <template v-if="!successRef">
        <div class="max-w-[508px] flex flex-col justify-center align-center lg:space-y-[28px] space-y-[16px]">
          <div class="text-xl">
            <span>Join the </span>
            <span class="p-0 m-0 bg-gradient-to-r from-orange-500 to-indigo-500 bg-clip-text text-transparent ml-1">Creative Revolution!</span>
          </div>
          <p class="text-center lg:text-md text-sm">
            Artiverse is almost here! Get on the waitlist and be one of the first to experience a world made by artists, for artists.
          </p>
        </div>
        <v-form @submit="submit" @submit.prevent validate-on="submit" class="space-y-[4px]">
          <v-text-field :disabled="loadingRef" variant="outlined" label="Email" v-model="emailRef" :rules="emailRules" ></v-text-field>
          <v-btn :loading="loadingRef" variant="flat" type="submit" color="black" append-icon="mdi-arrow-right" class="min-h-[52px] w-full">Join Waitlist</v-btn>
        </v-form>
        <p class="max-w-[508px] text-center lg:text-md text-sm">By signing up, you’ll also get listed on the DTI’s official artist registry and enjoy artist benefits.</p>
        <div class="lg:text-md text-sm flex flex-row justify-center">
          <span>Follow us on</span>
          <a href="https://www.facebook.com/profile.php?id=61565206343705" target="_blank" class="mx-1 text-[#7A29B7]">Facebook</a>
          <span class="hidden xl:block">to stay updated on our launch!</span>
        </div>
      </template>
      <template v-else>
        <div class="max-w-[508px] flex flex-col justify-center align-center lg:space-y-[28px] space-y-[16px]">
          <div class="text-xl flex flex-col justify-center align-center">
            <span>You're In! 🎉</span>
            <span>Welcome to the Artiverse Waitlist!</span>
          </div>
          <p class="text-center lg:text-md text-sm">
            Thank you for joining us! We’re so excited to have you be part of Artiverse — <b class="bg-gradient-to-r from-orange-500 to-indigo-500 bg-clip-text text-transparent">the first platform made just for Filipino artists</b> like you! 🎨
          </p>
          <p class="text-center lg:text-md text-sm">
            We’re excited to have you with us—spread the word and invite your friends!
          </p>
          <p class="text-center lg:text-md text-sm">
            You can follow us on Facebook for the latest news and sneak peeks!
          </p>
        </div>
        <v-btn variant="flat" type="submit" color="black" append-icon="mdi-facebook" class="min-h-[52px] w-full" href="https://www.facebook.com/profile.php?id=61565206343705" target="_blank">Visit our Facebook page</v-btn>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
  import axios from 'axios';
import { ref } from 'vue';
import { SubmitEventPromise } from 'vuetify';

  const loadingRef = ref(false);
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const emailRef = ref('');
  const emailRules = ref([
    (value: string) => !!value || 'Email is required',
    (value: string) => !!emailRegex.test(value) || 'Please enter a valid email address',
  ]);

  const successRef = ref(false);

  const submit: (((e: SubmitEventPromise) => any) & ((e: SubmitEventPromise) => any)) = (event) => {
    if(emailRules.value.every(rule => rule(emailRef.value) === true)) {
      loadingRef.value = true;

      axios.post('https://directus.waitlist.artiverse.online/items/waitlist', { email: emailRef.value }).finally(() => {
        setTimeout(() => {
          loadingRef.value = false;
          emailRef.value = '';
          successRef.value = true;
        }, 1000);
      });
    }
  }
</script>
