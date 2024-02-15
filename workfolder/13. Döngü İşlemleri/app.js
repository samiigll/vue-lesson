const { createApp } = Vue;

createApp({
  data() {
    return {
      karakterler: ["Adnan", "Ümit", "Veli", "Yusuf", "Zeki"],
      ozellikler: [
        { ad: "Adnan", yas: 25, cinsiyet: "Erkek" },
        { ad: "Ümit", yas: 30, cinsiyet: "Erkek" },
        { ad: "Veli", yas: 35, cinsiyet: "Erkek" },
        { ad: "Yusuf", yas: 40, cinsiyet: "Erkek" },
        { ad: "Zeki", yas: 45, cinsiyet: "Erkek" },
      ]
    };
  },
  methods: {

  },
  computed: {
    
  },
}).mount("#app");
