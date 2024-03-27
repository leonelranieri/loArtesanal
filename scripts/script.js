const imagenes = [
    "Benito.jpg",
    "Fader.jpg",
    "Hongo.jpg",
    "LaPlata.jpg",
    "Lucila.jpg",
    "Mariposita.jpg",
    "MartaMinujin.jpg",
    "MonicaGiron.jpg",
    "XulSolar.jpg",
];

const imageDescriptions = [
    "Descripción de Benito.jpg",
    "Descripción de Fader.jpg",
    "Descripción de Hongo.jpg",
    "Descripción de LaPlata.jpg",
    "Descripción de Lucila.jpg",
    "Descripción de Mariposita.jpg",
    "Descripción de MartaMinujin.jpg",
    "Descripción de MonicaGiron.jpg",
    "Descripción de XulSolar.jpg" 
]

const imageSizes = [
    "Tamaño de Benito.jpg",
    "Tamaño de Fader.jpg",
    "Tamaño de Hongo.jpg",
    "Tamaño de LaPlata.jpg",
    "Tamaño de Lucila.jpg",
    "Tamaño de Mariposita.jpg",
    "Tamaño de MartaMinujin.jpg",
    "Tamaño de MonicaGiron.jpg",
    "Tamaño de XulSolar.jpg" 
]

//////////////////////////////////////////////////////////////////

const cargarImagen = (imgName) => {
    return `assets/images/${imgName}`;
};

////////////////////////////////////////////////////////////////////

const verificarCaracteristicas = () => {
    const main = document.getElementsByTagName("main")[0];
    const existingCharacteristicsDiv = document.getElementById("characteristicsDiv");
    if (existingCharacteristicsDiv) {
        main.removeChild(existingCharacteristicsDiv);
    }
}

/////////////////////////////////////////////////////////////////7
let index = 0;

const renderizarImagen = () => {
    const titleImg = document.getElementById("titleImg");
    const image = document.getElementById("img");

    verificarCaracteristicas();
    if(index <= imagenes.length-1){
        titleImg.innerText = imagenes[index].replace(".jpg", "");
        image.src = cargarImagen(imagenes[index]);
        image.alt = imagenes[index].replace(".jpg", "").toLowerCase(); 
    }

    const characteristics = document.getElementById("characteristics");
    characteristics.style.display = "inline";

    if(index == imagenes.length-1) {
        index = 0;
    }else {
        index++;
    }
};

const siguiente = document.getElementById("buttonFollowing");

siguiente.addEventListener("click", renderizarImagen);


const body = document.getElementsByTagName("body")[0];

console.log(body);

//////////////////////////////////////////////////////////////////

const mostrarCaracteristicas = (index) => {
    const main = document.getElementsByTagName("main")[0];

    verificarCaracteristicas();

    const divCharacteristics = document.createElement("div");
    divCharacteristics.id = "characteristicsDiv";

    const imgDescription = document.createElement("p");
    const imgSize = document.createElement("p");

    imgDescription.innerText = imageDescriptions[index];
    imgSize.innerText = imageSizes[index];

    divCharacteristics.appendChild(imgDescription);
    divCharacteristics.appendChild(imgSize);

    main.appendChild(divCharacteristics);
}

// const charactButton =  document.getElementById("characteristics");

// characteristics.addEventListener("click", mostrarCaracteristicas);
const characteristicsButton = document.getElementById("characteristics");

characteristicsButton.addEventListener("click", function() {
    const index = parseInt(this.dataset.index);
    mostrarCaracteristicas(index);
});

