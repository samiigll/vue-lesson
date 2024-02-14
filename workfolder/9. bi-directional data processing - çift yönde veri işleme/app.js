const { createApp } = Vue;

createApp({
  data() {
    return {};
  },
  methods: {
    updateName: function () {
      console.log("Name updated");
    },

    updateSurname: function () {
      console.log("Name updated");
    },
  },
}).mount("#app");
