"use strict";
$('.demo-menu__open').on('click', function () {
  showHideMenu()
})
function showHideMenu() {
  if ($('.demo-menu').hasClass('close')) {
    $('.demo-menu').removeClass('close')
  } else {
    $('.demo-menu').addClass('close')
  }
}
// chart_1
const options = {
  animationEnabled: true,
  exportEnabled: false,

  axisY: {
    labelFormatter: function (e) {
      let num = e.value.toString().replace(/0*$/, "");

      return "$" + CanvasJS.formatNumber(num);
    },
    includeZero: true,
    suffix: "k",
    labelFontFamily: "CircularStd",
    fontWeight: "bold",
  },
  axisX: {
    labelFontFamily: "CircularStd",
    fontWeight: "bold",
    valueFormatString: "DD MMM",
    crosshair: {
      enabled: true,
      snapToDataPoint: true,
      lineDashType: 'solid'
    }
  },
  data: [
    {
      type: "splineArea",
      name: 'main',
      xValueFormatString: "DD",
      yValueFormatString: "",
      toolTipContent: "",
      markerType: "circle",
      markerSize: 0,
      markerColor: "#fff",
      markerBorderColor: "black", //change color here
      markerBorderThickness: 1,
      color: 'rgba(0, 0, 0, 0.3)',
      lineColor: "#000",


      // toolTipContent: "<a href = {name}> {label}</a><hr/>Views: {y}",
      toolTip: {
        fontFamily: "CircularStd",
        fontWeight: "bold",
      },
      toolTipContent: "<div class='toolTop__top'><span>Jan, {x}</span></div ><div class='toolTop__bottom'><span>${y}</span></div>",
      dataPoints: [
        { x: new Date(2022, 0, 1), y: 4000 },
        { x: new Date(2022, 0, 2), y: 4000.2 },
        { x: new Date(2022, 0, 3), y: 4000.4 },
        { x: new Date(2022, 0, 4), y: 4000.6 },
        { x: new Date(2022, 0, 5), y: 4000.8 },
        { x: new Date(2022, 0, 6), y: 5000 },
        { x: new Date(2022, 0, 7), y: 5000.5 },
        { x: new Date(2022, 0, 8), y: 6000 },
        { x: new Date(2022, 0, 9), y: 6000.2 },
        { x: new Date(2022, 0, 10), y: 6000.4 },
        { x: new Date(2022, 0, 11), y: 6000.6 },
        { x: new Date(2022, 0, 12), y: 6000.7 },
        { x: new Date(2022, 0, 13), y: 6000.8 },
        { x: new Date(2022, 0, 14), y: 7000 },
        { x: new Date(2022, 0, 15), y: 7000.5 },
        { x: new Date(2022, 0, 16), y: 8000 },
        { x: new Date(2022, 0, 17), y: 8000.2 },
        { x: new Date(2022, 0, 18), y: 8000.4 },
        { x: new Date(2022, 0, 19), y: 8000.5 },
        { x: new Date(2022, 0, 20), y: 8000.6 },
        { x: new Date(2022, 0, 21), y: 8000.8 },
        { x: new Date(2022, 0, 22), y: 9000 },
        { x: new Date(2022, 0, 23), y: 9000 },
        { x: new Date(2022, 0, 24), y: 9000.2 },
        { x: new Date(2022, 0, 25), y: 9000.3 },
        { x: new Date(2022, 0, 26), y: 9000.4 },
        { x: new Date(2022, 0, 27), y: 9000.4 },
        { x: new Date(2022, 0, 28), y: 9000.6 },
        { x: new Date(2022, 0, 29), y: 9000.8 },
        { x: new Date(2022, 0, 30), y: 10000, markerType: "circle" }
      ]
    },
    {
      type: "splineArea",
      name: 'secondary',
      xValueFormatString: "DD",
      yValueFormatString: "",
      markerType: "none",
      color: '#fff',
      lineColor: "rgba(0, 0, 0, 0.3)",
      toolTip: false,
      // toolTipContent: "<a href = {name}> {label}</a><hr/>Views: {y}",
      toolTipContent: null,
      dataPoints: '',
    }
  ],
  dataPointForDownArea: function () {
    let dataPoints_1 = this.data[0].dataPoints;
    let dataPoints_2 = dataPoints_1.map(el => {
      let x = el.x,
        y = el.y / 2
      return {
        x, y
      }
    });
    return dataPoints_2
  }
};
options.data[1].dataPoints = options.dataPointForDownArea()
$("#chart_1").CanvasJSChart(options);
// chart_1 end

