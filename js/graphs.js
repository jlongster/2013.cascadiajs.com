
function renderBenchmarks(el, data) {
    var labels = data.labels;
    var native = data.native.slice();
    var spidermonkey = data.spidermonkey.slice();
    var v8 = data.v8.slice();
    el = $(el).html('');

    for(var i=0; i<native.length; i++) {
        var n = native[i];
        spidermonkey[i] /= n;
        v8[i] /= n;
        native[i] = 1;
    }

    var barHeight = 15;
    var barSpacing = 20;
    var textWidth = 250;
    var fullWidth = 800;
    var fullHeight = ((barHeight * native.length * 3) +
                      native.length * barSpacing +
                      50);

    var max = Math.max(d3.max(native), d3.max(spidermonkey), d3.max(v8));
    var x = d3.scale.linear().domain([0, max]).range([0, fullWidth - textWidth - 40]);
    
    var g = d3.select(el[0]).append('svg')
        .attr('width', fullWidth)
        .attr('height', fullHeight);

    function renderData(data, cls, color, offset) {
        var y = function(d, i) {
            return i * (barHeight * 3 + barSpacing) + offset;
        };

        g.selectAll('rect.' + cls).data(data)
            .enter().append('rect')
            .attr('class', cls)
            .attr('y', y)
            .attr('x', textWidth)
            .attr('height', barHeight)
            .attr('fill', color)
            .attr('width', 0)
            .transition()
            .attr('width', x);

    }

    g.selectAll('text.ylabel').data(labels)
        .enter().append('text')
        .attr('class', 'ylabel')
        .attr('y', function(d, i) {
            return i * (barHeight * 3 + barSpacing) + 45;
        })
        .text(String);

    g.selectAll('text.xlabel').data(['1x', '2x', '3x'])
        .enter().append('text')
        .attr('class', 'xlabel') 
        .attr('x', function(d, i) { return x(i + 1) + textWidth; })
        .attr('y', fullHeight)
        .text(String);

    g.selectAll('line').data([1, 2, 3])
        .enter().append('line')
        .attr('x1', function(d) { return x(d) + textWidth; })
        .attr('x2', function(d) { return x(d) + textWidth; })
        .attr('y1', 0)
        .attr('y2', fullHeight - 50)
        .style('stroke', 'white');

    renderData(native, 'native', 'rgb(120, 200, 90)', 10);
    renderData(spidermonkey, 'spidermonkey', '#7495c0', 10 + barHeight + 2);
    renderData(v8, 'v8', 'rgb(200, 90, 120)', 10 + barHeight * 2 + 4);
}
