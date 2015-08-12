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
<<<<<<< HEAD
                } else if (typeof(options.in) === "string"){
					if (options.in.toUpperCase().charCodeAt(0) >= 65 && options.in.toUpperCase().charCodeAt(0) <= 90){
						options.in = options.in.toUpperCase().charCodeAt(0);
					} else {
						options.in = KEYS[options.in.toUpperCase()];
					}
                }
=======
                } else if (typeof(options.in) === "string" && options.in.length < 2){
                    options.in = options.in.toUpperCase().charCodeAt(0);
                } else {
					options.in = KEYS[options.in.toUpperCase()];

				}
>>>>>>> origin/master

            }
            if (options.out !== null){
                if (typeof(options.out) === "number"){
                    options.out = options.out;
<<<<<<< HEAD
                } else if (typeof(options.out) === "string"){
					if (options.out.toUpperCase().charCodeAt(0) >= 65 && options.out.toUpperCase().charCodeAt(0) <= 90){
						options.out = options.out.toUpperCase().charCodeAt(0);
					} else {
						options.out = KEYS[options.out.toUpperCase()];
					}
                }
=======
                } else if (typeof(options.out) === "string" && options.in.length < 2){
                    options.out = options.out.toUpperCase().charCodeAt(0);
                } else {
					options.out = KEYS[options.out.toUpperCase()];
				}
>>>>>>> origin/master

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