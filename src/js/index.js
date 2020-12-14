import App from './App.vue'
import Home from './Home.vue';
import Sobre from './Sobre.vue';
import User from './User.vue';
import NotFound from './NotFound.vue';

const router = new VueRouter({
    routes:[
        { path:'/',component:Home },
        { path:'/sobre',component:Sobre },
        { path:'/user/:id',component:User },
        { path:'*',component:NotFound }
        
    ]
});

new Vue({
    el:'#app',
    router:router,
    render:h => h(App)
}); 