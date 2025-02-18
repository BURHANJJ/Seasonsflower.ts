const images = [
    'https://media.discordapp.net/attachments/1341116521581379666/1341116558654832733/SmallWhiteFlower.gif?ex=67b4d3a0&is=67b38220&hm=69c01739b67baee28b09c3edba05663706a967e3692b98423b30918d91b146d5&=&width=160&height=160',
    'https://media.discordapp.net/attachments/1341116521581379666/1341116559304953896/white_flower.png?ex=67b4d3a0&is=67b38220&hm=93a01907875691edee4524714f9a837dff9abfe75996551e19c0fe53977ff39b&=&format=webp&quality=lossless&width=547&height=547',
    'https://media.discordapp.net/attachments/1341116521581379666/1341117194888679434/blue_heart.png?ex=67b4d438&is=67b382b8&hm=0e4618b0daf29b1970907aaa328f06b97b33b95a2186863d7ec40defb090d96e&=&format=webp&quality=lossless&width=547&height=547',
    'https://media.discordapp.net/attachments/1341116521581379666/1341117195178213422/love.gif?ex=67b4d438&is=67b382b8&hm=adbf6cbabeaf3f960d1c8dcca7abb39f209d0e7289e73f29abf630da15d440d6&=&width=120&height=120',
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
