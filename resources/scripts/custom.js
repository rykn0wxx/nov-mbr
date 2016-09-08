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
	parallaxBackgroundVertical: 50,

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
Reveal.addEventListener("slidechanged",function(){
	setTimeout(function(){ // Timeout required to load the plugin
		Chart.defaults.global.responsive = true;
		console.log(Chart);
	},300);
},false);