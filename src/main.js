import App from './App.vue'

import router from './routes/route'
import './style/main.css'
import 'animate.css';

import 'aos/dist/aos.css';  // Import AOS CSS
import Aos from 'aos';

import Cart from './components/Cart.vue'
import OffcanSideBar from './components/OffcanSideBar.vue'
import Loading from './components/Loading.vue'

import { useCart } from './useCart'
import { createApp } from 'vue'

import ToastPlugin from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';

// bootstrap link
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';



const app = createApp(App);

app.use(ToastPlugin);

app.mixin({
    mounted() {
      Aos.init();  // Initialize AOS with default settings
    }
});

app.component('Cart',Cart);
app.component('Loading',Loading);
app.component('OffcanSideBar',OffcanSideBar);

app.component('useCart',useCart);
// app.use(router)

app.mount('#app')
