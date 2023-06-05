<template>
  <div class="grid-wrapper">
    <HeaderComponent />
    <MainComponent />
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from '@/components/Header.vue'
import MainComponent from '@/components/Main.vue'
import FooterComponent from '@/components/Footer.vue'

export default {
  name: 'MainView',
  components: {
    MainComponent,
    FooterComponent,
    HeaderComponent
  }
}
</script>

<style scoped lang="scss">
.grid-wrapper {
  display: grid;
  grid-template-areas: 'header' 'main' 'footer';
  grid-template-rows: auto 1fr auto;
  height: 1300px;
  width: 100%;
  margin: 0 auto;
}
</style>
