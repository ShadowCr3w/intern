// Denmark
$(function () {
  $('#mapDenmark').vectorMap({
    map: 'dk_mill',
    zoomOnScroll: false,
    regionStyle: {
      initial: {
        fill: "#7744D9"
      },
      hover: {
        "fill-opacity": 0.8
      },
      selected: {
        fill: "#C216DB",
      },
    },
    backgroundColor: 'transparent',
  });
});