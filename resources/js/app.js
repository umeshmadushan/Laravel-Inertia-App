import './bootstrap';
import '../css/app.css';

import '/public/assets/js/core/popper.min.js';
import '/public/assets/js/core/bootstrap.min.js';
import '/public/assets/js/plugins/perfect-scrollbar.min.js';
// import '../../public/assets/js/plugins/smooth-scrollbar.min.js';
import '../../public/assets/js/plugins/dragula/dragula.min.js';
// import '../../public/assets/js/plugins/jkanban/jkanban.js';
import '../../public/assets/js/plugins/chartjs.min.js';

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';


import 'https://buttons.github.io/buttons.js';
import '/public/assets/js/argon-dashboard.min.js';
import 'https://static.cloudflareinsights.com/beacon.min.js/vaafb692b2aea4879b33c060e79fe94621666317369993';


const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue, Ziggy)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});


