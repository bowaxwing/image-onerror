(function(skp11) {
    'use strict';

    skp11.common = {
        blankImage: function(imageObj, rect) {
            var imagePath;

            switch(rect) {
                case '50x50':
                    imagePath = 'no_image_50x50.gif';
                    break;
                case '160x160':
                    imagePath = 'no_image_160x160.gif';
                    break;
                case '205x205':
                    imagePath = 'no_image_205x205.gif';
                    break;
                default:
                    imagePath = 'no_image.gif';
                    break;
            }

            imageObj.onerror = null; // To avoid endless loop.
            imageObj.src = imagePath;
        }
    };

})(window.skp11 = window.skp11 || {});