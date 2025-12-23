import Login from "@/views/auth/login.vue";
import { createRouter, createWebHistory } from "vue-router";
import init from "@/views/auth/init.vue";
import Account from "@/views/auth/account.vue";
import Verification from "@/views/auth/verification.vue";
import Passwordreset from "@/views/auth/passwordreset.vue";
import Admin from "@/views/admin/admin.vue";
import booking from "@/views/admin/booking.vue";
import Calender from "@/views/admin/calender.vue";
import Unavailability from "@/views/admin/unavailability.vue";
import Statistics from "@/views/admin/statistics.vue";
import Rooms from "@/views/admin/rooms.vue";
import test from "@/views/test.vue"
import Paymentrecods from '@/views/admin/paymentrecods.vue'
import Platform from '@/views/platform/platform.vue'
import Adminuser from '@/views/platform/adminuser.vue'
import Email from '@/views/platform/email.vue'
import Sms from '@/views/platform/sms.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
        path : '/',
        name : 'admin',
        component : Admin,
        redirect : { name : 'booking'},
        children : [
            {
                path : '/booking',
                name : 'booking',
                component : booking
            },
            {
                path : '/calender',
                name : 'calender',
                component : Calender
            },
            {
                path : '/unavailability',
                name : 'unavailability',
                component : Unavailability
            },
            {
                path : '/statistics',
                name : 'statistics',
                component : Statistics
            },
            {
                path : '/rooms',
                name : 'rooms',
                component : Rooms
            },
            {
                path : '/paymentrecods',
                name : 'paymentrecods',
                component : Paymentrecods
            },
        ]
    },
    {
      path: "/auth",
      name: "auth",
      component: init,
      redirect : { name : 'login'},
      children : [
        {
            path : 'login',
            name : 'login',
            component : Login
        },
        {
            path : 'account',
            name : 'account',
            component : Account
        },
        {
            path : 'verification',
            name : 'verification',
            component : Verification
        },
        {
            path : 'passwordreset',
            name : 'passwordreset',
            component : Passwordreset
        },
      ]
    },
    {
        path : '/platform',
        name : 'platform',
        component : Platform,
        redirect : {name : 'adminusers'},
        children : [
            {
                path : 'sms',
                name : 'sms',
                component : Sms
            },
            {
                path : 'email',
                name : 'email',
                component : Email
            },
            {
                path : 'adminusers',
                name : 'adminusers',
                component : Adminuser
            },
        ]
    }
  ],
});

export default router;