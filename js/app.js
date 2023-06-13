import store from './store.js'
import utilities from './utilities.js'
const app = Vue.createApp({
    data() {
        return {
            title: 'Spectrum',
            spinner: false,
            api: 'https://script.google.com/macros/s/AKfycbyV7JY10hCStCNKVo_mLbhNcAzXFkHviUFYStVM6xdjWhkRJ4LZiyzQg2K7XJU8s3YpBw/exec',
            store,
            utilities

        }
    },
    methods:{
        generateStars(STAR_COUNT){
            var randomNumber = (min, max) => {
                return Math.floor(Math.random() * (max - min + 1)) + min
            }
            
            // const STAR_COUNT = 50
            let result = ""
            for(let i = 0; i < STAR_COUNT; i++){
                result += `${randomNumber(-50, 50)}vw ${randomNumber(-50, 50)}vh ${randomNumber(0, 3)}px ${randomNumber(0, 3)}px #fff,`
            }
            console.log(result.substring(0, result.length - 1))
        }
    },
    mounted(){
        AOS.init();
    }
})


import swiper from './components/swiper/swiper.js'
app.component('swiper-container', swiper)

import title from './components/title/title.js'
app.component('title-section', title)

import navbar from './components/navbar/navbar.js'
app.component('navbar-section', navbar)

import hero from './components/hero/hero.js'
app.component('hero-section', hero)

import services from './components/services-section/services-section.js'
app.component('services-section', services)

import pot from './components/pot/pot.js'
app.component('pot', pot)

import projects from './components/projects-section/projects-section.js'
app.component('projects-section', projects)


import contact from './components/contact/contact.js'
app.component('contact-section', contact)

app.mount('#app')