const { createApp } = Vue;

const eleman = {
  template:
    '<p>Ben Eleman Taginin içerisindeyim. Benim adım {{ name }}</p><button @click="changeName">İsmi Değiştir</button>',
  data() {
    return {
      name: "Adnan Kaya",
    };
  },

  methods: {
    changeName: function () {
      this.name = "Bihter Kaya";
    },
  },
};

var one = createApp({
  componets: {
    "eleman": eleman
  },
  data() {
    return {};
  },
}).mount("#app-on");

var two = createApp({
  componets: {
    "eleman": eleman
  },
  data() {
    return {
      message: "Merhaba, Ben İkinci Uygulama",
    };
  },
}).mount("#app-two");
