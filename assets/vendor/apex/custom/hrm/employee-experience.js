var options = {
  chart: {
    type: "bar",
    height: 256,
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      horizontal: true,
      endingShape: "rounded",
      startingShape: "rounded",
      barHeight: "50%",
      distributed: true,
      columnWidth: "50%"
    }
  },
  dataLabels: {
    enabled: false
  },
  series: [{
    name: "Employee Experience",
    data: [4, 3, 5, 2, 4]
  }],
  xaxis: {
    categories: ["Engineering", "Sales", "HR", "Marketing", "Finance"]
  },
  colors: ["#7744D9FF", "#C216DBFF", "#7744D9FF", "#C216DBFF", "#7744D9FF", "#C216DBFF"],
  grid: {
    borderColor: "rgba(255, 255, 255, 0.3)",
    strokeDashArray: 4
  },
  tooltip: {
    theme: "dark",
    y: {
      formatter: function (val) {
        return val + " years";
      }
    }
  },
};

var chart = new ApexCharts(document.querySelector("#employeeExperience"), options);
chart.render();
