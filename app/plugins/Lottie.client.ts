import { DotLottieVue } from "@lottiefiles/dotlottie-vue";

declare module "vue" {
  interface GlobalComponents {
    Lottie: typeof DotLottieVue;
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("Lottie", DotLottieVue);
});
