(function() {
                function r() {
                    t.show(), e.play(), t.removeClass("music-open").addClass("music-close")
                }

                function i() {
                    e.pause(), t.removeClass("music-close").addClass("music-open")
                }
                var e = $("#audio")[0],
                    t = $(".music"),
                    n = this;
                t.on("click", function(e) {
                    var t = $(this);
                    t.is(".music-open") ? r() : i(), e.preventDefault()
                }), window.onblur = function() {
                    i()
                }, this.play = r, this.stop = i
})()