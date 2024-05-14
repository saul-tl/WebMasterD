const images = [
    {
        src: 'images/image1.png',
        main: 'MasterD',
        sub: '@Saul-Tenesaca'
    },
    {
        src: 'images/image2.png',
        main: '@Saul-Tenesaca',
        sub: 'MasterD'
    },
    {
        src: 'images/image3.jpg',
        main: '@MasterD',
        sub: 'Saul Tenesaca Lirio'
    },
    
];

const galleryContainer = document.querySelector('.gallery');

images.forEach((imageData) => {
    const imageWrapper = document.createElement('div');
    imageWrapper.classList.add('image');

    const image = document.createElement('img');
    image.src = imageData.src;

    const label = document.createElement('div');
    label.classList.add('label');

    const mainText = document.createElement('p');
    mainText.classList.add('main');
    mainText.textContent = imageData.main;

    const subText = document.createElement('p');
    subText.classList.add('sub');
    subText.textContent = imageData.sub;

    label.appendChild(mainText);
    label.appendChild(subText);

    imageWrapper.appendChild(image);
    imageWrapper.appendChild(label);

    galleryContainer.appendChild(imageWrapper);
});
