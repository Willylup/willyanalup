document.addEventListener('DOMContentLoaded', function() {
    const magicButton = document.getElementById('magicButton');
    const heartButton = document.getElementById('heartButton');
    const changeFontButton = document.getElementById('changeFontButton');
    const heartsDiv = document.getElementById('hearts');
    const listSection = document.querySelector('.list');

    const fonts = ['Arial, sans-serif', 'Courier New, monospace', 'Georgia, serif', 'Times New Roman, serif', 'Verdana, sans-serif'];
    let currentFontIndex = 0;

    magicButton.addEventListener('click', function() {
        const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
        document.body.style.backgroundColor = randomColor;
    });
    
    heartButton.addEventListener('click', function() {
        for (let i = 0; i < 10; i++) {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.textContent = '❤️';
            heart.style.left = `${Math.random() * 100}vw`;
            heart.style.fontSize = `${Math.random() * 2 + 1}em`;
            heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
            heartsDiv.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 5000); // Remove the heart after 5 seconds
        }
    });

    changeFontButton.addEventListener('click', function() {
        currentFontIndex = (currentFontIndex + 1) % fonts.length;
        listSection.style.fontFamily = fonts[currentFontIndex];
    });
});