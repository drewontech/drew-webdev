const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageArray = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
const altText = ['pic1', 'pic2', 'pic3', 'pic4', 'pic5'];

/* Looping through images */
for (let i = 0; i < imageArray.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/' + imageArray[i]);
    newImage.setAttribute('alt', altText[i]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', (e) => {
        displayedImage.src = e.target.src;
    });
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    const btnText = btn.textContent.trim();
    if (btnText === 'Darken') {
        btn.textContent = 'Lighten';
        btn.setAttribute('class', 'light');
        lighten();
    } else {
        btn.textContent = 'Darken';
        btn.setAttribute('class', 'dark');
        darken();
    }
});

/*Functions to lighten/darken the overlay*/
function lighten(){
    overlay.style.backgroundColor = 'rgb(0 0 0 /50%)';
    }

function darken(){
    overlay.style.backgroundColor = 'rgb(0 0 0 / 0%)';
    }
