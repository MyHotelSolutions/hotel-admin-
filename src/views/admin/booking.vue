<template>
    <div class="w-full min-h-[90vh] h-auto">
        <!-- page header -->
        <div class="flex flex-row justify-between items-center pb-10">
            <Pageheader pagetitle="Upcomming bookings"></Pageheader>
            
            <!-- add new booking by manually -->
            <Dialog>
                <form>
                <DialogTrigger as-child>
                    <Button variant="default">
                    Open Dialog
                    </Button>
                </DialogTrigger>
                <DialogContent class="w-full">
                    <DialogHeader>
                    <DialogTitle>Add New Booking</DialogTitle>
                    <DialogDescription>
                        This is for add booking get from externaly from the website.
                    </DialogDescription>
                        </DialogHeader>
                        <div class="grid gap-4">
                            
                            <!-- for personal details -->
                            <div class="flex flex-col gap-4">
                                <div class="">
                                    <h4 class="form-sub-header">Personal details</h4>
                                    <hr class="">
                                </div>
                                <RadioGroup default-value="comfortable" class="grid grid-cols-3 w-[50%]">
                                    <div class="flex items-center space-x-2">
                                        <RadioGroupItem id="r1" value="Mr." />
                                        <Label for="r1">Mr.</Label>
                                    </div>
                                    <div class="flex items-center space-x-2">
                                        <RadioGroupItem id="r2" value="Ms." />
                                        <Label for="r2">Ms.</Label>
                                    </div>
                                    <div class="flex items-center space-x-2">
                                        <RadioGroupItem id="r3" value="Miss." />
                                        <Label for="r3">Miss.</Label>
                                    </div>
                                </RadioGroup>
                                <div class="grid grid-cols-2 gap-2">
                                    <Input placeholder="First Name"/>
                                    <Input placeholder="Last Name"/>
                                    <Input placeholder="Mobile number"/>
                                </div>   
                            </div>

                            <!-- for booking details -->
                            <div class="flex flex-col gap-4">
                                <div class="">
                                    <h4 class="form-sub-header">Booking details</h4>
                                    <hr class="">
                                </div>
                                <div class="grid grid-cols-2 gap-y-3 gap-x-2">
                                    <Datepicker class="max-w-54"></Datepicker>
                                    <Datepicker></Datepicker>
                                    <div class="flex flex-col gap-2">
                                        <Label to="adults" class="text-xs">Adults Count</Label>
                                        <Input id="adults" type="Number" min="1" max="16"/>
                                    </div>
                                    <div class="flex flex-col gap-2">
                                        <Label to="childs" class="text-xs">Childs Count</Label>
                                        <Input id="childs" type="Number" min="1" max="15"/>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- for room combination details -->
                            <div class="flex flex-col gap-4">
                                <div class="">
                                    <h4 class="form-sub-header">Rooms combinations</h4>
                                    <hr class="">
                                </div>
                                <div class="grid grid-cols-2 gap-4">
                                    <div class="flex items-center gap-3">
                                        <Checkbox id="room1" />
                                        <Label for="room1">Down flow - left</Label>
                                    </div>
                                    <div class="flex items-center gap-3">
                                        <Checkbox id="room2" />
                                        <Label for="room2">First flow left</Label>
                                    </div>
                                    <div class="flex items-center gap-3">
                                        <Checkbox id="room3" />
                                        <Label for="room3">Down flow - right</Label>
                                    </div>
                                    <div class="flex items-center gap-3">
                                        <Checkbox id="room4" />
                                        <Label for="room4">First frol - right</Label>
                                    </div>
                                </div>
                            </div>

                            <!-- for booking platform details -->
                            <div class="flex flex-col gap-4">
                                <div class="">
                                    <h4 class="form-sub-header">Booking platform</h4>
                                    <hr class="">
                                </div>
                                <div class="flex flex-col">
                                    <RadioGroup  default-value="direct" class="grid grid-cols-2 gap-4" v-model="bookingPlatform">
                                        <div class="flex items-center space-x-2">
                                            <RadioGroupItem id="direct" value="direct"/>
                                            <Label for="direct">Direct</Label>
                                        </div>
                                        <div class="flex items-center space-x-2">
                                            <RadioGroupItem id="booking" value="booking" />
                                            <Label for="booking">Booking.com</Label>
                                        </div>
                                        <div class="flex items-center space-x-2">
                                            <RadioGroupItem id="agaoda" value="agaoda" />
                                            <Label for="agaoda">Agoda.com</Label>
                                        </div>
                                        <div class="flex items-center space-x-2">
                                            <RadioGroupItem id="airbnb" value="airbnb" />
                                            <Label for="airbnb">Airbnb</Label>
                                        </div>
                                    </RadioGroup>
                                </div>
                                <div class="flex flex-col gap-2" v-if="bookingPlatform != 'direct'">
                                    <Label  class="text-xs">Reference ID</Label>
                                    <Input placeholder="XXX XX" class="w-[50%]"/>
                                </div>
                            </div>
                            
                            <!-- refference of the booking -->
                            <div class=""></div>

                            <!-- for booking detials -->
                            <div class=""></div>

                            <!-- rooms combination -->
                            <div class=""></div>
                        </div>
                        <DialogFooter>
                    <DialogClose as-child>
                        <Button variant="outline">
                        Cancel
                        </Button>
                    </DialogClose>
                    <Button type="submit" @click="getValues">
                        Add Booking
                    </Button>
                    </DialogFooter>
                </DialogContent>
                </form>
            </Dialog>
        </div>

        <!-- page content -->
        <div class="">
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
                            Sorry.. there are no bookings
                            </h3>
                        </CardHeader>
                        </CardContent>
                    </Card>
                    </div>
                </TabsContent>
            </Tabs>
        </div>

        <Sonner position="top-center" :expand="true"></Sonner>
    </div>
</template>

<script setup>
import Pageheader from '../../components/pageheader.vue';
import Button from '../../components/ui/button/Button.vue';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  RadioGroup,
  RadioGroupItem,
} from '@/components/ui/radio-group'
import Datepicker from '../../components/datepicker.vue';
import { Checkbox } from '@/components/ui/checkbox'
import { ref } from 'vue';
import Sonner from '@/components/ui/sonner/Sonner.vue';
import { toast } from 'vue-sonner';
import 'vue-sonner/style.css'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'
import { Baby, CalendarCheck, Frown, Moon, UserRound } from 'lucide-vue-next'
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
const bookingPlatform = ref('direct')

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

const toastMessage = (type,title, des) => {
    // this is for show toas message
    if(type == 'error'){
        toast.error(title, {
                description : des 
            })
    }else if( type == 'success'){
        toast.success(title, {
                description : des 
            })
            
    }else if( type == 'info'){
        toast.info(title, {
                description : des 
            })
            
    }else if( type == 'warning'){
        toast.warning(title, {
                description : des 
            })
    }
}

const getValues = () => {
    toastMessage("error", "Sory", "your credenials are not match. try again or reset the password")
    // console.log(bookingPlatform.value)
}
</script>
