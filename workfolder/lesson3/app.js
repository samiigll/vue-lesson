const { createApp } = Vue;

createApp({
  data() {
    return {
      name: "Sami", //String
      job: "Developer",
      website: "https://www.google.com",
      websiteTag:
        '<a href="https://www.google.com">Google - Bu da HTML Tag eklenerek yapıldı </a>',
    };
  },
  methods: {},
}).mount("#app");
