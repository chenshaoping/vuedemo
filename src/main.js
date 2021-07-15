import { createApp } from 'vue'
import App from './App.vue'
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import store from './store.js';

const app = createApp(App);
console.log("store",store);
app.use(store);
app.mount('#app');
