const { createApp } = Vue;

createApp({
  data() {
    return {
      name: "Sami", //String
      job: "Mühendis", //String
      age: 25, //Number
      giyim: {
        sapka: true, //Boolean
        pantolon: "kot", //String
        tshirt: false, //Boolean
      },
      yetenekler: ["Yazılım", "Tasarım", "Yönetim"], //Array
    };
  },
}).mount("#ilk-uygulama");
