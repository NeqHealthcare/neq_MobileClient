/**
 * @class Ext.chart.series.Line
 * @extends Ext.chart.series.Cartesian
 *
 * Creates a Line Chart. A Line Chart is a useful visualization technique to display quantitative information for different
 * categories or other real values (as opposed to the bar chart), that can show some progression (or regression) in the dataset.
 * As with all other series, the Line Series must be appended in the *series* Chart array configuration. See the Chart
 * documentation for more information. A typical configuration object for the line series could be:
 *
 * {@img Ext.chart.series.Line/Ext.chart.series.Line.png Ext.chart.series.Line chart series}
 *
 *     var store = new Ext.data.JsonStore({
 *         fields: ['name', 'data1', 'data2', 'data3', 'data4', 'data5'],
 *         data: [
 *             {'name':'metric one', 'data1':10, 'data2':12, 'data3':14, 'data4':8, 'data5':13},
 *             {'name':'metric two', 'data1':7, 'data2':8, 'data3':16, 'data4':10, 'data5':3},
 *             {'name':'metric three', 'data1':5, 'data2':2, 'data3':14, 'data4':12, 'data5':7},
 *             {'name':'metric four', 'data1':2, 'data2':14, 'data3':6, 'data4':1, 'data5':23},
 *             {'name':'metric five', 'data1':27, 'data2':38, 'data3':36, 'data4':13, 'data5':33}
 *         ]
 *     });
 *
 *     new Ext.chart.Chart({
 *         renderTo: Ext.getBody(),
 *         width: 500,
 *         height: 300,
 *         animate: true,
 *         store: store,
 *         axes: [{
 *             type: 'Numeric',
 *             position: 'bottom',
 *             fields: ['data1'],
 *             label: {
 *                 renderer: Ext.util.Format.numberRenderer('0,0')
 *             },
 *             title: 'Sample Values',
 *             grid: true,
 *             minimum: 0
 *         }, {
 *             type: 'Category',
 *             position: 'left',
 *             fields: ['name'],
 *             title: 'Sample Metrics'
 *         }],
 *         series: [{
 *             type: 'line',
 *             highlight: {
 *                 size: 7,
 *                 radius: 7
 *             },
 *             axis: 'left',
 *             xField: 'name',
 *             yField: 'data1',
 *             markerConfig: {
 *                 type: 'cross',
 *                 size: 4,
 *                 radius: 4,
 *                 'stroke-width': 0
 *             }
 *         }, {
 *             type: 'line',
 *             highlight: {
 *                 size: 7,
 *                 radius: 7
 *             },
 *             axis: 'left',
 *             fill: true,
 *             xField: 'name',
 *             yField: 'data3',
 *             markerConfig: {
 *                 type: 'circle',
 *                 size: 4,
 *                 radius: 4,
 *                 'stroke-width': 0
 *             }
 *         }]
 *     });
 *
 * In this configuration we're adding two series (or lines), one bound to the `data1`
 * property of the store and the other to `data3`. The type for both configurations is
 * `line`. The `xField` for both series is the same, the name propert of the store.
 * Both line series share the same axis, the left axis. You can set particular marker
 * configuration by adding properties onto the markerConfig object. Both series have
 * an object as highlight so that markers animate smoothly to the properties in highlight
 * when hovered. The second series has `fill=true` which means that the line will also
 * have an area below it of the same color.
 *
 * **Note:** In the series definition remember to explicitly set the axis to bind the
 * values of the line series to. This can be done by using the `axis` configuration property.
 */
