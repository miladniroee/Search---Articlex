import './assets/style.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import NavbarLink from './components/NavbarLink.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faSearch , faCircleXmark, faCirclePlus, faShareNodes } from '@fortawesome/free-solid-svg-icons';

const app = createApp(App)

library.add(faSearch, faCircleXmark,faCirclePlus, faShareNodes)

app.component('NavbarLink', NavbarLink)
.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)

app.mount('#app')
