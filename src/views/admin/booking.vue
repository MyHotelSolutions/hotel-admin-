<template>
    <div class="w-full min-h-[90vh] h-auto">
        <!-- page header -->
        <div class="flex flex-row justify-between items-center">
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
                                        <Input id="adults" type="Number" min="1" max="16" value="1"/>
                                    </div>
                                    <div class="flex flex-col gap-2">
                                        <Label to="childs" class="text-xs">Childs Count</Label>
                                        <Input id="childs" type="Number" min="1" max="15" value="0"/>
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

const bookingPlatform = ref('direct')

const getValues = () => {
    console.log(bookingPlatform.value)
}
</script>
