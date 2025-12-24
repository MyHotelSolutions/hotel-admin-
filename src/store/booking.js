import { ref } from "vue";
import { defineStore } from "pinia";

export const useBookingStore = defineStore('booking', () => {
  const roomCount = ref(19)
  const notconfimed = ref([
    {
      title : 'Mr.',
      first_name : 'Indika',
      last_name : 'Nanayakkara',
      checkin : '2025 Des 25th',
      checkout : '2025 Des 28th',
      nights : '03',
      childs : '03',
      adults : '06',
    },
    {
      title : 'Ms.',
      first_name : 'Chamodi',
      last_name : 'Senannayake',
      checkin : '2026 Jan 01th',
      checkout : '2026 Jan 02th',
      nights : '01',
      childs : '01',
      adults : '02',
    },
  ])

  const today = ref([
    {
      title: 'Dr.',
      first_name: 'Alex',
      last_name: 'Rivera',
      checkin: '2025-12-27',
      checkout: '2025-12-31',
      nights: 4,
      childs: 1,
      adults: 2,
    },
  ])

  const tommorow = ref([
    // {
    //   title : 'Mr.',
    //   first_name : 'Indika',
    //   last_name : 'Nanayakkara',
    //   checkin : '2025 Des 25th',
    //   checkout : '2025 Des 28th',
    //   nights : '03',
    //   childs : '03',
    //   adults : '06',
    // },
    // {
    //   title : 'Ms.',
    //   first_name : 'Chamodi',
    //   last_name : 'Senannayake',
    //   checkin : '2026 Jan 01th',
    //   checkout : '2026 Jan 02th',
    //   nights : '01',
    //   childs : '01',
    //   adults : '02',
    // },
  ])


  return { roomCount, notconfimed, today, tommorow }
})