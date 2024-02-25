<!-- //!Ders 19 - İç İçe Bileşenler - Nested Componenets -->
<!-- //!Ders 20 - Bileşene Özel CSS  -->

<template>
  <div>
    <h1>İç Component'in Başlığı</h1>
    <ul>
      <li v-for="(eleman, index) in liste" :key="index">{{ eleman }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      liste: ["Anasayfa", "Hakkımızda", "Blog", "İletişim"],
    };
  },
};
</script>
<style scoped>
h1 {
  color: red;
}
</style>
