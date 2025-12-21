import { ref } from "vue";
import { defineStore } from "pinia";

export const useBookingStore = defineStore('booking', () => {
  const roomCount = ref(19)

  return { roomCount }
})