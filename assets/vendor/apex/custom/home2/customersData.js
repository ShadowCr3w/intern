var options = {
  chart: {
    height: 210,
    type: "bar",
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "30%",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  series: [
    {
      name: "New",
      data: [2000, 5500, 4900, 6000, 2000, 6000, 2000],
    },
    {
      name: "Returning",
      data: [2500, 3500, 6500, 3500, 4500, 3000, 8500],
    },
    {
      name: "Trips",
      data: [4500, 6500, 3500, 7500, 2500, 1000, 6500],
    },
  ],
  legend: {
    show: false,
  },
  xaxis: {
    categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  },
  yaxis: {
    show: false,
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    theme: "dark",
    y: {
      formatter: function (val) {
        return val;
      },
    },
  },
  grid: {
    borderColor: "#C216DB",
    strokeDashArray: 5,
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
  colors: ["#7744D9", "#C216DB", "#7744D9"],
};
var chart = new ApexCharts(document.querySelector("#customersData"), options);
chart.render();
