var options = {
  series: [
    {
      name: "Tickets",
      data: [1100, 880, 740, 550, 330, 200],
    },
  ],
  chart: {
    type: "bar",
    height: 300,
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      borderRadius: 0,
      horizontal: true,
      barHeight: "80%",
      isFunnel: true,
    },
  },
  colors: [
    "#7744D9", "#C216DB", "#7744D9", "#C216DB", "#7744D9", "#C216DB"
  ],
  dataLabels: {
    enabled: true,
    formatter: function (val, opt) {
      return opt.w.globals.labels[opt.dataPointIndex];
    },
    dropShadow: {
      enabled: true,
    },
  },
  xaxis: {
    categories: ["Closed", "Hold", "Resolved", "In Progress", "Open", "Total"],
  },
  legend: {
    show: true,
  },
  tooltip: {
    theme: "dark",
  },
};

var chart = new ApexCharts(document.querySelector("#funnel"), options);
chart.render();
