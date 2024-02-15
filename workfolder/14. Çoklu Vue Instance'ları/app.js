const { createApp } = Vue;

var on = createApp({
  data() {
    return {
      title: "1. Instance Başlığı",
    };
  },
  methods: {

  },
  computed: {
    greet: function () {
      return "App 1 Başlığı";
    },
  },
}).mount("#app-on");

var two = createApp({
  data() {
    return {
      title: "2. Instance Başlığı",
    };
  },
  methods: {
    changeTitle: function () {
      on.title = "1. Instance Başlığı Değişti";
    },
  },
  computed: {
    greet: function () {
      return "App 1 Başlığı";
    },
  },
}).mount("#app-two");
