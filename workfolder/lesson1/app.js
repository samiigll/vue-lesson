const { createApp } = Vue;

createApp({
  data() {
    return {
      name: "Sami", //String
      a: 5,
      b: 10,
    };
  },
  methods: {
    calculate: function (isim, Planet) {
      // return "Hello " + Planet + "! " + isim;
      return "Hello " + Planet + "! " + this.name;
    },
    topla: function(){
      return this.a + this.b;
    }
  },
}).mount("#ilk-uygulama");
