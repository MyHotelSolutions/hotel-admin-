<!-- this for toast message -->
<!-- <template>
    <div class="">
        <Button
            variant="outline"
            @click="() =>
            toast.warning('Event has been created', {
                description: 'This cannot execute',
            })
            "
        >
            Show Toast
        </Button>
        <Sonner position="top-center" :expand="true"></Sonner>
    </div>
</template>

<script setup>
import Button from '@/components/ui/button/Button.vue';
import Sonner from '@/components/ui/sonner/Sonner.vue';
import { toast } from 'vue-sonner';
import 'vue-sonner/style.css'
</script> -->


<script setup lang="ts">
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp'
</script>

<template>
  <InputOTP :maxlength="3">
    <InputOTPGroup>
      <InputOTPSlot :index="0" />
      <InputOTPSlot :index="1" />
      <InputOTPSlot :index="2" />
    </InputOTPGroup>
  </InputOTP>
</template>
