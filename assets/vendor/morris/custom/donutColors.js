// Morris Donut
Morris.Donut({
  element: "donutColors",
  data: [
    { value: 30, label: "foo" },
    { value: 15, label: "bar" },
    { value: 10, label: "baz" },
    { value: 5, label: "A really really long label" },
  ],
  backgroundColor: "#d0daf5",
  labelColor: "#d0daf5",
  colors: ["#7744D9", "#C216DB", "#7744D9", "#C216DB", "#7744D9", "#C216DB"],
  resize: true,
  hideHover: "auto",
  gridLineColor: "rgba(255, 255, 255, 0.3)",
  formatter: function (x) {
    return x + "%";
  },
});
