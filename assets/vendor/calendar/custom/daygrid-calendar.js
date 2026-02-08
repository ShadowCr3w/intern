document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("dayGrid");
  var calendar = new FullCalendar.Calendar(calendarEl, {
    headerToolbar: {
      left: "prevYear,prev,next,nextYear today",
      center: "title",
      right: "dayGridMonth,dayGridWeek,dayGridDay",
    },
    initialDate: "2025-07-12",
    navLinks: true, // can click day/week names to navigate views
    editable: true,
    dayMaxEvents: true, // allow "more" link when too many events
    events: [
      {
        title: "All Day Event",
        start: "2025-07-01",
        color: "#7744D9",
      },
      {
        title: "Long Event",
        start: "2025-07-07",
        end: "2025-07-10",
        color: "#C216DB",
      },
      {
        groupId: 999,
        title: "Birthday",
        start: "2025-07-09T16:00:00",
        color: "#7744D9",
      },
      {
        groupId: 999,
        title: "Birthday",
        start: "2025-07-16T16:00:00",
        color: "#C216DB",
      },
      {
        title: "Conference",
        start: "2025-07-11",
        end: "2025-07-13",
        color: "#7744D9",
      },
      {
        title: "Meeting",
        start: "2025-07-14T10:30:00",
        end: "2025-07-14T12:30:00",
        color: "#C216DB",
      },
      {
        title: "Lunch",
        start: "2025-07-16T12:00:00",
        color: "#7744D9",
      },
      {
        title: "Meeting",
        start: "2025-07-18T14:30:00",
        color: "#C216DB",
      },
      {
        title: "Interview",
        start: "2025-07-21T17:30:00",
        color: "#7744D9",
      },
      {
        title: "Meeting",
        start: "2025-07-22T20:00:00",
        color: "#C216DB",
      },
      {
        title: "Birthday",
        start: "2025-07-13T07:00:00",
        color: "#7744D9",
      },
      {
        title: "Click for Google",
        url: "http://google.com/",
        start: "2025-07-28",
        color: "#C216DB",
      },
      {
        title: "Interview",
        start: "2025-07-20",
        color: "#7744D9",
      },
      {
        title: "Product Launch",
        start: "2025-07-29",
        color: "#C216DB",
      },
      {
        title: "Leave",
        start: "2025-07-25",
        color: "#7744D9",
      },
    ],
  });

  calendar.render();
});
