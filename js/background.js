const Images = ["altai-g80b97c15e_1920.jpg",
"beach-g2ee2f34ee_1920.jpg", "beach-g3f47fb25c_1920.jpg",
"chicago-g29105485c_1920.jpg", "drink-gc3d1d01dc_1920.jpg",
"sea-g51f9e2c3c_1920.jpg", "seashells-g3ad54f9fa_1920.jpg"
];

const chosenImg=Images[Math.floor(Math.random() * Images.length)];

const bgImage = document.createElement("img");
bgImage.src=`img/${chosenImg}`;
document.body.appendChild(bgImage);