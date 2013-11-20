
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
	controls: true,
	progress: true,
	history: true,
	center: true,

	theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
	transition: Reveal.getQueryHash().transition || 'linear', // default/cube/page/concave/zoom/linear/fade/none

	// Optional libraries used to extend on reveal.js
	dependencies: [
	    { src: 'lib/js/classList.js', condition: function() { return !document.body.classList; } },
	    { src: 'plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
	    { src: 'plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
	    { src: 'plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
	    { src: 'plugin/zoom-js/zoom.js', async: true, condition: function() { return !!document.body.classList; } },
	    { src: 'plugin/notes/notes.js', async: true, condition: function() { return !!document.body.classList; } }
	]
});

function checkBackground() {
    var slide = $('section.present');
    var bgClass = slide.data('bg') || 'dark';
    var el = $('div.reveal');

    ['blue', 'orange'].forEach(function(bg) {
        el.removeClass(bg);
    });

    el.addClass(bgClass);
}

function checkGraphs() {
    var slide = $('section.present');
    var graph = slide.data('graph');

    if(graph) {
        setTimeout(function() {
            renderBenchmarks(slide.find('.graph')[0], graphData[graph]);
        }, 500);
    }
}

Reveal.addEventListener('ready', function() {
    checkBackground();
    checkGraphs();
});
Reveal.addEventListener('slidechanged', function() {
    checkBackground();
    checkGraphs();
});
