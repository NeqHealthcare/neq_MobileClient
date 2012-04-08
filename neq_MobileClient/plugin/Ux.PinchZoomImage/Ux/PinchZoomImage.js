Ext.define('Ux.PinchZoomImage', {
    extend:'Ext.Container',
    xtype:'pinchzoomimage',

    alias:'widget.pinchzoomimage',


    config:{
        /**
         * Image src url
         *
         * @type String
         */
        src:null,
        flex:1,
        //type: 'vbox',

        /* initComponent: function()
         {
         this.setTpl(new Ext.XTemplate(
         '<div style="padding:10px 5px 5px 5px;">',
         '<tpl for=".">',
         '<div class="node" style="">',
         '</div>',
         '</tpl>',
         '</div>'));
         },*/


        /**
         * height of the pinchzoom image
         *
         * @type int
         */
        //height:null,
        currentWidth:null,
        currentHeight:null,


        /**
         * width of the pinchzoom image
         *
         * @type int
         */
        //width:null,


        scrollable:true,
        listeners:{
            painted:'initImage'
        }
    },


    /**
     * init the image in the scrollable container
     *
     * @param {} newImageSrc
     */


    initImage:function (newImageSrc) {
        var height = this.getHeight() || this.element.getHeight(),
            width = this.getWidth() || this.element.getWidth(),
            src = this.getSrc() || newImageSrc,
            currentWidth = width,
            currentHeight = height,
            image = null;


        if (Ext.isString(src) && src !== '') {
            image = Ext.create('Ext.Img', {
                // set mode auf empty to create a real image tag
                //mode:'',
                height:height,
                width:width,
                flex:1,
                src:src,
                listeners:{
                    pinch:{
                        element:'element',
                        fn:this.onImagePinch


                    },
                    doubletap:{
                        element:'element',
                        fn:this.onImageDoubletap
                    }
                }

            });


            this.add(image);
            //image.opacity(0.3);
            //image.setFlex(1);
            image.setHeight(1000);
            image.setWidth(1000);
            image.setStyle('background-size: 100%');


        }
    },


    /**
     * reset the image to initial size
     *
     * @param {} e
     */
    onImageDoubletap:function (e) {
        var initialWidth = this.getInitialConfig('width'),
            initialHeight = this.getInitialConfig('height'),
            container = this,
            image = this.element;


        container.setWidth(initialWidth);
        container.setHeight(initialHeight);
        image.setWidth(initialWidth);
        image.setHeight(initialHeight);
    },


    /**
     * on image pinch scale the image size
     * and set the scroller to a new position
     *
     * @param {} e eventobject
     */
    onImagePinch:function (e) {
        var
            initialWidth = this.getInitialConfig('width'),
            initialHeight = this.getInitialConfig('height'),
            newWidth = this.element.getWidth() * e.scale,
            newHeight = this.element.getHeight() * e.scale,
            container = this,
            image = this.element,
            scroller = this.up('container').getScrollable().getScroller(),
            posX,
            posY;

        posX = e.pageX * (newWidth - initialWidth) / newWidth;    //might work in fullscreen mode
        posY = e.pageY * (newHeight - initialHeight) / newHeight;

        /*newWidth = function () {
         if (initialWidth != this.currentWidth)
         return this.currentWidth * e.sca;
         else
         return initialWidth * e.scale;
         }();
         newHeight = function () {
         if (initialHeight != this.currentHeight)
         return this.currentHeight * e.scale;
         else
         return initialHeight * e.scale;
         }();*/


        //this.currentWidth = newWidth * e.scaleOnExit;
        //this.currentHeight = newHeight * e.scaleOnExit;

        //image.webkitTransform = 'scale(' + e.scale  + ',' + e.scale + ')';
        //container.webkitTransform = 'scale(' + e.scale  + ',' + e.scale + ')';

        //container.setWidth(newWidth);
        //container.setHeight(newHeight);
        image.setWidth(newWidth);
        image.setHeight(newHeight);
        //scroller.scrollTo(posX, posY);

    },


    /**
     * if set Src is called and an
     * old image exist destroy the old
     * one and add the new one
     *
     * @param {} newImageSrc
     * @param {} oldImageSrc
     */
    applySrc:function (newImageSrc) {
        var oldImage = this.down('img');


        if (Ext.isObject(oldImage)) {
            oldImage.destroy();
        }


        this.initImage(newImageSrc);
    }



});