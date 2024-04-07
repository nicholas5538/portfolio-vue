import { Vue3Lottie } from "vue3-lottie";

declare module "vue" {
  interface GlobalComponents {
    Lottie: typeof Vue3Lottie;
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("Lottie", Vue3Lottie);
});
