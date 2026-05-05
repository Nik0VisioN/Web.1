const canvas = document.getElementById('bg-canvas');
const lighter = canvas.getContext('2d');

const step = 30;

let mouseX = -1;
let mouseY = -1;
let discharge = [];
let lastTime = 0;

function resizeCanvas() 
{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function isDarkMode()
{
    return document.documentElement.classList.contains('dark');
}

function createDischarge()
{
    const x = Math.round(x / step) * step;
    const y = Math.round(y / step) * step;

}

function drawPoint()
{
    ctx.fillStyle = isDarkMode()
        ? 'rgba(255, 255, 255, 0.8)'
        : 'rgba(0, 0, 0, 0.8)';

        const cols = Math.ceil(canvas.width / step);
        const rows = Math.ceil(canvas.height / step);

        for (let i = 0; i < cols; i++)
        {
            for (let j = 0; j < rows; j++)
            {
                lighter.beginPath();
                lighter.arc(i * step, j * step, 2, 0, Math.PI * 2);
                lighter.fill();
            }
        }

}

function animate(time)
{    const deltaTime = time - lastTime;
    lastTime = time;
    lighter.clearRect(0, 0, canvas.width, canvas.height);

    drawPoint();
    requestAnimationFrame(animate); 
}

canvas.addEventListener('mousemove', (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    createDischarge();
});

drawPoint();
requestAnimationFrame(animate);