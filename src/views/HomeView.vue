<script>
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Calendar } from '@fullcalendar/core';
import timeGridPlugin from '@fullcalendar/timegrid';

export default {
  components: {
    FullCalendar, // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin],
        initialView: 'timeGridWeek',
        firstDay: 6,
        dateClick: this.handleDateClick,
        headerToolbar: {
          left: 'prev,next,today',
          center: 'title',
          right: 'timeGridWeek,timeGridDay', // user can switch between the two
        },
      },
    };
  },
  methods: {
    handleDateClick: function(arg) {
      alert('date click! ' + arg.dateStr);
    },
  },
};
</script>
<template>
  <FullCalendar :options="calendarOptions" />
</template>
