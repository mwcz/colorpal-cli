/*globals define*/

define( function () {
    return function( image_data ) {

        "use strict";

        // Translates an ImageData object's CanvasPixelArray into
        // an RGB array of the form:
        //
        //      [
        //          [ r1, g1, b1 ],
        //          [ r2, g2, b2 ],
        //          ...
        //          [ rN, gN, bN ]
        //      ]

        var rgb_array = [],
            rgb_color,
            i;

        for( i = image_data.length - 1; i > 1; i -= 4 ) {

            rgb_color = [
                image_data[ i - 3 ],
                image_data[ i - 2 ],
                image_data[ i - 1 ]
            ] ;

            rgb_array.push( rgb_color );

        }

        return rgb_array;

    };
});
