function createBall() {
    const ball = document.createElement('div');
    ball.className = 'ball';

    const randomX = Math.random() * 95;

    ball.style.left = `${randomX}%`;
    ball.style.top = '0';

    const randomSpeed = Math.random() * 20 + 10;
    ball.style.animation = `ballAnimation ${randomSpeed}s ease-in-out infinite`;

    let randomZ = (Math.random());

    ball.style.zIndex = (randomZ < 0.3) ? -1 : (randomZ < 0.8) ? 1 : 3;

    document.body.appendChild(ball);
}

function createBalls(nbBalls) {
    if (nbBalls == 0)
        return;

    setTimeout(() => {
        createBall();
        createBalls(nbBalls - 1);
    }, 1000);
}

createBalls(15);