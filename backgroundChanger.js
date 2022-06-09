bgChange = () => {

    const images = [
        "url(/backgrounds/1.png)",
        "url(/backgrounds/2.png)",
        "url(/backgrounds/3.png)",
        "url(/backgrounds/4.png)",
        "url(/backgrounds/5.png)",
        "url(/backgrounds/6.png)",
        "url(/backgrounds/7.png)",
        "url(/backgrounds/8.png)",
        "url(/backgrounds/9.png)",
    ]

    body = document.querySelector('body');
    bg = images[Math.floor(Math.random() * images.length)];

    body.style.backgroundImage = bg;
};

setInterval(bgChange, 5000);
