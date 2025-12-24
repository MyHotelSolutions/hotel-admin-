<template>
  <div class="flex w-full h-full flex-col gap-6">
    <Tabs :default-value="tabs[0].value" class="flex flex-col gap-4">
      <TabsList>
          <TabsTrigger :value="item.value" v-for="item in tabs">
              {{ item.name }}
          </TabsTrigger>
      </TabsList>

      <TabsContent :value="item.value" class="" v-for="item in tabs"> 
          <div class="flex flex-col gap-2" v-if="bookingstore[item.value].length != 0">
          <Card  v-for="item in bookingstore[item.value]">
              <CardHeader class="flex flex-col gap-6">
              <CardTitle>{{ item.title }} {{ item.first_name }} {{ item.last_name }}</CardTitle>
              <CardDescription class="w-full">
                  <div class="grid grid-cols-6">
                  
                  <div class="flex flex-row gap-3 items-center">
                      <Moon class="w-7 h-7"></Moon>
                      <div class="flex flex-col">
                      <p class="font-light">Total nights</p>
                      <p class="font-black">{{ item.nights }}</p>
                      </div>
                  </div>
  
                  <div class="flex flex-row gap-3 items-center">
                      <CalendarCheck class="w-7 h-7"></CalendarCheck>
                      <div class="flex flex-col">
                      <p class="font-light">Check in</p>
                      <p class="font-black">{{ item.checkin }}</p>
                      </div>
                  </div>
  
                  <div class="flex flex-row gap-3 items-center">
                      <CalendarCheck class="w-7 h-7"></CalendarCheck>
                      <div class="flex flex-col">
                      <p class="font-light">Check out</p>
                      <p class="font-black">{{ item.checkout }}</p>
                      </div>
                  </div>
                  
                  <div class="flex flex-row gap-3 items-center">
                      <Baby  class="w-7 h-7"></Baby>
                      <div class="flex flex-col">
                      <p class="font-light">Child count</p>
                      <p class="font-black">{{ item.childs }}</p>
                      </div>
                  </div>
                  
                  <div class="flex flex-row gap-3 items-center">
                      <UserRound class="w-7 h-7"></UserRound>
                      <div class="flex flex-col">
                      <p class="font-light">Adults count</p>
                      <p class="font-black">{{ item.adults }}</p>
                      </div>
                  </div>
                  <!-- <Button class="ml-auto float-end">View</Button> -->


                   <Sheet>
                      <SheetTrigger as-child>
                        <Button class="ml-auto float-end">
                          View
                        </Button>
                      </SheetTrigger>
                      <SheetContent>
                        <SheetHeader>
                          <SheetTitle>Booking in-details</SheetTitle>
                          <SheetDescription>
                            Make shure other platforms not clash with this booking.
                          </SheetDescription>
                        </SheetHeader>
                          <div class="flex flex-col gap-6 p-4">

                            <!-- personal information -->
                            <div class="flex flex-col gap-3">
                              <h4 class="form-sub-header">Personal infomations</h4>
                              <Separator></Separator>
                              <div class="grid grid-cols-2 gap-2">
                                <div class="flex flex-col gap-1">
                                  <Label>Full name</Label>
                                  <p class="font-light">Mr. gayashan gamage</p>
                                </div>
                                <div class="flex flex-col gap-1">
                                  <Label>Email address</Label>
                                  <p class="font-light">gayashan.randimagamage@gmail.com</p>
                                </div>
                                <div class="flex flex-col gap-1">
                                  <Label>Mobile number</Label>
                                  <p class="font-light">+942837469</p>
                                </div>
                              </div>
                            </div>

                            <!-- booking information -->
                            <div class="flex flex-col gap-3">
                              <h4 class="form-sub-header">Booking infomations</h4>
                              <Separator></Separator>
                              <div class="grid grid-cols-2 gap-2">
                                <div class="flex flex-col gap-1">
                                  <Label>From</Label>
                                  <p class="font-light">2025 Dec 26</p>
                                </div>
                                <div class="flex flex-col gap-1">
                                  <Label>To</Label>
                                  <p class="font-light">2025 Dec 30</p>
                                </div>
                                <div class="flex flex-col gap-1">
                                  <Label>Total night</Label>
                                  <p class="font-light">03</p>
                                </div>
                                <div class="flex flex-col gap-1">
                                  <Label>Child count</Label>
                                  <p class="font-light">03</p>
                                </div>
                                <div class="flex flex-col gap-1">
                                  <Label>Adult count</Label>
                                  <p class="font-light">06</p>
                                </div>
                                <div class="flex flex-col gap-1">
                                  <Label>Book by</Label>
                                  <p class="font-light">Guest</p>
                                </div>
                              </div>
                            </div>

                            <!-- payment informations -->
                            <div class="flex flex-col gap-3">
                              <h4 class="form-sub-header">Payment Time</h4>
                              <Separator></Separator>
                              <div class="grid grid-cols-2 gap-2">
                                <div class="flex flex-col gap-1">
                                  <Label>Total</Label>
                                  <p class="font-light">Rs. 65,000.00</p>
                                </div>
                                <div class="flex flex-col gap-1">
                                  <Label>Payment</Label>
                                  <p class="font-light">Rs. 25,000.00</p>
                                </div>
                                <div class="flex flex-col gap-1">
                                  <Label>Payment type</Label>
                                  <p class="font-light">Card </p>
                                </div>
                                <div class="flex flex-col gap-1">
                                  <Label>Due</Label>
                                  <p class="font-light">Rs. 40,000.00</p>
                                </div>
                              </div>
                            </div>

                            <!-- booking times -->
                            <div class="flex flex-col gap-3">
                              <h4 class="form-sub-header">Booking Time</h4>
                              <Separator></Separator>
                              <div class="grid grid-cols-2 gap-2">
                                <div class="flex flex-col gap-1">
                                  <Label>Booking time</Label>
                                  <p class="font-light">2025 Jan 25th 12:23 p.m</p>
                                </div>
                                <div class="flex flex-col gap-1">
                                  <Label>Confirmed time</Label>
                                  <p class="font-light">2025 Jan 25th 12:23 p.m</p>
                                </div>
                                <div class="flex flex-col gap-1">
                                  <Label>Cancel time</Label>
                                  <p class="font-light">2025 Jan 25th 12:23 p.m</p>
                                </div>
                                <div class="flex flex-col gap-1">
                                  <Label>Refund time</Label>
                                  <p class="font-light">2025 Jan 25th 12:23 p.m</p>
                                </div>
                              </div>
                            </div>

                          </div>

                        <SheetFooter>
                          <div class="grid grid-cols-2 gap-2">
                            <Button type="submit">
                              Accept Booking
                            </Button>
                            <SheetClose as-child>
                              <Button variant="outline">
                                Cancel Booking
                              </Button>
                            </SheetClose>
                          </div>
                        </SheetFooter>
                      </SheetContent>
                    </Sheet>


                  </div>
              </CardDescription>
              </CardHeader>
              <CardContent class="grid gap-6">
              </CardContent>
          </Card>
          </div>
          <div class="" v-else>
          <Card>
              <CardContent>
              <CardHeader class="flex flex-row items-center">
                  <Frown></Frown>
                  <h3 class="font-semibold">
                  Sorry.. there are no any bookings
                  </h3>
              </CardHeader>
              </CardContent>
          </Card>
          </div>
      </TabsContent>
    </Tabs>
  </div>
</template>

<script setup>
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'
import { Baby, CalendarCheck, Frown, Moon, UserRound } from 'lucide-vue-next'
import { ref } from 'vue'
import { useBookingStore } from '@/store/booking';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Separator } from '@/components/ui/separator'

const bookingstore = useBookingStore()

const tabs = ref([
    // do not foget to add same 'value' varible in to bookingStore to run without error
    {
        name : 'Not Confirmed',
        value : 'notconfimed'
    },
    {
        name : 'Today',
        value : 'today'
    },
    {
        name : 'Tommorow',
        value : 'tommorow'
    },
])

</script>
