bgChange = () => {

    const images = [
        "url(https://forums.terraria.org/index.php?attachments/n-1-png.31583/)",
        "url(https://forums.terraria.org/index.php?attachments/n-2-png.31584/)",
        "url(https://forums.terraria.org/index.php?attachments/n-3-png.31585/)",
        "url(https://forums.terraria.org/index.php?attachments/n-4-png.31586/)",
        "url(https://forums.terraria.org/index.php?attachments/n-5-png.31587/)",
        "url(https://forums.terraria.org/index.php?attachments/n-6-png.31600/)",
        "url(https://forums.terraria.org/index.php?attachments/n-7-png.32392/)",
        "url(https://forums.terraria.org/index.php?attachments/n-8-png.69704/)",
        "url(https://forums.terraria.org/index.php?attachments/n-9-png.37956/)",
    ]

    body = document.querySelector('body');
    bg = images[Math.floor(Math.random() * images.length)];

    body.style.backgroundImage = bg;
};

setInterval(bgChange, 3000);