// chart_2

const options_2 = {
  animationEnabled: true,
  exportEnabled: false,
  dataPointMaxWidth: 20,
  axisY: {
    includeZero: true,
    labelFontFamily: "CircularStd",
    fontWeight: "bold",
  },
  axisX: {
    indexLabelPlacement: "inside",
    labelFontFamily: "CircularStd",
    fontWeight: "bold",
    labelFontSize: 8,
    margin: 5
  },
  data: [
    {
      type: "column",
      name: 'main',
      color: '#EBF56D',
      toolTipContent: null,
      indexLabelFontColor: "#000",
      dataPoints: [
        { label: "March/2021", y: 5, indexLabel: '', indexLabelPlacement: "inside" },
        { label: "June/2021", y: 30, indexLabel: '', indexLabelPlacement: "inside" },
        { label: "July/2021", y: 12, indexLabel: '', indexLabelPlacement: "inside" },
        { label: "August/2021", y: 36, indexLabel: '', indexLabelPlacement: "inside" },
        { label: "September/2021", y: 22, indexLabel: '', indexLabelPlacement: "inside" },
        { label: "October/2021", y: 36, indexLabel: '', indexLabelPlacement: "inside" },
        { label: "November/2021", y: 8, indexLabel: '', indexLabelPlacement: "inside" },
      ]
    },
    {
      type: "column",
      name: 'main',
      color: '#000',
      toolTipContent: null,
      indexLabelFontColor: "#fff",
      dataPoints: [
        { label: "March/2021", y: 2 },
        { label: "June/2021", y: 9 },
        { label: "July/2021", y: 4 },
        { label: "August/2021", y: 13 },
        { label: "September/2021", y: 7 },
        { label: "October/2021", y: 12 },
        { label: "November/2021", y: 3 },
      ]
    },
  ],
  dataPointLabel: function () {
    let dataPointsY = this.data[0].dataPoints;
    let dataPointsLabel = dataPointsY.map(el => {
      let y = el.y
      return {
        label: el.label,
        y: el.y,
        indexLabel: y.toString(),
        indexLabelPlacement: "inside"
      }
    });
    return dataPointsLabel
  },
  dataPointLabel_2: function () {
    let dataPointsY = this.data[1].dataPoints;
    let dataPointsLabel = dataPointsY.map(el => {
      let y = el.y
      return {
        label: el.label,
        y: el.y,
        indexLabel: y.toString(),
        indexLabelPlacement: "inside"
      }
    });
    return dataPointsLabel
  },
}

options_2.data[0].dataPoints = options_2.dataPointLabel()
options_2.data[1].dataPoints = options_2.dataPointLabel_2()
// console.log(options_2.dataPointLabel());
$("#chart_2").CanvasJSChart(options_2);
// chart_2 end

// chart_3
const options_3 = {
  animationEnabled: true,
  exportEnabled: false,
  dataPointMaxWidth: 20,
  toolTip: {
    borderColor: "green",
    fontSize: 15,
    fontFamily: "CircularStd",
    fontWeight: "normal",
    borderThickness: 0,
    cornerRadius: 4,
    backgroundColor: '#EBF56D'
  },
  labelFormatter: function (e) {
    let num = e.value.toString().replace(/0*$/, "");

    return CanvasJS.formatNumber(num);
  },
  axisY: {
    includeZero: true,
    labelFontFamily: "CircularStd",
    fontWeight: "bold",
  },
  axisX: {
    indexLabelPlacement: "inside",
    labelFontFamily: "CircularStd",
    fontWeight: "bold",
    labelFontSize: 12,
    margin: 5
  },
  data: [
    {
      markerType: "circle",
      markerSize: 0,
      markerColor: "#fff",
      markerBorderColor: "black", //change color here
      markerBorderThickness: 1,
      lineColor: "#000",
      type: "splineArea",
      name: 'main',
      color: 'transparent',
      toolTipContent: "<div class='toolTop__summ'><span>${y}</span></div>",
      dataPoints: [
        { label: "M", y: 1000, },
        { label: "T", y: 2000, },
        { label: "W", y: 1000, },
        { label: "T", y: 2500, },
        { label: "E", y: 1500, },
        { label: "S", y: 3100, },
        { label: "S", y: 1500, },
      ]
    },
  ],
}
$("#chart_3").CanvasJSChart(options_3);

// chart_3 end