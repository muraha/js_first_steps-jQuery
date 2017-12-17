/*position*/
let posX = $('#positionX');
let posY = $('#positionY');

let size = $('#size');
let opacity = $('#opacity');
let drop = $('#dropdown');
let btn = $('.btn');

/*color*/
let hex = $('#hex');
let rRGBA = $('#r-rgba');
let gRGBA = $('#g-rgba');
let bRGBA = $('#b-rgba');
let aRGBA = $('#a-rgba');

/*figure*/
let fg = $('.square');


/*positioning*/
posX.change(function () {
    fg.css('left', posX.val() + 'px');
})
posY.change(function () {
    fg.css('top', posY.val() + 'px');
})
/*SIZE*/
size.change(function () {
    fg.css('height', 100 * size.val() + 'px');
    fg.css('width', 100 * size.val() + 'px');
})
/*opacity*/
opacity.change(function () {
    fg.css('opacity', opacity.val());
})
/*dropdown*/
btn.on('click', function () {
    if (drop.val() === 'square') {
        fg.css('border-radius', 0);
        fg.css('transform', 'rotate(0) translate(0, 0) scale(1)');
    } else if (drop.val() === 'round') {
        fg.css('border-radius', '50%');
        fg.css('transform', 'rotate(0) translate(0, 0) scale(1)');
    } else {
        fg.css('border-radius', 0);
        fg.css('transform', 'rotate(45deg) translate(0, 0) scale(0.7)');
    }
})

hex.on('keydown', function (e) {
    if (e.which === 13) {
        fg.css('background-color', '#' + hex.val());
    }
});

rRGBA.change(function () {
    fg.css('background-color', 'rgba(' + rRGBA.val() + ',' + gRGBA.val() + ',' + bRGBA.val() + ',' + aRGBA.val() + ')');
})
gRGBA.change(function () {
    fg.css('background-color', 'rgba(' + rRGBA.val() + ',' + gRGBA.val() + ',' + bRGBA.val() + ',' + aRGBA.val() + ')');
})
bRGBA.change(function () {
    fg.css('background-color', 'rgba(' + rRGBA.val() + ',' + gRGBA.val() + ',' + bRGBA.val() + ',' + aRGBA.val() + ')');
})
aRGBA.change(function () {
    fg.css('background-color', 'rgba(' + rRGBA.val() + ',' + gRGBA.val() + ',' + bRGBA.val() + ',' + aRGBA.val() + ')');
})
