<template>
    <!-- outer layer -->
    <div class="flex flex-row w-full h-screen">
        
        <!-- image -->
        <div class="w-[50vw] h-full">
            <Image
               url-endpoint="https://ik.imagekit.io/myHotelSolutions"
               src="/TeaGardenEcovillas/Breakfast/DSC00444.jpg?updatedAt=1765692811776"
               :width="screenWidth"
               :height="screenWidth"
               alt="Author photo" 
               loading="lazy"
               class="w-full h-full object-cover"
           />
           <!-- test content -->
           
        </div>
        <!-- login form -->
        <div class="flex flex-col justify-center items-center w-[50vw] h-full relative">
            <div class="w-full">
                <Card class="max-w-sm w-full p-6 mx-auto">
                        <h3 class="text-center font-black text-xl">Check your email</h3>
                        <!-- <Input type="email" placeholder="Email" v-model="user_email"/> -->
                        <InputOTP :maxlength="5" class="mx-auto">
                            <InputOTPGroup>
                            <InputOTPSlot :index="0" />
                            <InputOTPSlot :index="1" />
                            <InputOTPSlot :index="2" />
                            <InputOTPSlot :index="3" />
                            <InputOTPSlot :index="4" />
                        </InputOTPGroup>
                    </InputOTP>
                    <Button @click="vefiryAccount">Send Code</Button>
                </Card>
            </div>
            <Sonner position="top-center" :expand="true"></Sonner>
            <div class="absolute bottom-10 left-0 right-0">
                <p class="font-medium text-sm text-gray-400 text-center"><span class="text-base font-black">Tea Garden Eco Villas - Morawaka</span><br>Developed by MyHotel Solution <br>© 2025 All Rights Reserved <br>Contact: 070 669 7900</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import Button from '@/components/ui/button/Button.vue';
import Card from '@/components/ui/card/Card.vue';
import { useBookingStore } from '@/store/booking';
import { Image } from '@imagekit/vue';
import { onMounted } from 'vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Sonner from '@/components/ui/sonner/Sonner.vue';
import { toast } from 'vue-sonner';
import 'vue-sonner/style.css'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp'


const router = useRouter()
const bookingstore = useBookingStore()
const screenWidth = ref(null)
const screenHeight = ref(null)

// user input
const user_email = ref(null)
const user_password = ref(null)

// this is only fro draft perpose
const email = 'gayashan.randimagamage@gmail.com'
const password = 'abc'

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

const vefiryAccount = () => {
    toastMessage('error', "Email send", "Check your inbox and verify the account")
    router.push('/auth/passwordreset')
}

onMounted(() => {
    screenWidth.value = window.innerWidth/2
    screenHeight.value = window.innerHeight/2
    console.log(screenHeight.value, screenWidth.value)
})

</script>