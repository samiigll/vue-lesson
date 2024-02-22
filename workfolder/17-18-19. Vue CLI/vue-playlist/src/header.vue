<template>
  <ul>
    <li v-for="(eleman, index) in liste" :key="index">{{ eleman }}</li>
  </ul>
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
