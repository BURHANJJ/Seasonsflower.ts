const images = [
    'https://i.postimg.cc/G2fP2Gcp/Small-White-Flower.gif',
    'https://i.postimg.cc/T2ZSNWrG/white-flower.png',
    'https://i.postimg.cc/Y24ZxxLb/blue-heart.png',
    'https://i.postimg.cc/ThMrjx5M/love.gif',
];

const container = document.body;

function createFallingElement() {
    const element = document.createElement('img');
    element.classList.add('falling-element');

    const randomImage = images[Math.floor(Math.random() * images.length)];
    element.src = randomImage;

    const size = Math.floor(Math.random() * 50) + 30;
    element.style.width = `${size}px`;
    element.style.height = 'auto';

    const startPosition = Math.random() * window.innerWidth;
    element.style.left = `${startPosition}px`;

    const duration = Math.random() * 5 + 3;
    element.style.animationDuration = `${duration}s`;

    const rotation = Math.random() * 360;
    element.style.transform = `rotate(${rotation}deg)`;

    container.appendChild(element);

    setTimeout(() => {
        element.remove();
    }, duration * 1000);
}

setInterval(createFallingElement, 300);
