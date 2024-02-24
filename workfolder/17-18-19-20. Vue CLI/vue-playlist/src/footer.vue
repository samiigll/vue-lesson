<!-- //!Ders 19 - İç İçe Bileşenler - Nested Componenets -->
<!-- //!Ders 20 - Bileşene Özel CSS -  -->

<template>
  <p>{{ copyright }} - {{ year }}</p>
</template>

<script>
export default {
  data() {
    return {
      copyright: "Tüm Hakları Saklıdır. ©",
      year: new Date().getFullYear(),
    };
  },
};
</script>

