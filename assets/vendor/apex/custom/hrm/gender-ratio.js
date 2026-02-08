var options = {
  chart: {
    width: 360,
    type: "donut",
  },
  labels: ["Male", "Female", "Non-Binary", "Prefer Not to Say", "Other"],
  series: [45, 25, 15, 10, 5],
  legend: {
    position: "bottom",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: 0,
  },
  colors: ["#7744D9FF", "#C216DBFF", "#7744D9FF", "#C216DBFF", "#7744D9FF", "#C216DBFF"],
};
var chart = new ApexCharts(document.querySelector("#genderRatio"), options);
chart.render();