<!-- //!Ders 19 - İç İçe Bileşenler - Nested Componenets -->
<!-- //!Ders 20 - Bileşene Özel CSS -  -->

<template>
  <h1>Bu Root Compenet'in Başlığı</h1>
  <app-header></app-header>
  <app-footer></app-footer>
</template>

<script>
import AppHeader from "./header.vue";
import AppFooter from "./footer.vue";

export default {
  components: {
    "app-header": AppHeader,
    "app-footer": AppFooter,
  },
  data() {
    return {};
  },
};
</script>

<style>
h1 {
  color: green;
}
</style>


