'use strict';
var items = [{
	selector : "#ch1",
	type : 'bar',
	data: {
		labels: ['8/1/2015', '9/1/2015', '10/1/2015', '11/1/2015', '12/1/2015', '1/1/2016', '2/1/2016', '3/1/2016', '4/1/2016', '5/1/2016', '6/1/2016', '7/1/2016', '8/1/2016'],
		datasets: [{
			label: 'Chat',
			fillColor: 'rgba(124,181,236,1)',
			highlightFill: 'rgba(220,220,220,0.75)',
			data: [258, 220, 268, 240, 185, 278, 202, 226, 253, 228, 270, 320, 361]
		},{
			label: 'Email',
			fillColor: 'rgba(115,115,115,1)',
			highlightFill: 'rgba(151,187,205,0.75)',
			data: [68, 138, 130, 179, 525, 592, 569, 851, 522, 557, 603, 521, 696]
		}],
		options: {
			legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span class=\"<%=name.toLowerCase()%>-legend-icon\" style=\"background-color:<%=datasets[i].fillColor%>\"></span><span class=\"<%=name.toLowerCase()%>-legend-text\"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>",
			responsive: true,
			legend: {
				display: true,
				position: 'top'
			}
		}
	}
}];
Reveal.initialize({
	width: 1100,
	controls: true,
	progress: true,
	history: true,
	center: true,
	parallaxBackgroundImage: 'resources/images/p-bg-1.jpg',
	parallaxBackgroundSize: '2100px 900px',
	parallaxBackgroundHorizontal: 50,
	parallaxBackgroundVertical: 5,

	transition: 'cube', // none/fade/slide/convex/concave/zoom
	backgroundTransition: 'zoom',

	chart : {
		path : 'bower_components/chart.js/dist/Chart.bundle.js',
		items : items
	},
 
	dependencies: [
		{ src: 'bower_components/reveal.js/lib/js/classList.js', condition: function() { return !document.body.classList; } },
		{ src: 'bower_components/reveal.js/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
		{ src: 'bower_components/reveal.js/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
		{ src: 'bower_components/reveal.js/plugin/highlight/highlight.js', async: true, condition: function() { return !!document.querySelector( '[data-html]' ) || !!document.querySelector( 'pre code' ) || !!document.querySelector( '[data-markdown]' ); }, callback: function() { hljs.initHighlightingOnLoad(); } },
		{ src: 'bower_components/reveal.js/plugin/zoom-js/zoom.js', async: true },
		{ src: 'bower_components/reveal.js/plugin/notes/notes.js', async: true },
		{ src: 'bower_components/reveal.js/plugin/chartjs/Chart.js'},
		{ src: 'bower_components/reveal.js/plugin/chartjs/charted.js'},
		{ src: 'js/loadhtmlslides.js', condition: function() { return !!document.querySelector( '[data-html]' ); } }
	]
	
});
Reveal.addEventListener("slidechanged",function(ev){
	setTimeout(function(){ // Timeout required to load the plugin
		Chart.defaults.global.responsive = true;
		$('#container').highcharts({
			chart : {
				plotBackgroundColor : null,
				plotBorderWidth : null,
				plotShadow : false
			},
			title : {
				text : 'First Contact Resolution'
			},
			tooltip : {
				pointFormat : '{series.name}: <b>{point.percentage:.1f}%</b>'
			},
			plotOptions : {
				pie : {
					allowPointSelect : true,
					cursor : 'pointer',
					dataLabels : {
						enabled : true,
						color : '#000000',
						connectorColor : '#000000',
						format : '<b>{point.name}</b>: {point.percentage:.1f} %'
					}
				}
			},
			series : [{
					type : 'pie',
					name : 'Global Data	',
					data : [
						['Pass', 5],
						{
							name : 'Fail',
							y : 4,
							sliced : true,
							selected : true
						}
					]
				}
			]
		});
		$('#bar1').highcharts({
			chart : {
				type : 'column'
			},
			title : {
				text : 'FCR by Regional Group'
			},
			xAxis : {
				type : 'category'
			},
			yAxis : {
				min : 0,
				title : {
					text : 'Ticket Volume'
				},
				stackLabels : {
					enabled : true,
					style : {
						fontWeight : 'bold',
						color : (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
					}
				}
			},
			legend : {
				align : 'right',
				x : -70,
				verticalAlign : 'top',
				y : 20,
				floating : true,
				backgroundColor : (Highcharts.theme && Highcharts.theme.legendBackgroundColorSolid) || 'white',
				borderColor : '#CCC',
				borderWidth : 1,
				shadow : false
			},
			tooltip : {
				formatter : function () {
					return '<b>' + this.series.name + ': ' + this.y + '</b><br/>' +

					'Total: ' + this.point.stackTotal;
				}
			},
			plotOptions : {
				column : {
					stacking : 'normal',
					dataLabels : {
						enabled : true,
						color : (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
					}
				}
			},
			series : [{
					'name' : 'Fail',
					'data' : [['IT Service Desk NE L1', 0], ['IT Service Desk NNA L1', 3], ['IT Service Desk NSA L1', 1]]
				}, {
					'name' : 'Fail',
					'data' : [['IT Service Desk NE L1', 1], ['IT Service Desk NNA L1', 3], ['IT Service Desk NSA L1', 1]]
				}]
		});
	},300);
},false);

(function(Highcharts) {
	Highcharts.setOptions({
		chart: {
			backgroundColor: 'rgba(0,0,0,0.3)',
			// backgroundColor : {
				// radialGradient : {
					// cx : 0.5,
					// cy : 0.3,
					// r : 0.7
				// },
				// stops : [
					// [0, '#484e55'],
					// [1, '#3a3f44'],
					// [2, '#313539']
				// ]
			// },
			plotBorderColor : '#606063',
			panning: true,
			zoomType: 'x',
			panKey: 'shift'
		},
		lang : {
			contextButtonTitle : 'ACA context menu',
			decimalPoint : '.',
			downloadJPEG : 'Export as JPG',
			downloadPDF : 'Export as PDF',
			downloadSVG : 'Export as SVG',
			drillUpText : 'Back to {series.name}',
			loading : 'This will be awesome...',
			months : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
			noData : 'No data to display',
			numericSymbols : ['k', 'M', 'G', 'T', 'P', 'E'],
			printChart : 'Export Chart',
			resetZoom : 'Reset zoom',
			resetZoomTitle : 'Reset zoom level 1:1',
			shortMonths : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
			thousandsSep : ',',
			weekdays : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			shortDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
		},
		colors: ['#22a7f0', '#ff6347', '#03c9a9', '#abb7b7', '#be90d4', '#f39c12', '#e2a50e', '#00b16a', '#e7903c'],
		credits : {
			enabled : true,
			href : 'mailto:ariel.andrade@stefanini.com?subject=Stefanini Dashboard Query',
			text : 'Created by ACAndrade',
			style : {
				fontSize : '10px',
				fontFamily : 'Roboto, "Helvetica Neue", Helvetica, Arial',
				color : '#808080'
			}
		},
		title : {
			style : {
				fontSize : '14px',
				fontFamily : 'Roboto, "Helvetica Neue", Helvetica, Arial',
				color : '#E0E0E3'
			}
		},
		subtitle : {
			style : {
				fontSize : '10px',
				fontFamily : 'Roboto, "Helvetica Neue", Helvetica, Arial',
				fontStyle : 'italic',
				color : '#808080'
			}
		},
		plotOptions : {
			series : {
				groupPadding : 0
			},
			column : {
				borderWidth : 0,
				borderRadius : 1,
				states : {
					hover : {
						enabled : true
					}
				}
			},
			spline : {
				dataLabels : {
					style : {
						color : '#808080',
						fontWeight : 'regular',
						fontSize : '10px',
						fontFamily : 'Roboto, "Helvetica Neue", Helvetica, Arial'
					}
				}
			}
		},
		exporting : {
			buttons : {
				contextButton : {
					menuItems : [{
							text : 'Export to PNG (small)',
							onclick : function () {
								this.exportChart({
									width : 250
								});
							}
						}, {
							text : 'Export to PNG (large)',
							onclick : function () {
								this.exportChart();
							},
							separator : false
						}
					]
				}
			}
		},
		legend : {
			title : {
				text : '<span style="font-size: 9px; color: #666; font-weight: normal">(Click to hide)</span>',
				style : {
					fontStyle : 'italic'
				}
			},
			itemStyle : {
				fontSize : '10px',
				fontWeight : 'normal',
				fontFamily : 'Verdana',
				fontStyle : 'italic',
				color : '#808080',
				cursor : 'pointer'
			}
		},
		yAxis : {
			gridLineWidth : 1
		},
		xAxis : {
			gridLineColor: '#707073',
			labels : {
				style : {
					fontSize : '12px',
					fontWeight : 'normal',
					color : '#808080'
				}
			},
			startOnTick : false,
			endOnTick : false,
			lineColor : '#707073',
			minorGridLineColor: '#505053',
			tickColor : '#707073'
		},
		tooltip : {
			backgroundColor : {
				linearGradient : [0, 0, 0, 60],
				stops : [
					[0, '#FFFFFF'],
					[1, '#DEEBF7']
				]
			},
			style : {
				fontSize : '11px'
			}
		},
		rangeSelector: {
			buttonTheme: {
				 fill: '#505053',
				 stroke: '#000000',
				 style: {
						color: '#CCC'
				 },
				 states: {
						hover: {
							 fill: '#707073',
							 stroke: '#000000',
							 style: {
									color: 'white'
							 }
						},
						select: {
							 fill: '#000003',
							 stroke: '#000000',
							 style: {
									color: 'white'
							 }
						}
				 }
			},
			inputBoxBorderColor: '#505053',
			inputStyle: {
				 backgroundColor: '#333',
				 color: 'silver'
			},
			labelStyle: {
				 color: 'silver'
			}
		},
		navigator: {
			handles: {
				 backgroundColor: '#666',
				 borderColor: '#AAA'
			},
			outlineColor: '#CCC',
			maskFill: 'rgba(255,255,255,0.1)',
			series: {
				 color: '#7798BF',
				 lineColor: '#A6C7ED'
			},
			xAxis: {
				 gridLineColor: '#505053'
			}
		},
		scrollbar: {
			barBackgroundColor: '#808083',
			barBorderColor: '#808083',
			buttonArrowColor: '#CCC',
			buttonBackgroundColor: '#606063',
			buttonBorderColor: '#606063',
			rifleColor: '#FFF',
			trackBackgroundColor: '#404043',
			trackBorderColor: '#404043'
		},
		legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
		background2: '#505053',
		dataLabelsColor: '#B0B0B3',
		textColor: '#C0C0C0',
		contrastTextColor: '#F0F0F3',
		maskColor: 'rgba(255,255,255,0.3)'
	});

	Highcharts.theme = {

		 chart: {
				backgroundColor: {
					 linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
					 stops: [
							[0, '#2a2a2b'],
							[1, '#3e3e40']
					 ]
				},
				style: {
					 fontFamily: "'Unica One', sans-serif"
				},
				plotBorderColor: '#606063'
		 },
		 title: {
				style: {
					 color: '#E0E0E3',
					 textTransform: 'uppercase',
					 fontSize: '20px'
				}
		 },
		 subtitle: {
				style: {
					 color: '#E0E0E3',
					 textTransform: 'uppercase'
				}
		 },
		 xAxis: {
				gridLineColor: '#707073',
				labels: {
					 style: {
							color: '#E0E0E3'
					 }
				},
				lineColor: '#707073',
				minorGridLineColor: '#505053',
				tickColor: '#707073',
				title: {
					 style: {
							color: '#A0A0A3'

					 }
				}
		 },
		 yAxis: {
				gridLineColor: '#707073',
				labels: {
					 style: {
							color: '#E0E0E3'
					 }
				},
				lineColor: '#707073',
				minorGridLineColor: '#505053',
				tickColor: '#707073',
				tickWidth: 1,
				title: {
					 style: {
							color: '#A0A0A3'
					 }
				}
		 },
		 tooltip: {
				backgroundColor: 'rgba(0, 0, 0, 0.85)',
				style: {
					 color: '#F0F0F0'
				}
		 },
		 plotOptions: {
				series: {
					 dataLabels: {
							color: '#B0B0B3'
					 },
					 marker: {
							lineColor: '#333'
					 }
				},
				boxplot: {
					 fillColor: '#505053'
				},
				candlestick: {
					 lineColor: 'white'
				},
				errorbar: {
					 color: 'white'
				}
		 },
		 legend: {
				itemStyle: {
					 color: '#E0E0E3'
				},
				itemHoverStyle: {
					 color: '#FFF'
				},
				itemHiddenStyle: {
					 color: '#606063'
				}
		 },
		 credits: {
				style: {
					 color: '#666'
				}
		 },
		 labels: {
				style: {
					 color: '#707073'
				}
		 },

		 drilldown: {
				activeAxisLabelStyle: {
					 color: '#F0F0F3'
				},
				activeDataLabelStyle: {
					 color: '#F0F0F3'
				}
		 },

		 navigation: {
				buttonOptions: {
					 symbolStroke: '#DDDDDD',
					 theme: {
							fill: '#505053'
					 }
				}
		 },

		 // scroll charts
		rangeSelector: {
			buttonTheme: {
				 fill: '#505053',
				 stroke: '#000000',
				 style: {
						color: '#CCC'
				 },
				 states: {
						hover: {
							 fill: '#707073',
							 stroke: '#000000',
							 style: {
									color: 'white'
							 }
						},
						select: {
							 fill: '#000003',
							 stroke: '#000000',
							 style: {
									color: 'white'
							 }
						}
				 }
			},
			inputBoxBorderColor: '#505053',
			inputStyle: {
				 backgroundColor: '#333',
				 color: 'silver'
			},
			labelStyle: {
				 color: 'silver'
			}
		},

		navigator: {
			handles: {
				 backgroundColor: '#666',
				 borderColor: '#AAA'
			},
			outlineColor: '#CCC',
			maskFill: 'rgba(255,255,255,0.1)',
			series: {
				 color: '#7798BF',
				 lineColor: '#A6C7ED'
			},
			xAxis: {
				 gridLineColor: '#505053'
			}
		},

		scrollbar: {
			barBackgroundColor: '#808083',
			barBorderColor: '#808083',
			buttonArrowColor: '#CCC',
			buttonBackgroundColor: '#606063',
			buttonBorderColor: '#606063',
			rifleColor: '#FFF',
			trackBackgroundColor: '#404043',
			trackBorderColor: '#404043'
		},

		 // special colors for some of the
		 legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
		 background2: '#505053',
		 dataLabelsColor: '#B0B0B3',
		 textColor: '#C0C0C0',
		 contrastTextColor: '#F0F0F3',
		 maskColor: 'rgba(255,255,255,0.3)'
	};

	// Apply the theme
	Highcharts.setOptions(Highcharts.theme);	

}(window.Highcharts));