<template>
  <div class="flex flex-row w-full min-h-screen h-auto">
    <!-- sidebar -->
      <SidebarProvider class="min-w-0 w-screen ">
        <Sidebar>
          <SidebarHeader class="pt-10">
            <div class="flex flex-row gap-4">
              <div class="w-12 h-12 rounded-full bg-black"></div>
              <div class="flex flex-col">
                <h1 class="">TGEV</h1>
                <h1 class="text-sm">Manager</h1>
              </div>
            </div>
          </SidebarHeader>

          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Booking management</SidebarGroupLabel>
              <SidebarSeparator />
              <SidebarGroupContent class="pb-10">
                <SidebarMenu>
                  <SidebarMenuItem v-for="item in items" :key="item.title">
                    <SidebarMenuButton as-child :is-active="route.path == item.url">
                      <!-- <a :href="item.url"> -->
                      <RouterLink :to="item.url">
                        <component :is="item.icon" />
                        <span>{{ item.title }}</span>
                      </RouterLink>
                      <!-- </a> -->
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
              <SidebarGroupLabel>Platform management</SidebarGroupLabel>
              <SidebarSeparator />
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem v-for="item in service" :key="item.title">
                    <SidebarMenuButton as-child :is-active="route.path == item.url">
                      <!-- <a :href="item.url"> -->
                        <RouterLink :to="item.url">
                          <component :is="item.icon" />
                          <span>{{ item.title }}</span>
                        </RouterLink>
                      <!-- </a> -->
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          
          <SidebarFooter>
            <AlertDialog>
                <AlertDialogTrigger as-child>
                <div class="flex flex-col justify-center items-center pb-10">
                    <Button variant="default" class="w-fit px-10">
                        Log Out
                    </Button>
                </div>
                </AlertDialogTrigger>
                <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                    This acction definietly force you to enter you to add account credencials when you login withing today.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction @click="router.push('/auth/login')">Log Out</AlertDialogAction>
                </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
            <p class="font-medium text-xs text-gray-400 text-center"><span class="text-sm font-black">Tea Garden Eco Villas - Morawaka</span><br>Developed by MyHotel Solution <br>© 2025 All Rights Reserved <br>Contact: 070 669 7900</p>
          </SidebarFooter>
        </Sidebar>
        <SidebarTrigger></SidebarTrigger>
        
        <SidebarInset>
          <!-- page renderd -->
          <div class="pr-4 pt-20 w-full">
            <RouterView></RouterView>
          </div>
        </SidebarInset>
      </SidebarProvider>
  </div>
</template>

<script setup>
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import Button from './ui/button/Button.vue';
import SidebarProvider from './ui/sidebar/SidebarProvider.vue';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarInset, SidebarTrigger, SidebarGroup, SidebarGroupLabel, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarSeparator } from './ui/sidebar';
import { Calendar, CalendarCheck, CalendarX, ChartLine, CircleDollarSign, ClockPlus, Home, HousePlus, Inbox, Mail, MessageCircleMore, Search, Settings, ShieldUser } from 'lucide-vue-next';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()
const items = [
  {
    title: 'Upcomming bookings',
    url: '/booking',
    icon: ClockPlus,
    active : false
  },
  {
    title: 'Booking Calendar',
    url: '/calender',
    icon: CalendarCheck,
    active : false
  },
  {
    title: 'Set Unavailability',
    url: '/unavailability',
    icon: CalendarX,
    active : false
  },
  {
    title: 'Statistics',
    url: '/statistics',
    icon: ChartLine,
    active : false
  },
  {
    title: 'Payment Recods',
    url: '/paymentrecods',
    icon: CircleDollarSign,
    active : false
  }
]

const service = [
  {
    title: 'Admin users',
    url: '/platform/adminusers',
    icon: ShieldUser,
    active : false
  },
  {
    title: 'Email service',
    url: '/platform/email',
    icon: Mail,
    active : false
  },
  {
    title: 'SMS service',
    url: '/platform/sms',
    icon: MessageCircleMore,
    active : false
  },
  {
    title: 'Room Management',
    url: '/rooms',
    icon: HousePlus,
    active : true
  },
]

</script>