import {createRouter , createWebHashHistory} from 'vue-router'
import Home from '@/view/HomePage.vue'
const routes = [
    {
        path:'/',
        name: 'Home',
        component:Home
    },
    {
        path:'/list',
        name: 'List',
        component:()=> import('@/view/ListPage.vue')
    },
    {
        path:'/setting',
        name: 'Setting',
        component:()=> import('@/view/SettingsPage.vue'),
        children:[
            {
                path:'/setting/expert',
                name:"Expert",
                component:()=>import('@/components/ExpertPage.vue')
            }
        ]
    },
    {
        path:'/new-doctor',
        name: 'newDoctor',
        component:()=> import('@/view/NewDoctor.vue')
    },
    {
        path:'/doctor/edit/:id',
        name: 'EditPage',
        component:()=> import('@/components/EditPage.vue'),
        props:true
    },
    {
        path:'/doctor/:id',
        name: 'DoctorDetail',
        component:()=> import('@/components/doctorDetail.vue'),
        props:true
    },
]
export default  createRouter({
    history:createWebHashHistory(),
    routes
})