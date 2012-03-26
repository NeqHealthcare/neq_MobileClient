Ext.setup({
    onReady: function() {
        //create draw component with a yellow circle in it
        var drawComponent = new Ext.draw.Component({
            items: [{
                type: 'circle',
                fill: '#ffc',
                radius: 100,
                x: 100,
                y: 100
            }]
        });

        //add the component to the panel
        new Ext.chart.Panel({
            fullscreen: true,
            title: 'Yellow Circle',
            items: drawComponent
        });

        //make sure we render the image
        drawComponent.surface.renderFrame();
    }
});