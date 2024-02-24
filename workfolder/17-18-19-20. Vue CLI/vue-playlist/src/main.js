//!Ders 19 - İç İçe Bileşenler - Nested Componenets
//!Ders 20 - Bileşene Özel CSS - 
//!Ders 21 - İç İçe Bileşen Örnekleri - Nested Componenets Example

import { createApp } from "vue";

import App from "./App.vue";
import AppHeader from "./header.vue";
import AppFooter from "./footer.vue";

const app = createApp(App);

// Bileşenleri global olarak kaydet
app.component("app-header", AppHeader);
app.component("app-footer", AppFooter);

// Uygulamayı monte et
app.mount("#app");
