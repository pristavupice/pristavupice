import Vue from 'vue'
import VueRouter from 'vue-router'

// definition of routes to be used
import Uvod from '@/views/uvod/Uvod.vue'
import Nabidka from '@/views/nabidka/Nabidka.vue'
import Fotogalerie from '@/views/fotogalerie/Fotogalerie.vue'
import Onas from '@/views/onas/Onas.vue'
import Kontakty from '@/views/kontakty/Kontakty.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    { 
        path: '/',
        name: 'UvodLanding',
        component: Uvod
    },
    { 
        path: '/uvod',
        name: 'Uvod',
        component: Uvod
    },
    { 
        path: '/nabidka', 
        name: 'Nabidka',
        component: Nabidka
    },
    { 
        path: '/fotogalerie', 
        name: 'Fotogalerie',
        component: Fotogalerie
    },
    { 
        path: '/onas', 
        name: 'Onas',
        component: Onas
    },
    { 
        path: '/kontakty', 
        name: 'Kontakty',
        component: Kontakty
    },
  ]
})