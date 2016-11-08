'use strict';

Reveal.initialize({
	width: 1100,
	height: 650,
	margin: 0.05,
	maxScale: 1.1,
	controls: true,
	progress: true,
	history: true,
	center: true,
	parallaxBackgroundImage: 'resources/images/p-bg-1.jpg',
	parallaxBackgroundSize: '2100px 900px',
	parallaxBackgroundHorizontal: 30,
	parallaxBackgroundVertical: 5,

	transition: 'cube', // none/fade/slide/convex/concave/zoom
	backgroundTransition: 'zoom',

	dependencies: [
		{ src: 'bower_components/reveal.js/lib/js/classList.js', condition: function() { return !document.body.classList; } },
		{ src: 'bower_components/reveal.js/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
		{ src: 'bower_components/reveal.js/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
		{ src: 'bower_components/reveal.js/plugin/highlight/highlight.js', async: true, condition: function() { return !!document.querySelector( '[data-html]' ) || !!document.querySelector( 'pre code' ) || !!document.querySelector( '[data-markdown]' ); }, callback: function() { hljs.initHighlightingOnLoad(); } },
		{ src: 'bower_components/reveal.js/plugin/zoom-js/zoom.js', async: true },
		{ src: 'bower_components/reveal.js/plugin/notes/notes.js', async: true },
		{ src: 'js/loadhtmlslides.js', condition: function() { return !!document.querySelector( '[data-html]' ); } }
	],

	customItems: [{
		slideId: 'inc-global-slide',
		containerId: 'inc-global',
		config: {
			subtitle: {text:'Global View'},
			series: [{name:'Phone',data:[['2015 Oct',4056],['2015 Nov',3713],['2015 Dec',3547],['2016 Jan',3877],['2016 Feb',3698],['2016 Mar',4048],['2016 Apr',3415],['2016 May',3604],['2016 Jun',3916],['2016 Jul',3702],['2016 Aug',4605],['2016 Sep',3797],['2016 Oct',3675]]},{name:'Self-service',data:[['2015 Oct',1405],['2015 Nov',1259],['2015 Dec',1072],['2016 Jan',1455],['2016 Feb',1386],['2016 Mar',1460],['2016 Apr',1466],['2016 May',1419],['2016 Jun',1656],['2016 Jul',1470],['2016 Aug',1638],['2016 Sep',1417],['2016 Oct',1672]]},{name:'Email',data:[['2015 Oct',130],['2015 Nov',179],['2015 Dec',525],['2016 Jan',592],['2016 Feb',569],['2016 Mar',851],['2016 Apr',522],['2016 May',557],['2016 Jun',603],['2016 Jul',521],['2016 Aug',696],['2016 Sep',788],['2016 Oct',865]]},{name:'Walk-in',data:[['2015 Oct',86],['2015 Nov',185],['2015 Dec',146],['2016 Jan',265],['2016 Feb',320],['2016 Mar',307],['2016 Apr',422],['2016 May',412],['2016 Jun',324],['2016 Jul',291],['2016 Aug',305],['2016 Sep',171],['2016 Oct',182]]},{name:'Chat',data:[['2015 Oct',268],['2015 Nov',240],['2015 Dec',185],['2016 Jan',278],['2016 Feb',202],['2016 Mar',226],['2016 Apr',253],['2016 May',227],['2016 Jun',270],['2016 Jul',320],['2016 Aug',361],['2016 Sep',257],['2016 Oct',299]]}]
		}
	}, {
		slideId: 'inc-sd-slide',
		containerId: 'inc-sd',
		config: {
			subtitle: {text:'Service Desk'},
			series: [{name:'Phone',data:[['2015 Oct',1891],['2015 Nov',1858],['2015 Dec',1800],['2016 Jan',1880],['2016 Feb',1748],['2016 Mar',1904],['2016 Apr',1718],['2016 May',1828],['2016 Jun',2011],['2016 Jul',1908],['2016 Aug',2291],['2016 Sep',1895],['2016 Oct',1761]]},{name:'Self-service',data:[['2015 Oct',383],['2015 Nov',362],['2015 Dec',292],['2016 Jan',408],['2016 Feb',403],['2016 Mar',412],['2016 Apr',376],['2016 May',372],['2016 Jun',465],['2016 Jul',440],['2016 Aug',463],['2016 Sep',378],['2016 Oct',387]]},{name:'Chat',data:[['2015 Oct',204],['2015 Nov',183],['2015 Dec',140],['2016 Jan',197],['2016 Feb',126],['2016 Mar',145],['2016 Apr',172],['2016 May',166],['2016 Jun',198],['2016 Jul',227],['2016 Aug',268],['2016 Sep',188],['2016 Oct',220]]},{name:'Email',data:[['2015 Oct',15],['2015 Nov',9],['2015 Dec',12],['2016 Jan',16],['2016 Feb',31],['2016 Mar',16],['2016 Apr',27],['2016 May',5],['2016 Jun',7],['2016 Jul',8],['2016 Aug',13],['2016 Sep',26],['2016 Oct',24]]},{name:'Walk-in',data:[['2015 Oct',2],['2015 Nov',1],['2015 Dec',0],['2016 Jan',2],['2016 Feb',0],['2016 Mar',1],['2016 Apr',5],['2016 May',4],['2016 Jun',5],['2016 Jul',1],['2016 Aug',3],['2016 Sep',2],['2016 Oct',5]]}]
		}
	}, {
		slideId: 'inc-ds-slide',
		containerId: 'inc-ds',
		config: {
			subtitle: {text:'Deskside'},
			series: [{name:'Phone',data:[['2015 Oct',534],['2015 Nov',550],['2015 Dec',543],['2016 Jan',594],['2016 Feb',688],['2016 Mar',714],['2016 Apr',521],['2016 May',511],['2016 Jun',655],['2016 Jul',482],['2016 Aug',571],['2016 Sep',498],['2016 Oct',459]]},{name:'Self-service',data:[['2015 Oct',350],['2015 Nov',339],['2015 Dec',322],['2016 Jan',479],['2016 Feb',357],['2016 Mar',358],['2016 Apr',381],['2016 May',384],['2016 Jun',464],['2016 Jul',386],['2016 Aug',377],['2016 Sep',355],['2016 Oct',439]]},{name:'Walk-in',data:[['2015 Oct',74],['2015 Nov',174],['2015 Dec',136],['2016 Jan',193],['2016 Feb',274],['2016 Mar',265],['2016 Apr',271],['2016 May',333],['2016 Jun',246],['2016 Jul',207],['2016 Aug',224],['2016 Sep',159],['2016 Oct',147]]},{name:'Email',data:[['2015 Oct',61],['2015 Nov',23],['2015 Dec',35],['2016 Jan',28],['2016 Feb',36],['2016 Mar',43],['2016 Apr',21],['2016 May',46],['2016 Jun',42],['2016 Jul',20],['2016 Aug',5],['2016 Sep',36],['2016 Oct',37]]},{name:'Chat',data:[['2015 Oct',19],['2015 Nov',16],['2015 Dec',12],['2016 Jan',21],['2016 Feb',26],['2016 Mar',30],['2016 Apr',23],['2016 May',19],['2016 Jun',19],['2016 Jul',30],['2016 Aug',29],['2016 Sep',16],['2016 Oct',17]]}]
		}
	}, {
		slideId: 'inc-bs-slide',
		containerId: 'inc-bs',
		config: {
			subtitle: {text:'Base Services'},
			series: [{name:'Email',data:[['2015 Oct',17],['2015 Nov',111],['2015 Dec',418],['2016 Jan',519],['2016 Feb',489],['2016 Mar',759],['2016 Apr',450],['2016 May',492],['2016 Jun',533],['2016 Jul',442],['2016 Aug',269],['2016 Sep',197],['2016 Oct',301]]},{name:'Phone',data:[['2015 Oct',305],['2015 Nov',233],['2015 Dec',142],['2016 Jan',197],['2016 Feb',162],['2016 Mar',270],['2016 Apr',225],['2016 May',246],['2016 Jun',196],['2016 Jul',174],['2016 Aug',214],['2016 Sep',200],['2016 Oct',282]]},{name:'Self-service',data:[['2015 Oct',111],['2015 Nov',96],['2015 Dec',63],['2016 Jan',90],['2016 Feb',93],['2016 Mar',72],['2016 Apr',112],['2016 May',98],['2016 Jun',94],['2016 Jul',93],['2016 Aug',82],['2016 Sep',88],['2016 Oct',130]]},{name:'Walk-in',data:[['2015 Oct',5],['2015 Nov',3],['2015 Dec',2],['2016 Jan',4],['2016 Feb',31],['2016 Mar',1],['2016 Apr',43],['2016 May',26],['2016 Jun',31],['2016 Jul',13],['2016 Aug',28],['2016 Sep',4],['2016 Oct',13]]},{name:'Chat',data:[['2015 Oct',3],['2015 Nov',8],['2015 Dec',4],['2016 Jan',12],['2016 Feb',10],['2016 Mar',8],['2016 Apr',7],['2016 May',15],['2016 Jun',9],['2016 Jul',16],['2016 Aug',11],['2016 Sep',12],['2016 Oct',15]]}]
		}
	}, {
		slideId: 'task-global-slide',
		containerId: 'task-global',
		config: {
			subtitle: {text:'Global View'},
			series: [{name:'N.America',data:[['2015 Oct',3131],['2015 Nov',2572],['2015 Dec',2844],['2016 Jan',3904],['2016 Feb',3804],['2016 Mar',3758],['2016 Apr',3393],['2016 May',3155],['2016 Jun',3580],['2016 Jul',3381],['2016 Aug',4000],['2016 Sep',3126],['2016 Oct',3615]]},{name:'Europe',data:[['2015 Oct',1155],['2015 Nov',955],['2015 Dec',728],['2016 Jan',972],['2016 Feb',785],['2016 Mar',906],['2016 Apr',889],['2016 May',817],['2016 Jun',1120],['2016 Jul',913],['2016 Aug',1082],['2016 Sep',878],['2016 Oct',778]]},{name:'S.America',data:[['2015 Oct',289],['2015 Nov',254],['2015 Dec',459],['2016 Jan',386],['2016 Feb',311],['2016 Mar',255],['2016 Apr',255],['2016 May',339],['2016 Jun',422],['2016 Jul',412],['2016 Aug',486],['2016 Sep',446],['2016 Oct',348]]},{name:'Asia',data:[['2015 Oct',162],['2015 Nov',297],['2015 Dec',215],['2016 Jan',271],['2016 Feb',215],['2016 Mar',295],['2016 Apr',222],['2016 May',295],['2016 Jun',195],['2016 Jul',258],['2016 Aug',345],['2016 Sep',290],['2016 Oct',345]]}]
		}
	}, {
		slideId: 'task-sd-slide',
		containerId: 'task-sd',
		config: {
			subtitle: {text:'Service Desk'},
			series: [{name:'N.America',data:[['2015 Oct',175],['2015 Nov',136],['2015 Dec',102],['2016 Jan',117],['2016 Feb',144],['2016 Mar',136],['2016 Apr',68],['2016 May',89],['2016 Jun',117],['2016 Jul',70],['2016 Aug',134],['2016 Sep',83],['2016 Oct',118]]},{name:'Europe',data:[['2015 Oct',140],['2015 Nov',109],['2015 Dec',97],['2016 Jan',96],['2016 Feb',70],['2016 Mar',84],['2016 Apr',109],['2016 May',117],['2016 Jun',58],['2016 Jul',47],['2016 Aug',63],['2016 Sep',56],['2016 Oct',47]]},{name:'Asia',data:[['2015 Oct',61],['2015 Nov',35],['2015 Dec',51],['2016 Jan',55],['2016 Feb',54],['2016 Mar',32],['2016 Apr',21],['2016 May',7],['2016 Jun',22],['2016 Jul',63],['2016 Aug',26],['2016 Sep',10],['2016 Oct',48]]},{name:'S.America',data:[['2015 Oct',10],['2015 Nov',3],['2015 Dec',2],['2016 Jan',6],['2016 Feb',7],['2016 Mar',10],['2016 Apr',11],['2016 May',25],['2016 Jun',38],['2016 Jul',31],['2016 Aug',35],['2016 Sep',29],['2016 Oct',26]]}]
		}
	}, {
		slideId: 'task-ds-slide',
		containerId: 'task-ds',
		config: {
			subtitle: {text:'Deskside'},
			series: [{name:'N.America',data:[['2015 Oct',275],['2015 Nov',209],['2015 Dec',175],['2016 Jan',263],['2016 Feb',256],['2016 Mar',269],['2016 Apr',260],['2016 May',250],['2016 Jun',303],['2016 Jul',258],['2016 Aug',485],['2016 Sep',277],['2016 Oct',350]]},{name:'Europe',data:[['2015 Oct',331],['2015 Nov',236],['2015 Dec',271],['2016 Jan',281],['2016 Feb',186],['2016 Mar',232],['2016 Apr',245],['2016 May',268],['2016 Jun',300],['2016 Jul',208],['2016 Aug',255],['2016 Sep',266],['2016 Oct',188]]},{name:'Asia',data:[['2015 Oct',12],['2015 Nov',43],['2015 Dec',25],['2016 Jan',62],['2016 Feb',44],['2016 Mar',38],['2016 Apr',22],['2016 May',30],['2016 Jun',44],['2016 Jul',43],['2016 Aug',86],['2016 Sep',142],['2016 Oct',55]]},{name:'S.America',data:[['2015 Oct',47],['2015 Nov',28],['2015 Dec',59],['2016 Jan',34],['2016 Feb',32],['2016 Mar',23],['2016 Apr',29],['2016 May',58],['2016 Jun',77],['2016 Jul',60],['2016 Aug',72],['2016 Sep',61],['2016 Oct',48]]}]
		}
	}, {
		slideId: 'task-bs-slide',
		containerId: 'task-bs',
		config: {
			subtitle: {text:'Base Services'},
			series: [{name:'N.America',data:[['2015 Oct',927],['2015 Nov',833],['2015 Dec',767],['2016 Jan',986],['2016 Feb',765],['2016 Mar',826],['2016 Apr',840],['2016 May',874],['2016 Jun',1023],['2016 Jul',770],['2016 Aug',1241],['2016 Sep',812],['2016 Oct',909]]},{name:'Europe',data:[['2015 Oct',517],['2015 Nov',419],['2015 Dec',252],['2016 Jan',413],['2016 Feb',373],['2016 Mar',436],['2016 Apr',373],['2016 May',252],['2016 Jun',617],['2016 Jul',453],['2016 Aug',576],['2016 Sep',403],['2016 Oct',407]]},{name:'S.America',data:[['2015 Oct',193],['2015 Nov',192],['2015 Dec',362],['2016 Jan',275],['2016 Feb',209],['2016 Mar',180],['2016 Apr',183],['2016 May',186],['2016 Jun',230],['2016 Jul',185],['2016 Aug',247],['2016 Sep',151],['2016 Oct',139]]},{name:'Asia',data:[['2015 Oct',82],['2015 Nov',213],['2015 Dec',135],['2016 Jan',145],['2016 Feb',113],['2016 Mar',208],['2016 Apr',166],['2016 May',229],['2016 Jun',119],['2016 Jul',144],['2016 Aug',217],['2016 Sep',130],['2016 Oct',216]]}]
		}
	}],

	utilFunctions: {
		getDefaultConfig: function() {
			return {
				chart : {
					type:'column',
					plotBackgroundColor : null,
					plotBorderWidth : null,
					plotShadow : false
				},
				title: {text:null},
				subtitle: {text:null},
				xAxis: {type: 'category'},
				yAxis: {
					min: 0,
					title: {text:'Ticket Volume'},
					stackLabels: {
						enabled: false,
						style: {
							fontWeight: 'bold',
							color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
						}
					}
				},
				tooltip: {
					formatter: function() {
						return '<b>'+ this.series.name +': '+ this.y +'</b><br/>'+'Total: '+ this.point.stackTotal;
					}
				},
				plotOptions: {
					column: {
						stacking: 'normal',
						dataLabels: {
							enabled: false,
							color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
						}
					}
				},
				series: []
			}
		},
		getItemsById: function(obj, id) {
			return obj.filter(function(val) {
				return val.id === id;
			});
		}
	}
	
});

Reveal.addEventListener('slidechanged',function(ev){
	var o = Reveal.getConfig(),
		util = o.utilFunctions,
		items = o.customItems,
		slideId = ev.currentSlide.id;
	if (slideId.length !== 0) {
		setTimeout(function() {
			var tmpObj = items.filter(function(i) {return i.slideId === slideId;})[0];
			var hcConfig = $.extend({},util.getDefaultConfig(),tmpObj.config);
			$('#' + tmpObj.containerId).highcharts(hcConfig);
		}, 300);
	}
	/*
	setTimeout(function(){ 

		$('#inc-global').highcharts({
			chart : {
				type:'column',
				plotBackgroundColor : null,
				plotBorderWidth : null,
				plotShadow : false
			},
			title: {text:null},
			subtitle: {text:'Global View'},
			xAxis: {type: 'category'},
			yAxis: {
				min: 0,
				title: {text:'Ticket Volume'},
				stackLabels: {
					enabled: false,
					style: {
						fontWeight: 'bold',
						color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
					}
				}
			},
			tooltip: {
				formatter: function() {
					return '<b>'+ this.series.name +': '+ this.y +'</b><br/>'+'Total: '+ this.point.stackTotal;
				}
			},
			plotOptions: {
				column: {
					stacking: 'normal',
					dataLabels: {
						enabled: false,
						color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
					}
				}
			},
			series: [{name:'Phone',data:[['2015 Oct',4056],['2015 Nov',3713],['2015 Dec',3547],['2016 Jan',3877],['2016 Feb',3698],['2016 Mar',4048],['2016 Apr',3415],['2016 May',3604],['2016 Jun',3916],['2016 Jul',3702],['2016 Aug',4605],['2016 Sep',3797],['2016 Oct',3675]]},{name:'Self-service',data:[['2015 Oct',1405],['2015 Nov',1259],['2015 Dec',1072],['2016 Jan',1455],['2016 Feb',1386],['2016 Mar',1460],['2016 Apr',1466],['2016 May',1419],['2016 Jun',1656],['2016 Jul',1470],['2016 Aug',1638],['2016 Sep',1417],['2016 Oct',1672]]},{name:'Email',data:[['2015 Oct',130],['2015 Nov',179],['2015 Dec',525],['2016 Jan',592],['2016 Feb',569],['2016 Mar',851],['2016 Apr',522],['2016 May',557],['2016 Jun',603],['2016 Jul',521],['2016 Aug',696],['2016 Sep',788],['2016 Oct',865]]},{name:'Walk-in',data:[['2015 Oct',86],['2015 Nov',185],['2015 Dec',146],['2016 Jan',265],['2016 Feb',320],['2016 Mar',307],['2016 Apr',422],['2016 May',412],['2016 Jun',324],['2016 Jul',291],['2016 Aug',305],['2016 Sep',171],['2016 Oct',182]]},{name:'Chat',data:[['2015 Oct',268],['2015 Nov',240],['2015 Dec',185],['2016 Jan',278],['2016 Feb',202],['2016 Mar',226],['2016 Apr',253],['2016 May',227],['2016 Jun',270],['2016 Jul',320],['2016 Aug',361],['2016 Sep',257],['2016 Oct',299]]}]
		});

		$('#inc-sd').highcharts({
			chart : {
				type:'column',
				plotBackgroundColor : null,
				plotBorderWidth : null,
				plotShadow : false
			},
			title: {text:null},
			subtitle: {text:'Service Desk'},
			xAxis: {type: 'category'},
			yAxis: {
				min: 0,
				title: {text:'Ticket Volume'},
				stackLabels: {
					enabled: false,
					style: {
						fontWeight: 'bold',
						color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
					}
				}
			},
			tooltip: {
				formatter: function() {
					return '<b>'+ this.series.name +': '+ this.y +'</b><br/>'+'Total: '+ this.point.stackTotal;
				}
			},
			plotOptions: {
				column: {
					stacking: 'normal',
					dataLabels: {
						enabled: false,
						color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
					}
				}
			},
			series: [{name:'Phone',data:[['2015 Oct',1891],['2015 Nov',1858],['2015 Dec',1800],['2016 Jan',1880],['2016 Feb',1748],['2016 Mar',1904],['2016 Apr',1718],['2016 May',1828],['2016 Jun',2011],['2016 Jul',1908],['2016 Aug',2291],['2016 Sep',1895],['2016 Oct',1761]]},{name:'Self-service',data:[['2015 Oct',383],['2015 Nov',362],['2015 Dec',292],['2016 Jan',408],['2016 Feb',403],['2016 Mar',412],['2016 Apr',376],['2016 May',372],['2016 Jun',465],['2016 Jul',440],['2016 Aug',463],['2016 Sep',378],['2016 Oct',387]]},{name:'Chat',data:[['2015 Oct',204],['2015 Nov',183],['2015 Dec',140],['2016 Jan',197],['2016 Feb',126],['2016 Mar',145],['2016 Apr',172],['2016 May',166],['2016 Jun',198],['2016 Jul',227],['2016 Aug',268],['2016 Sep',188],['2016 Oct',220]]},{name:'Email',data:[['2015 Oct',15],['2015 Nov',9],['2015 Dec',12],['2016 Jan',16],['2016 Feb',31],['2016 Mar',16],['2016 Apr',27],['2016 May',5],['2016 Jun',7],['2016 Jul',8],['2016 Aug',13],['2016 Sep',26],['2016 Oct',24]]},{name:'Walk-in',data:[['2015 Oct',2],['2015 Nov',1],['2015 Dec',0],['2016 Jan',2],['2016 Feb',0],['2016 Mar',1],['2016 Apr',5],['2016 May',4],['2016 Jun',5],['2016 Jul',1],['2016 Aug',3],['2016 Sep',2],['2016 Oct',5]]}]
		});

		$('#inc-ds').highcharts({
			chart : {
				type:'column',
				plotBackgroundColor : null,
				plotBorderWidth : null,
				plotShadow : false
			},
			title: {text:null},
			subtitle: {text:'Deskside'},
			xAxis: {type: 'category'},
			yAxis: {
				min: 0,
				title: {text:'Ticket Volume'},
				stackLabels: {
					enabled: false,
					style: {
						fontWeight: 'bold',
						color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
					}
				}
			},
			tooltip: {
				formatter: function() {
					return '<b>'+ this.series.name +': '+ this.y +'</b><br/>'+'Total: '+ this.point.stackTotal;
				}
			},
			plotOptions: {
				column: {
					stacking: 'normal',
					dataLabels: {
						enabled: false,
						color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
					}
				}
			},
			series: [{name:'Phone',data:[['2015 Oct',534],['2015 Nov',550],['2015 Dec',543],['2016 Jan',594],['2016 Feb',688],['2016 Mar',714],['2016 Apr',521],['2016 May',511],['2016 Jun',655],['2016 Jul',482],['2016 Aug',571],['2016 Sep',498],['2016 Oct',459]]},{name:'Self-service',data:[['2015 Oct',350],['2015 Nov',339],['2015 Dec',322],['2016 Jan',479],['2016 Feb',357],['2016 Mar',358],['2016 Apr',381],['2016 May',384],['2016 Jun',464],['2016 Jul',386],['2016 Aug',377],['2016 Sep',355],['2016 Oct',439]]},{name:'Walk-in',data:[['2015 Oct',74],['2015 Nov',174],['2015 Dec',136],['2016 Jan',193],['2016 Feb',274],['2016 Mar',265],['2016 Apr',271],['2016 May',333],['2016 Jun',246],['2016 Jul',207],['2016 Aug',224],['2016 Sep',159],['2016 Oct',147]]},{name:'Email',data:[['2015 Oct',61],['2015 Nov',23],['2015 Dec',35],['2016 Jan',28],['2016 Feb',36],['2016 Mar',43],['2016 Apr',21],['2016 May',46],['2016 Jun',42],['2016 Jul',20],['2016 Aug',5],['2016 Sep',36],['2016 Oct',37]]},{name:'Chat',data:[['2015 Oct',19],['2015 Nov',16],['2015 Dec',12],['2016 Jan',21],['2016 Feb',26],['2016 Mar',30],['2016 Apr',23],['2016 May',19],['2016 Jun',19],['2016 Jul',30],['2016 Aug',29],['2016 Sep',16],['2016 Oct',17]]}]
		});

		$('#inc-bs').highcharts({
			chart : {
				type:'column',
				plotBackgroundColor : null,
				plotBorderWidth : null,
				plotShadow : false
			},
			title: {text:null},
			subtitle: {text:'Base Services'},
			xAxis: {type: 'category'},
			yAxis: {
				min: 0,
				title: {text:'Ticket Volume'},
				stackLabels: {
					enabled: false,
					style: {
						fontWeight: 'bold',
						color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
					}
				}
			},
			tooltip: {
				formatter: function() {
					return '<b>'+ this.series.name +': '+ this.y +'</b><br/>'+'Total: '+ this.point.stackTotal;
				}
			},
			plotOptions: {
				column: {
					stacking: 'normal',
					dataLabels: {
						enabled: false,
						color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
					}
				}
			},
			series: [{name:'Email',data:[['2015 Oct',17],['2015 Nov',111],['2015 Dec',418],['2016 Jan',519],['2016 Feb',489],['2016 Mar',759],['2016 Apr',450],['2016 May',492],['2016 Jun',533],['2016 Jul',442],['2016 Aug',269],['2016 Sep',197],['2016 Oct',301]]},{name:'Phone',data:[['2015 Oct',305],['2015 Nov',233],['2015 Dec',142],['2016 Jan',197],['2016 Feb',162],['2016 Mar',270],['2016 Apr',225],['2016 May',246],['2016 Jun',196],['2016 Jul',174],['2016 Aug',214],['2016 Sep',200],['2016 Oct',282]]},{name:'Self-service',data:[['2015 Oct',111],['2015 Nov',96],['2015 Dec',63],['2016 Jan',90],['2016 Feb',93],['2016 Mar',72],['2016 Apr',112],['2016 May',98],['2016 Jun',94],['2016 Jul',93],['2016 Aug',82],['2016 Sep',88],['2016 Oct',130]]},{name:'Walk-in',data:[['2015 Oct',5],['2015 Nov',3],['2015 Dec',2],['2016 Jan',4],['2016 Feb',31],['2016 Mar',1],['2016 Apr',43],['2016 May',26],['2016 Jun',31],['2016 Jul',13],['2016 Aug',28],['2016 Sep',4],['2016 Oct',13]]},{name:'Chat',data:[['2015 Oct',3],['2015 Nov',8],['2015 Dec',4],['2016 Jan',12],['2016 Feb',10],['2016 Mar',8],['2016 Apr',7],['2016 May',15],['2016 Jun',9],['2016 Jul',16],['2016 Aug',11],['2016 Sep',12],['2016 Oct',15]]}]
		});

	},300);
	*/
},false);

(function(Highcharts) {

	setTimeout(function() {
		Highcharts.theme = {
			chart: {
				backgroundColor: 'rgba(100,100,100,0.4)'
			},
			lang: {
				contextButtonTitle: 'ACA context menu',
				decimalPoint: '.',
				downloadJPEG: 'Export as JPG',
				downloadPDF: 'Export as PDF',
				downloadSVG: 'Export as SVG',
				drillUpText: 'Back to {series.name}',
				loading: 'This will be awesome...',
				months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
				noData: 'No data to display',
				numericSymbols: ['k', 'M', 'G', 'T', 'P', 'E'],
				printChart: 'Export Chart',
				resetZoom: 'Reset zoom',
				resetZoomTitle: 'Reset zoom level 1:1',
				shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
				thousandsSep: ',',
				weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
			},
			credits: {
				enabled: true,
				href: 'mailto:ariel.andrade@stefanini.com?subject=Stefanini Dashboard Query',
				text: 'Created by ACAndrade',
				style: {
					fontSize: '10px',
					fontFamily: 'Roboto, Verdana, Arial, sans-serif',
					color: 'rgba(255,255,255,0.2)'
				}
			},
			title: {
				style: {
					fontFamily: 'Roboto',
					color: 'rgba(255,255,255,0.8)',
					textTransform: 'uppercase',
					fontSize: '16px',
					fontWeight: 'medium'
				}
			},
			subtitle: {
				style: {
					textTransform: 'uppercase',
					fontSize: '14px',
					fontFamily: 'Roboto',
					fontStyle: 'italic',
					color: 'rgba(255,255,255,0.7)'
				}
			},
			legend: {
				itemStyle: {
					color: 'rgba(255,255,255,0.5)'
				},
				itemHiddenStyle: {
					color: 'rgba(255,255,255,0.1)'
				},
			},
			plotOptions: {
				bar: {
					borderWidth: 1,
					borderColor: 'rgba(0,0,0,0.1)'
				},
				series: {
					borderWidth: 1,
					borderColor: 'rgba(0,0,0,0.1)',
					groupPadding: 0.01
				},
				column: {
					pointPadding: 0.1,
					borderWidth: 0,
					borderColor: 'rgba(0,0,0,0.1)',
					borderRadius: 1,
					states: {
						hover: {
							enabled: true
						}
					}
				},
				spline: {
					lineWidth: 1,
					marker: {
						lineWidth: 2,
						fillColor: '#fff',
						lineColor: '#484343',
						symbol: 'circle'
					},
					dataLabels: {
						style: {
							color: '#808080',
							fontWeight: 'regular',
							fontSize: '10px',
							fontFamily: 'Verdana'
						}
					}
				},
				line: {
					lineWidth: 1
				}
			},
			tooltip: {
				backgroundColor: 'rgba(0, 0, 0, 0.5)',
				style: {
					fontSize: '11px',
					color: '#F0F0F0'
				}
			},
			yAxis: {
				gridLineColor: '#707073',
				labels: {
					style: {
						color: 'rgba(255,255,255,0.4)'
					}
				},
				lineColor: 'rgba(0,0,0,0.1)',
				lineWidth: 0,
				tickColor: 'rgba(0,0,0,0.4)',
				title: {
					style: {
						color: 'rgba(255,255,255,0.5)'
					},
					text: null
				}
			},
			xAxis: {
				gridLineColor: '#707073',
				labels: {
					style: {
						color: 'rgba(255,255,255,0.4)',
						fontSize: '10px'
					}
				},
				lineColor: 'rgba(0,0,0,0.1)',
				lineWidth: 0,
				tickColor: 'rgba(0,0,0,0.4)',
				title: {
					style: {
						color: 'rgba(255,255,255,0.5)'							
					}
				}
			},
			exporting: {
				buttons: {
					contextButton: {
						menuItems: [{
							text: 'Export to PNG (small)',
							onclick: function() {
								this.exportChart({
									width: 250
								});
							}
						}, {
							text: 'Export to PNG (large)',
							onclick: function() {
								this.exportChart();
							},
							separator: false
						}, {
							text: 'Export as SVG',
							onclick: function() {
								this.exportChartLocal({
									type: 'image/svg+xml'
								});
							},
							separator: false
						}]
					}
				}
			},
			//colors: ['#2dc3e8', '#313035', '#a0d468', '#f9b256', '#7e3794', '#fb6e52', '#ffce55', '#6f85bf', '#bc5679', '#8cc474', '#91e8e1']
			//colors: ['#3498db', '#464545', '#F15A60', '#6AC37A', '#80BFE9', '#F48388', '#EFEF80', '#9370DB', '#D98880', '#87CEFA', '#CCCCCC', '#E7B2D4']
			colors: ['#5DA3E7', '#464545', '#75E95D', '#F9953A', '#7077FF', '#F15A60', '#E4D354', '#B8D2EC', '#D98880', '#87CEFA', '#CCCCCC', '#E7B2D4']
		};
		Highcharts.setOptions(Highcharts.theme);
	},500);

}(window.Highcharts));