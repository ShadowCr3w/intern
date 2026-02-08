// USA map 1
$(function () {
  var cityAreaData = [
    230.20,
    750.90,
    440.28,
    180.15,
    69.35,
    280.90,
    510.50,
    99.60,
    135.50
  ]
  $('#us-map3').vectorMap({
    map: 'us_aea_en',
    scaleColors: ["#C216DB"],
    normalizeFunction: 'polynomial',

    zoomOnScroll: false,
    zoomMin: 1,
    hoverColor: true,
    regionStyle: {
      initial: {
        fill: "#C216DB",
      },
      hover: {
        "fill-opacity": 0.8
      },
    },
    markerStyle: {
      initial: {
        fill: "#C216DB",
        stroke: '#FFFFFF',
        r: 5
      }
    },
    backgroundColor: 'transparent',

  });
});