Ext.define('Ext.chart.series.Line', { 
 
    extend: 'Ext.chart.series.Cartesian',

    uses: [
        'Ext.chart.Shape'
    ],

    type: 'line',

    config: {
        /**
         * @cfg {Number} selectionTolerance
         * The offset distance from the cursor position to the line series to trigger events (then used for highlighting series, etc).
         */
        selectionTolerance: 20,

        /**
         * @cfg {Boolean} showMarkers
         * Whether markers should be displayed at the data points along the line. If true,
         * then the {@link #markerConfig} config item will determine the markers' styling.
         */
        showMarkers: true,

        /**
         * @cfg {Object} markerConfig
         * The display style for the markers. Only used if {@link #showMarkers} is true.
         * The markerConfig is a configuration object containing the same set of properties defined in
         * the Sprite class. For example, if we were to set red circles as markers to the line series we could
         * pass the object:
         *
         <pre><code>
            markerConfig: {
                type: 'circle',
                radius: 4,
                'fill': '#f00'
            }
         </code></pre>

         */
        markerConfig: {
            zIndex : 40
        },

        /**
         * @cfg {Object} style
         * An object containing styles for the visualization lines. These styles will override the theme styles.
         * Some options contained within the style object will are described next.
         */

        /**
         * @cfg {Boolean/Number} smooth
         * If set to `true` or a non-zero number, the line will be smoothed/rounded around its points; otherwise
         * straight line segments will be drawn.
         *
         * A numeric value is interpreted as a divisor of the horizontal distance between consecutive points in
         * the line; larger numbers result in sharper curves while smaller numbers result in smoother curves.
         *
         * If set to `true` then a default numeric value of 3 will be used.
         */
        smooth: false,


        /**
         * @cfg {Boolean} fill
         * If true, the area below the line will be filled using either the styles defined with sass or
         * {@link #style.fill} and {@link #style.opacity} config properties from {@link style}.
         */
        fill: false
    },

    /**
     * @private Default numeric smoothing value to be used when {@link #smooth} = true.
     */
    defaultSmoothness: 3,

    /**
     * @private Size of the buffer area on either side of the viewport to provide seamless zoom/pan
     * transforms. Expressed as a multiple of the viewport length, e.g. 1 will make the buffer on
     * each side equal to the length of the visible axis viewport.
     */
    overflowBuffer: 1,

    constructor: function(config) {
        this.callParent(arguments);
        var me = this,
            surface = me.getSurface();

        if (me.getShowMarkers()) {
            me.markerGroup = surface.getGroup(me.seriesId + '-markers');
        }
    },

    // @private makes an average of points when there are more data points than pixels to be rendered.
    shrink: function(xValues, yValues, size) {
        // Start at the 2nd point...
        var len = xValues.length,
            ratio = Math.floor(len / size),
            i = 1,
            xSum = 0,
            ySum = 0,
            xRes = [xValues[0]],
            yRes = [yValues[0]];

        for (; i < len; ++i) {
            xSum += xValues[i] || 0;
            ySum += yValues[i] || 0;
            if (i % ratio == 0) {
                xRes.push(xSum/ratio);
                yRes.push(ySum/ratio);
                xSum = 0;
                ySum = 0;
            }
        }
        return {
            x: xRes,
            y: yRes
        };
    },

    /**
     * Draws the series for the current chart.
     */
    drawSeries: function() {
        var me = this,
            chart = me.getChart(),
            chartAxes = chart.getAxes(),
            axisPosition,
            store = chart.substore || chart.getStore(),
            storeCount = me.getRecordCount(),
            bufferWidth = chart.chartBBox.width * me.overflowBuffer,
            surface = me.getSurface(),
            bbox = {},
            group = me.group,
            showMarkers = me.getShowMarkers(),
            markerGroup = me.markerGroup,
            enableShadows = chart.getShadow(),
            shadowGroups = me.shadowGroups,
            shadowAttributes = me.getShadowAttributes(),
            smooth = me.getSmooth(),
            lnsh = shadowGroups.length,
            dummyPath = ["M"],
            path = ["M"],
            markerIndex = chart.markerIndex,
            shadowBarAttr,
            xValues = [],
            xValueMap = {},
            yValues = [],
            yValueMap = {},
            onbreak = false,
            markerStyle = me.markerStyle.style,
            seriesStyle = me.style,
            colors = chart.getColorsStyle(),
            colorArrayLength = colors && colors.length || 0,
            isNumber = Ext.isNumber,
            seriesIdx = me.seriesIdx, 
            boundAxes = me.getAxesForXAndYFields(),
            boundXAxis = boundAxes.xAxis,
            boundYAxis = boundAxes.yAxis,
            shadows, shadow, shindex, fromPath, fill, fillPath, rendererAttributes,
            x, y, prevX, prevY, firstX, firstY, markerCount, i, j, ln, axis, ends, marker, markerAux, item, xValue,
            yValue, coords, xScale, yScale, minX, maxX, minY, maxY, line, animation, endMarkerStyle,
            endLineStyle, type, count, bufferMinX, bufferMaxX;

        if (me.fireEvent('beforedraw', me) === false) {
            return;
        }

        me.callParent(arguments);

        //if store is empty or the series is excluded in the legend then there's nothing to draw.
        if (!storeCount || me.seriesIsHidden) {
            surface.getItems().hide(true);
            return;
        }

        //prepare style objects for line and markers
        endMarkerStyle = Ext.apply(markerStyle, me.getMarkerConfig());
        type = endMarkerStyle.type;
        delete endMarkerStyle.type;
        endLineStyle = seriesStyle;
        //if no stroke with is specified force it to 0.5 because this is
        //about making *lines*
        if (!endLineStyle['stroke-width']) {
            endLineStyle['stroke-width'] = 0.5;
        }
        //If we're using a time axis and we need to translate the points,
        //then reuse the first markers as the last markers.
        if (markerIndex && markerGroup && markerGroup.getCount()) {
            for (i = 0; i < markerIndex; i++) {
                marker = markerGroup.getAt(i);
                markerGroup.remove(marker);
                markerGroup.add(marker);
                markerAux = markerGroup.getAt(markerGroup.getCount() - 2);
                marker.setAttributes({
                    x: 0,
                    y: 0,
                    translate: {
                        x: markerAux.attr.translation.x,
                        y: markerAux.attr.translation.y
                    }
                }, true);
            }
        }

        me.unHighlightItem();
        me.cleanHighlights();

        me.setBBox();
        bbox = me.bbox;
        me.clipRect = [bbox.x, bbox.y, bbox.width, bbox.height];

        if (boundXAxis && chart.getAxes().get(boundXAxis)) {
            ends = chart.getAxes().get(boundXAxis).calcEnds();
            minX = ends.from;
            maxX = ends.to;
        }

        if (boundYAxis && chart.getAxes().get(boundYAxis)) {
            ends = chart.getAxes().get(boundYAxis).calcEnds();
            minY = ends.from;
            maxY = ends.to;
        } else {
            ends = me.getMinMaxYValues();
            minY = ends.min;
            maxY = ends.max;
        }

        if (isNaN(minX)) {
            minX = 0;
            xScale = bbox.width / ((storeCount - 1) || 1);
        }
        else {
            xScale = bbox.width / ((maxX - minX) || (storeCount -1) || 1);
        }

        if (isNaN(minY)) {
            minY = 0;
            yScale = bbox.height / ((storeCount - 1) || 1);
        }
        else {
            yScale = bbox.height / ((maxY - minY) || 1);
        }

        // Find the min and max x values that fit within the zoom/pan buffer area
        bufferMinX = minX - (bufferWidth + me.panX) / xScale;
        bufferMaxX = bufferMinX + (bufferWidth * 2 + chart.chartBBox.width) / xScale;

        // Extract all x and y values from the store
        me.eachRecord(function(record, i) {
            xValue = record.get(me.getXField());

            // Ensure a value
            if (typeof xValue == 'string' || typeof xValue == 'object' && !Ext.isDate(xValue)
                //set as uniform distribution if the axis is a category axis.
                || boundXAxis && chartAxes.get(boundXAxis) && chartAxes.get(boundXAxis).type == 'category') {
                    if (xValue in xValueMap) {
                        xValue = xValueMap[xValue];
                    } else {
                        xValue = xValueMap[xValue] = i;
                    }
            }

            // Filter out values that don't fit within the pan/zoom buffer area
            if (xValue >= bufferMinX && xValue <= bufferMaxX) {
                yValue = record.get(me.getYField());
                //skip undefined values
                if (yValue === null || typeof yValue == 'undefined' || (typeof yValue == 'string' && !yValue)) {
                    //<debug warn>
                    if (Ext.isDefined(Ext.global.console)) {
                        Ext.global.console.warn("[Ext.chart.series.Line]  Skipping a store element with an undefined value at ", record, xValue, yValue);
                    }
                    //</debug>
                    return;
                }
                // Ensure a value
                if (typeof yValue == 'string' || typeof yValue == 'object' && !Ext.isDate(xValue)
                    //set as uniform distribution if the axis is a category axis.
                    || boundYAxis && chartAxes.get(boundYAxis) && chartAxes.get(boundYAxis).type == 'category') {
                    yValue = i;
                }
                xValues.push(xValue);
                yValues.push(yValue);
            }
        });

        ln = xValues.length;
        if (ln > bbox.width) {
            coords = me.shrink(xValues, yValues, bbox.width);
            xValues = coords.x;
            yValues = coords.y;
        }

        me.items = [];

        count = 0;
        ln = xValues.length;
        for (i = 0; i < ln; i++) {
            xValue = xValues[i];
            yValue = yValues[i];
            if (yValue === false) {
                if (path.length == 1) {
                    path = [];
                }
                onbreak = true;
                me.items.push(false);
                continue;
            } else {
                x = (bbox.x + (xValue - minX) * xScale).toFixed(2);
                y = ((bbox.y + bbox.height) - (yValue - minY) * yScale).toFixed(2);
                if (onbreak) {
                    onbreak = false;
                    path.push('M');
                }
                path = path.concat([x, y]);
            }
            if ((typeof firstY == 'undefined') && (typeof y != 'undefined')) {
                firstY = y;
                firstX = x;
            }
            // If this is the first line, create a dummypath to animate in from.
            if (!me.line || chart.resizing) {
                dummyPath = dummyPath.concat([x, bbox.y + bbox.height / 2]);
            }

            // When resizing, reset before animating
            if (chart.getAnimate() && chart.resizing && me.line) {
                me.line.setAttributes({
                    path: dummyPath
                }, true);
                if (me.fillPath) {
                    me.fillPath.setAttributes({
                        path: dummyPath,
                        opacity: 0.2
                    }, true);
                }
                if (me.line.shadows) {
                    shadows = me.line.shadows;
                    for (j = 0, lnsh = shadows.length; j < lnsh; j++) {
                        shadow = shadows[j];
                        shadow.setAttributes({
                            path: dummyPath
                        }, true);
                    }
                }
            }
            if (showMarkers) {
                marker = markerGroup.getAt(count++);
                if (!marker) {
                    marker = Ext.chart.Shape[type](surface, Ext.apply({
                        group: [group, markerGroup],
                        x: 0, y: 0,
                        translate: {
                            x: prevX || x,
                            y: prevY || (bbox.y + bbox.height / 2)
                        },
                        value: '"' + xValue + ', ' + yValue + '"',
                    }, endMarkerStyle));
                    marker._to = {
                        translate: {
                            x: x,
                            y: y
                        }
                    };
                } else {
                    marker.setAttributes({
                        value: '"' + xValue + ', ' + yValue + '"',
                        x: 0, y: 0,
                        hidden: false
                    }, true);
                    marker._to = {
                        translate: {
                            x: x, y: y
                        }
                    };
                }
            }
            me.items.push({
                series: me,
                value: [xValue, yValue],
                point: [x, y],
                sprite: marker,
                storeItem: store.getAt(i)
            });
            prevX = x;
            prevY = y;
        }

        if (path.length <= 1) {
            //nothing to be rendered
            return;
        }

        if (smooth) {
            path = Ext.draw.Draw.smooth(path, isNumber(smooth) ? smooth : me.defaultSmoothness);
        }

        //Correct path if we're animating timeAxis intervals
        if (chart.markerIndex && me.previousPath) {
            fromPath = me.previousPath;
            fromPath.splice(1, 2);
        } else {
            fromPath = path;
        }

        // Only create a line if one doesn't exist.
        if (!me.line) {
            me.line = surface.add(Ext.apply({
                type: 'path',
                group: group,
                path: dummyPath,
                stroke: endLineStyle.stroke || endLineStyle.fill
            }, endLineStyle || {}));

            if (enableShadows) {
                me.line.setAttributes(me.getShadowOptions(), true);
            }

            //unset fill here (there's always a default fill withing the themes).
            me.line.setAttributes({
                fill: 'none',
                zIndex: 30
            });
            if (!endLineStyle.stroke && colorArrayLength) {
                me.line.setAttributes({
                    stroke: colors[seriesIdx % colorArrayLength]
                }, true);
            }
            if (enableShadows) {
                //create shadows
                shadows = me.line.shadows = [];
                for (shindex = 0; shindex < lnsh; shindex++) {
                    shadowBarAttr = shadowAttributes[shindex];
                    shadowBarAttr = Ext.apply({}, shadowBarAttr, { path: dummyPath });
                    shadow = surface.add(Ext.apply({}, {
                        type: 'path',
                        group: shadowGroups[shindex]
                    }, shadowBarAttr));
                    shadows.push(shadow);
                }
            }
        }
        if (me.getFill()) {
            fillPath = path.concat([
                ["L", x, bbox.y + bbox.height],
                ["L", firstX, bbox.y + bbox.height],
                ["L", firstX, firstY]
            ]);
            if (!me.fillPath) {
                me.fillPath = surface.add({
                    group: group,
                    type: 'path',
                    opacity: endLineStyle.opacity || 0.3,
                    fill: endLineStyle.fill || colors[seriesIdx % colorArrayLength],
                    path: dummyPath
                });
            }
        }
        markerCount = showMarkers && markerGroup.getCount();
        if (chart.getAnimate()) {
            fill = me.getFill();
            line = me.line;
            //Add renderer to line. There is not unique record associated with this.
            rendererAttributes = me.getRenderer()(line, false, { path: path }, i, store);
            Ext.apply(rendererAttributes || {}, endLineStyle || {}, {
                stroke: endLineStyle.stroke || endLineStyle.fill
            });
            //fill should not be used here but when drawing the special fill path object
            delete rendererAttributes.fill;
            line.show(true);
            if (chart.markerIndex && me.previousPath) {
                me.animation = animation = me.onAnimate(line, {
                    to: rendererAttributes,
                    from: {
                        path: fromPath
                    }
                });
            } else {
                me.animation = animation = me.onAnimate(line, {
                    to: rendererAttributes
                });
            }
            //animate shadows
            if (enableShadows) {
                shadows = line.shadows;
                for(j = 0; j < lnsh; j++) {
                    shadows[j].show(true);
                    if (chart.markerIndex && me.previousPath) {
                        me.onAnimate(shadows[j], {
                            to: { path: path },
                            from: { path: fromPath }
                        });
                    } else {
                        me.onAnimate(shadows[j], {
                            to: { path: path }
                        });
                    }
                }
            }
            //animate fill path
            if (fill) {
                me.fillPath.show(true);
                me.onAnimate(me.fillPath, {
                    to: Ext.apply({}, {
                        path: fillPath,
                        fill: endLineStyle.fill || colors[seriesIdx % colorArrayLength],
                        'stroke-width': 0
                    }, endLineStyle || {})
                });
            }
            //animate markers
            if (showMarkers) {
                count = 0;
                for(i = 0; i < ln; i++) {
                    if (me.items[i]) {
                        item = markerGroup.getAt(count++);
                        if (item) {
                            rendererAttributes = me.getRenderer()(item, store.getAt(i), item._to, i, store);
                            me.onAnimate(item, {
                                to: Ext.apply(rendererAttributes || {}, endMarkerStyle || {})
                            });
                            item.show(true);
                        }
                    }
                }
                for(; count < markerCount; count++) {
                    item = markerGroup.getAt(count);
                    item.hide(true);
                }
//                for(i = 0; i < (chart.markerIndex || 0)-1; i++) {
//                    item = markerGroup.getAt(i);
//                    item.hide(true);
//                }
            }
        } else {
            rendererAttributes = me.getRenderer()(me.line, false, { path: path, hidden: false }, i, store);
            Ext.apply(rendererAttributes, endLineStyle || {}, {
                stroke: endLineStyle.stroke || endLineStyle.fill
            });
            //fill should not be used here but when drawing the special fill path object
            delete rendererAttributes.fill;
            me.line.setAttributes(rendererAttributes, true);
            //set path for shadows
            if (enableShadows) {
                shadows = me.line.shadows;
                for(j = 0; j < lnsh; j++) {
                    shadows[j].setAttributes({
                        path: path,
                        hidden: false
                    }, true);
                }
            }
            if (me.getFill()) {
                me.fillPath.setAttributes({
                    path: fillPath,
                    hidden: false
                }, true);
            }
            if (showMarkers) {
                count = 0;
                for(i = 0; i < ln; i++) {
                    if (me.items[i]) {
                        item = markerGroup.getAt(count++);
                        if (item) {
                            rendererAttributes = me.getRenderer()(item, store.getAt(i), item._to, i, store);
                            item.setAttributes(Ext.apply(rendererAttributes, endMarkerStyle || {}), true);
                            if (!item.attr.hidden) {
                                item.show(true);
                            }
                        }
                    }
                }
                for(; count < markerCount; count++) {
                    item = markerGroup.getAt(count);
                    item.hide(true);
                }
            }
        }

        if (chart.markerIndex) {
            path.splice(1, 0, path[1], path[2]);
            me.previousPath = path;
        }
        me.renderLabels();
        me.renderCallouts();

        me.fireEvent('draw', me);
    },

    // @private called when a label is to be created.
    onCreateLabel: function(storeItem, item, i, display) {
        var me = this,
            group = me.labelsGroup,
            config = me.label,
            bbox = me.bbox,
            endLabelStyle = Ext.apply(config, me.labelStyle.style);

        return me.getSurface().add(Ext.apply({
            'type': 'text',
            'text-anchor': 'middle',
            'group': group,
            'x': item.point[0],
            'y': bbox.y + bbox.height / 2,
            zIndex: 40
        }, endLabelStyle || {}));
    },

    // @private called when a label is to be created.
    onPlaceLabel: function(label, storeItem, item, i, display, animate) {
        var me = this,
            chart = me.getChart(),
            resizing = chart.resizing,
            config = me.label,
            format = config.renderer,
            field = config.field,
            bbox = me.bbox,
            x = +item.point[0],
            y = +item.point[1],
            radius = item.sprite.attr.radius,
            bb, width, height;

        label.setAttributes({
            text: format(storeItem.get(field)),
            hidden: true
        }, true);

        if (display == 'rotate') {
            label.setAttributes({
                'text-anchor': 'start',
                'rotation': {
                    x: x,
                    y: y,
                    degrees: -45
                }
            }, true);
            //correct label position to fit into the box
            bb = label.getBBox();
            width = bb.width;
            height = bb.height;
            x = x < bbox.x? bbox.x : x;
            x = (x + width > bbox.x + bbox.width)? (x - (x + width - bbox.x - bbox.width)) : x;
            y = (y - height < bbox.y)? bbox.y + height : y;

        } else if (display == 'under' || display == 'over') {
            //TODO(nicolas): find out why width/height values in circle bounding boxes are undefined.
            bb = item.sprite.getBBox();
            bb.width = bb.width || (radius * 2);
            bb.height = bb.height || (radius * 2);
            y = y + (display == 'over'? -bb.height : bb.height);
            //correct label position to fit into the box
            bb = label.getBBox();
            width = bb.width/2;
            height = bb.height/2;
            x = x - width < bbox.x? bbox.x + width : x;
            x = (x + width > bbox.x + bbox.width) ? (x - (x + width - bbox.x - bbox.width)) : x;
            y = y - height < bbox.y? bbox.y + height : y;
            y = (y + height > bbox.y + bbox.height) ? (y - (y + height - bbox.y - bbox.height)) : y;
        }

        if (me.getChart().getAnimate()) {
            label.show(true);
            me.onAnimate(label, {
                to: {
                    x: x,
                    y: y
                }
            });
        } else {
            label.setAttributes({
                x: x,
                y: y
            }, true);
            label.show(true);
        }
    },

    //@private Overriding highlights.js highlightItem method.
    highlightItem: function(item) {
        var me = this,
            line = me.line,
            marker, markerStyle, markerType;

        Ext.chart.series.Line.superclass.highlightItem.call(me, item);

        if (line && !me.highlighted) {
            if (!('__strokeWidth' in line)) {
                line.__strokeWidth = line.attr['stroke-width'] || 0;
            }
            if (line.__anim) {
                line.__anim.paused = true;
            }
            if (line.__anim) {
                line.__anim.stop();
            } else {
                line.__anim = new Ext.fx.Sprite({
                    sprite: line
                });
            }
            line.__anim.start({
                'stroke-width': parseFloat(line.__strokeWidth) * 2
            });
            me.highlighted = true;
        }

        // If no markers are configured, we still want to display one at the highlighted point
        // so the user can see what was highlighted.
        if (!me.getShowMarkers()) {
            marker = me.highlightMarker;
            if (!marker) {
                markerStyle = Ext.apply({}, me.markerStyle.style, me.getMarkerConfig());
                markerType = markerStyle.type;
                delete markerStyle.type;
                marker = me.highlightMarker = Ext.chart.Shape[markerType](me.getSurface(), Ext.apply({x: 0, y: 0}, markerStyle));
            }

            marker.setAttributes({
                translate: {
                    x: item.point[0],
                    y: item.point[1]
                },
                hidden: false
            }, true);
        }
    },

    //@private Overriding highlights.js unHighlightItem method.
    unHighlightItem: function(item) {
        var me = this,
            line = me.line,
            marker = me.highlightMarker;

        Ext.chart.series.Line.superclass.unHighlightItem.call(me, item);

        if (line && me.highlighted) {
            if (line.__anim) {
                line.__anim.stop();
            } else {
                line.__anim = new Ext.fx.Sprite({
                    sprite: line
                });
            }
            line.__anim.start({
                'stroke-width': line.__strokeWidth
            });
            me.highlighted = false;
        }

        if (marker) {
            marker.hide(true);
        }
    },

    //@private called when a callout needs to be placed.
    onPlaceCallout : function(callout, storeItem, item, i, display, animate, index) {
        if (!display) {
            return;
        }

        var me = this,
            chart = me.getChart(),
            config = me.callouts,
            items = me.items,
            prev = i === 0 ? false : items[i -1].point,
            next = (i == items.length -1)? false : items[i +1].point,
            cur = [+item.point[0], +item.point[1]],
            dir, norm, normal, a, aprev, anext,
            offsetFromViz = config.offsetFromViz || 30,
            offsetBox = config.offsetBox || 3,
            boxx, boxy, boxw, boxh,
            p, clipRect = me.clipRect,
            bbox = {
                width: config.styles.width || 10,
                height: config.styles.height || 10
            },
            x, y;

        //get the right two points
        if (!prev) {
            prev = cur;
        }
        if (!next) {
            next = cur;
        }
        a = (next[1] - prev[1]) / (next[0] - prev[0]);
        aprev = (cur[1] - prev[1]) / (cur[0] - prev[0]);
        anext = (next[1] - cur[1]) / (next[0] - cur[0]);

        norm = Math.sqrt(1 + a * a);
        dir = [1 / norm, a / norm];
        normal = [-dir[1], dir[0]];

        //keep the label always on the outer part of the "elbow"
        if (aprev > 0 && anext < 0 && normal[1] < 0
            || aprev < 0 && anext > 0 && normal[1] > 0) {
            normal[0] *= -1;
            normal[1] *= -1;
        } else if (Math.abs(aprev) < Math.abs(anext) && normal[0] < 0
                   || Math.abs(aprev) > Math.abs(anext) && normal[0] > 0) {
            normal[0] *= -1;
            normal[1] *= -1;
        }
        //position
        x = cur[0] + normal[0] * offsetFromViz;
        y = cur[1] + normal[1] * offsetFromViz;

        //box position and dimensions
        boxx = x + (normal[0] > 0? 0 : -(bbox.width + 2 * offsetBox));
        boxy = y - bbox.height /2 - offsetBox;
        boxw = bbox.width + 2 * offsetBox;
        boxh = bbox.height + 2 * offsetBox;

        //now check if we're out of bounds and invert the normal vector correspondingly
        //this may add new overlaps between labels (but labels won't be out of bounds).
        if (boxx < clipRect[0] || (boxx + boxw) > (clipRect[0] + clipRect[2])) {
            normal[0] *= -1;
        }
        if (boxy < clipRect[1] || (boxy + boxh) > (clipRect[1] + clipRect[3])) {
            normal[1] *= -1;
        }

        //update positions
        x = cur[0] + normal[0] * offsetFromViz;
        y = cur[1] + normal[1] * offsetFromViz;

        //update box position and dimensions
        boxx = x + (normal[0] > 0? 0 : -(bbox.width + 2 * offsetBox));
        boxy = y - bbox.height /2 - offsetBox;
        boxw = bbox.width + 2 * offsetBox;
        boxh = bbox.height + 2 * offsetBox;

        if (chart.getAnimate()) {
            //set the line from the middle of the pie to the box.
            me.onAnimate(callout.lines, {
                to: {
                    path: ["M", cur[0], cur[1], "L", x, y, "Z"]
                }
            });
            //set component position
            if (callout.panel) {
                callout.panel.setPosition(boxx, boxy, true);
            }
        }
        else {
            //set the line from the middle of the pie to the box.
            callout.lines.setAttributes({
                path: ["M", cur[0], cur[1], "L", x, y, "Z"]
            }, true);
            //set component position
            if (callout.panel) {
                callout.panel.setPosition(boxx, boxy);
            }
        }
        for (p in callout) {
            callout[p].show(true);
        }
    },

    isItemInPoint: function(x, y, item, i) {
        var me = this,
            items = me.items,
            tolerance = me.getSelectionTolerance(),
            point, diffX, diffY, dist,
            sqrt = Math.sqrt;

        // See if the target item is within the selectionTolerance distance from the x/y point
        point = item.point;
        diffX = x - point[0];
        diffY = y - point[1];
        dist = sqrt(diffX * diffX + diffY * diffY);

        if (dist <= tolerance) {
            // We have a match, but it's possible the previous or next item are even closer, so check them
            if (i > 0 && items[i - 1]) {
                point = items[i - 1].point;
                diffX = x - point[0];
                diffY = y - point[1];
                if (sqrt(diffX * diffX + diffY * diffY) < dist) {
                    return false;
                }
            }
            if (items[i + 1]) {
                point = items[i + 1].point;
                diffX = x - point[0];
                diffY = y - point[1];
                if (sqrt(diffX * diffX + diffY * diffY) < dist) {
                    return false;
                }
            }

            return true;
        }
        return false;
    },

    // @private toggle visibility of all series elements (markers, sprites).
    toggleAll: function(show) {
        var me = this,
            i, ln, shadow, shadows;
        if (!show) {
            Ext.chart.series.Line.superclass.hideAll.call(me);
        }
        else {
            Ext.chart.series.Line.superclass.showAll.call(me);
        }
        if (me.line) {
            me.line.setAttributes({
                hidden: !show
            }, true);
            //hide shadows too
            if (me.line.shadows) {
                for (i = 0, shadows = me.line.shadows, ln = shadows.length; i < ln; i++) {
                    shadow = shadows[i];
                    shadow.setAttributes({
                        hidden: !show
                    }, true);
                }
            }
        }
        if (me.fillPath) {
            me.fillPath.setAttributes({
                hidden: !show
            }, true);
        }
    },

    // @private hide all series elements (markers, sprites).
    hideAll: function() {
        this.toggleAll(false);
    },

    // @private hide all series elements (markers, sprites).
    showAll: function() {
        this.toggleAll(true);
    },

    /**
     * Returns a string with the color to be used for the series legend item.
     */
    getLegendColor: function(index) {
        var me = this, fill, stroke;

        if (me.style) {
            fill = me.style.fill;
            stroke = me.style.stroke;
            if (me.getFill() && fill && fill != 'none') {
                return me.getColorFromStyle(fill);
            }
            return me.getColorFromStyle(stroke || fill);
        }

        return '#000';
    }     ,
    getId: function() {
        var id = this.id;

        if (!id) {
            id = this.getUniqueId();
        }

        this.getId = this.getOptimizedId;

        return id;
    }

});
