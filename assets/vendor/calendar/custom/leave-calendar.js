document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("leaveCalendar");
  var today = new Date();
  var year = today.getFullYear();
  var month = String(today.getMonth() + 1).padStart(2, "0");
  var initialDate = `${year}-${month}-01`;

  // Generate some colorful leave events for the current month
  var events = [
    {
      title: "Annual Leave",
      start: `${year}-${month}-03`,
      end: `${year}-${month}-05`,
      color: "#7744D9FF",
    },
    {
      title: "Sick Leave",
      start: `${year}-${month}-06`,
      color: "#C216DBFF",
    },
    {
      title: "Work From Home",
      start: `${year}-${month}-12`,
      color: "#7744D9FF",
    },
    {
      title: "Maternity Leave",
      start: `${year}-${month}-15`,
      end: `${year}-${month}-20`,
      color: "#C216DBFF",
    },
    {
      title: "Paternity Leave",
      start: `${year}-${month}-21`,
      end: `${year}-${month}-23`,
      color: "#7744D9FF",
    },
    {
      title: "Unpaid Leave",
      start: `${year}-${month}-26`,
      color: "#C216DBFF",
    },
    {
      title: "Half Day Leave",
      start: `${year}-${month}-29`,
      end: `${year}-${month}-30`,
      color: "#7744D9FF",
    },
  ];

  var calendar = new FullCalendar.Calendar(calendarEl, {
    headerToolbar: {
      left: "prevYear,prev,next,nextYear today",
      center: "title",
      right: "dayGridMonth,dayGridWeek,dayGridDay",
    },
    initialDate: initialDate,
    navLinks: true,
    editable: false,
    dayMaxEvents: true,
    events: events,
  });

  calendar.render();
});
