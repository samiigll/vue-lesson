const { createApp } = Vue;

createApp({
  data() {
    return {
      age: 20,
      a: 0,
      b: 0
    };
  },
  methods: {
    aYaEkle: function () {
      console.log("A kontrol edildi");
      return this.a + this.age;
    },
    bYeEkle: function () {
      console.log("B kontrol edildi");
    },
  },
  computed: {
    aYaEkle: function () {
      console.log("A kontrol edildi");
      return this.a + this.age;
    },
    bYeEkle: function () {
      console.log("B kontrol edildi");
    },
  },
}).mount("#app");
