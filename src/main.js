import Vue from 'vue'
import 'mint-ui/lib/style.css'
import App from './App.vue'

import {Header} from 'mint-ui'
Vue.component(Header.name,Header);

import './mui/css/mui.min.css'

var vm = new Vue({
    el:'#app',
    data:{
        msg:'zzzzzz'
    },
    render:ele=>ele(App)
});

// (function(){
//    async function async1(){
//        console.log('async1 start');
//        await  async2();
//        console.log('async1 end');
//    } 
//    async function async2(){
//        console.log('async2');
//    }
//    console.log('script start');
//    setTimeout(function(){
//        console.log('settimeout');
//    },0)
//    async1();
//    new Promise(function(resolve){
//        console.log('promise1');
//        resolve();
//    }).then(function(){
//        console.log('promise2');
//    });
//    console.log('script end');
// })()