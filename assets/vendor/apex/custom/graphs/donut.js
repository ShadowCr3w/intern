var options = {
  chart: {
    width: 360,
    type: "donut",
  },
  labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
  series: [20, 20, 20, 20, 20],
  legend: {
    position: "bottom",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: 0,
  },
  colors: ["#7744D9", "#C216DB", "#7744D9", "#C216DB", "#7744D9", "#C216DB"],
};
var chart = new ApexCharts(document.querySelector("#donut"), options);
chart.render();
