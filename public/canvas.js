var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');

var mouse = {
    x: undefined,
    y: undefined
}

var colorarr = [
    '#056E89',
    ' #469C94',
    '#5FB780',
    '#B5F685',
    '#ffffc5',
    '#e85f5c',
    '#773344'
];

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
})
window.addEventListener('touchmove', (event) => {
    mouse.x = event.touches[0].clientX;
    mouse.y = event.touches[0].clientY;
})

window.addEventListener('mousemove', (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
})

function circle(x, y, radius, dx, dy, rgb) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;
    this.rgb = rgb;
    this.minradius = radius;
    this.co = colorarr[Math.floor(Math.random() * colorarr.length)];
    this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.co;
        c.fill();
    }

    this.update = function () {
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        //interectivity
        if (mouse.x - this.x < 50 && mouse.x - this.x > -50
            && this.radius < 20
            && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
            this.radius += 1;
        }
        else if (this.radius > 2) {
            this.radius -= 1;
        }

        this.draw();
    }

}


var circleArray = [];

function init() {
    circleArray = [];
    for (var i = 0; i < 200; i++) {

        var radius = Math.random() * 20;
        var x = Math.random() * (canvas.width - (2 * radius)) + radius;
        var y = Math.random() * (canvas.height - (2 * radius)) + radius;
        var dx = (Math.random() - 0.5) * 2;
        var dy = (Math.random() - 0.5) * 2;
        var color = {
            r: Math.random() * 255,
            g: Math.random() * 255,
            b: Math.random() * 255
        }
        var rgb = `rgb(${color.r}, ${color.g}, ${color.b})`;

        circleArray.push(new circle(x, y, radius, dx, dy, rgb));
    }
}


function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < circleArray.length - 1; i++) {
        circleArray[i].update();
    }

}

init();
animate();