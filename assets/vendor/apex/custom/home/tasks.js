var options = {
  series: [20, 20, 20, 20, 20],
  labels: ["New", "Active", "Completed", "Pending", "Archived"],
  chart: {
    height: 280,
    type: "donut",
  },
  plotOptions: {
    pie: {
      startAngle: -90,
      endAngle: 90,
      offsetY: 10,
      donut: {
        size: "70%",
      },
    },
  },
  grid: {
    padding: {
      bottom: -80,
    },
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
    name: {
      show: false,
    },
  },
  stroke: {
    width: 5,
    colors: "rgba(255, 255, 255, 0.1)",
  },
  colors: [
    "#7744D9",
    "#C216DB",
    "#7744D9",
    "#C216DB",
    "#7744D9",
  ],
};

var chart = new ApexCharts(
  document.querySelector("#tasks"),
  options
);
chart.render();