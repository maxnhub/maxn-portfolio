const svgScroll = (function() {
    const svg = document.getElementById('code')
    svgPath = document.querySelectorAll('#code .group'),
        windowMargin = window.innerHeight * 1,
        svgRect = svg.getBoundingClientRect(),
        svgPos = svgRect.top;

    return {
        grow: function(wScroll) {
            const startAnimate = wScroll - svgPos + windowMargin,
                pixelsElapsed = svgPos - wScroll,
                percentsElapsed = 100 - Math.ceil(pixelsElapsed / windowMargin * 100),
                percentsDraw = 1 / 100 * percentsElapsed;
            if (startAnimate >= 0) {
                const drawAmount = 1 - percentsDraw;

                if (drawAmount > 0) {
                    svgPath.forEach(function(item) {
                        item.style.strokeDashoffset = drawAmount;
                    });
                }
            };
        }
    }
}());

window.onscroll = function() {
    const wScroll = window.pageYOffset;
    svgScroll.grow(wScroll);
}