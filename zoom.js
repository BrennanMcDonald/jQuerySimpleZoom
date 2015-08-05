// jQuery Zoom
// Ultra lightweight zoom plugin for javascript
// version 1.1, August 5th, 2015
// by Brennan McDonald

;(function($) {

    var KEYS = {
        0 : 48,
        1 : 49,
        2 : 50,
        3 : 51,
        4 : 52,
        5 : 53,
        6 : 54,
        7 : 55,
        8 : 56,
        9 : 57,
        A : 65,
        B : 66,
        C : 67,
        D : 68,
        E : 69,
        F : 70,
        G : 71,
        H : 72,
        I : 73,
        J : 74,
        K : 75,
        L : 76,
        M : 77,
        N : 78,
        O : 79,
        P : 80,
        Q : 81,
        R : 82,
        S : 83,
        T : 84,
        U : 85,
        V : 86,
        W : 87,
        X : 88,
        Y : 89,
        Z : 90,
        UP : 38,
        DOWN: 40,
        LEFT : 37,
        RIGHT : 39

    }

    $.Zoom = function(element, options) {

        var defaults = {
            in : 38,
            out : 40
        }

        var plugin = this;

        var scale = 1;

        var $element = $(element),
             element = element;

        plugin.init = function() {
            console.log(options);
            if (options.in !== null){
                if (typeof(options.in) === "number"){
                    options.in = options.in;
                } else if (typeof(options.in) === "string"){
                    options.in = KEYS[options.in.toUpperCase()];
                }

            }
            if (options.out !== null){
                if (typeof(options.out) === "number"){
                    options.out = options.out;
                } else if (typeof(options.out) === "string"){
                    options.out = KEYS[options.out.toUpperCase()];
                }

            }
        }

        $(window).on("keydown", function (e) {

            if (e.keyCode == options.out && scale > 0) {
                scale -= 0.1;
            } else if (e.keyCode == options.in) {
                scale += 0.1;
            }
            $element.css("transform", "scale(" + scale + ")")

        });
        plugin.init();

    }

    $.fn.Zoom = function(options) {

        return this.each(function() {
            if (undefined == $(this).data('Zoom')) {
                var plugin = new $.Zoom(this, options);
                $(this).data('Zoom', plugin);
            }
        });

    }

})(jQuery);