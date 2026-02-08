var options = {
  series: [40, 50, 60, 70, 80],
  chart: {
    height: 240,
    type: "radialBar",
  },
  plotOptions: {
    radialBar: {
      track: {
        show: true,
        background: "rgba(0, 0, 0, 0.1)",
        strokeWidth: "100%",
        margin: 2,
        dropShadow: {
          enabled: false
        }
      },
      dataLabels: {
        name: {
          fontSize: "18px",
        },
        value: {
          fontSize: "24px",
          fontWeight: "bold"
        },
        total: {
          show: true,
          label: "GB",
          formatter: function (w) {
            return 190;
          },
        },
      },
    },
  },
  labels: ["Doc", "Files", "PDF", "Images", "Videos"],
  colors: [
    "#7744D9", "#C216DB", "#7744D9", "#C216DB", "#7744D9", "#C216DB"
  ],
};

var chart = new ApexCharts(document.querySelector("#storage"), options);
chart.render();
