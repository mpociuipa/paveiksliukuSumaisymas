//pirmas Sukurti masyva, kuri sudarytu 10 atsitiktiniu studentu vardu
//Galimi letdai
// let vardai = ["Jonas", "Petras", "Ona", "Marija", "Antanas", "Rasa", "Darius", "Greta", "Lukas", "Eglė"];

// // Sukuriame tuščią masyvą
// let studentai = [];

// // Generuojame atsitiktinius studentų letdus ir pridedame į masyvą
// for (let i = 0; i < 10; i++) {
//     let randomVardasIndex = Math.floor(Math.random() * vardai.length);
//     let randomVardas = vardai[randomVardasIndex];
//     studentai.push(randomVardas);
// }

// // Spausdiname rezultatą
// console.log(studentai);

//antras Isvesti vardus i console. Butu gerai, kad vardai butu sunumeruoti
// let vardai = ["Jonas", "Petras", "Ona", "Marija", "Antanas", "Rasa", "Darius", "Greta", "Lukas", "Eglė"];
// vardai.forEach(function(vardas, indeks) {
//     console.log((indeks + 1) + ". " + vardas);
// });


//trecias Isvesti vardus html liste (ul)
// let vardai = ["Jonas", "Petras", "Ona", "Marija", "Antanas", "Rasa", "Darius", "Greta", "Lukas", "Eglė"];
// let vardaiList = document.querySelector("ul");

// vardai.forEach(function(vardas, indeks) {
//     let listItem = document.createElement("li");
//     listItem.textContent = (indeks + 1) + ". " + vardas;
//     vardaiList.appendChild(listItem);
// });

//ketvirtas Jeigu vardas  yra ilgesnis uz 6 simbolius  uzdekit raudona teksto spalva. Jeigu ne - taksto splava yra melyna.
// let vardai = ["Jonas", "Petras", "Ona", "Marija", "Antanas", "Rasa", "Darius", "Greta", "Lukas", "Eglė"];
// let vardaiList = document.querySelector("ul");

// vardai.forEach(function(vardas, indeks) {
//     let listItem = document.createElement("li");
//     listItem.textContent = (indeks + 1) + ". " + vardas;
//     if (vardas.length > 6) {
//         listItem.classList.add("red");
//     } else {
//         listItem.classList.add("blue");
//     }
//     vardaiList.appendChild(listItem);
// });


//penkta Pagal jau sukurta vardu masyva, reikia cikle sukurti nauja masyva, kurio kiekvienas elementas sudarytas is studento vardo pirmos ir paskutines raides. pvz. Jeigu vardas Jusu sukurtame masyve buvo Jonas. Naujame masyve elemento reiksme: Js.Kai cikle masyvas bus sukurtas, konvertuokite ji i eilute (string) bet tarpu ir isveskite dom'e naudodami h1 elementa.

// let vardai = ["Jonas", "Petras", "Ona", "Marija", "Antanas", "Rasa", "Darius", "Greta", "Lukas", "Eglė"];
// let naujasMasyvas = [];

// vardai.forEach(function(vardas) {
//     let naujaReiksme = vardas.charAt(0) + vardas.charAt(vardas.length - 1);
//     naujasMasyvas.push(naujaReiksme);
// });

// let eilute = naujasMasyvas.join(" ");

// let h1 = document.createElement("h1");
// h1.textContent = eilute;
// document.body.appendChild(h1);


//penkta antras variantas
// const students  = ['Ieva', 'Toma', 'Kristina', 'Milvyde'];


// // Naujas masyvas su naujais studentu vardais
// let magicStudents = [];

// // Naujo masyvo kurimas, seno masyvo pagrindu
// for (let i = 0; i < students.length; i++) {
//     let studentName = students[i];
//     let newStudentName = studentName[0] + studentName[studentName.length - 1];
//     magicStudents.push(newStudentName);
// }

// // Konvertuoti naują masyvą į eilutę su tarpais
// let magicString = magicStudents.join('');

// // Sukurti h1 elementą
// let h1 = document.createElement('h1');

// // Įdėti tekstą į h1 elementą
// h1.textContent = magicString;

// // Įdėti h1 elementą į DOM
// document.body.appendChild(h1);


//sesta Js pagalba sukurtkite 16 div ir isdestykite grid. (div dviem eilutemis po 8). Div plotis ir aukstis: 200px. Spalva raudona

// document.addEventListener("DOMContentLoaded", function() {
// let container = document.getElementById("container");

// for (let i = 0; i < 16; i++) {
//     let box = document.createElement("div");
//     box.classList.add("box");
//     container.appendChild(box);

// // Generuojame atsitiktinį spalvos kodą
//     let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
//     box.style.backgroundColor = randomColor;

// // Pridedame event listener'į pasikeisti spalvą paspaudus
//     box.addEventListener("click", function() {
//        let newColor = '#' + Math.floor(Math.random()*16777215).toString(16); // Generuojame naują atsitiktinį spalvos kodą
//        this.style.backgroundColor = newColor; // Keičiame spalvą į naują atsitiktinį
//     });
// }
// });

//septinta du myktukai viduri ekrano: rodyti ir maisyti kai paspaudi rodyti, tada atsiranda 10 paveiksleliu ir isspaudina consoleje,kai paspaudi ant nuotraukos ansiranda defaultinis paveiksliukas,kai paspaudi maisyti atsiranda desimt paveiksliuku ir ismaiso juos ir kai paspaudi ant nuotraukos du kartus atsiranda defaultinis paveiksliukas

document.getElementById('rodyti').addEventListener('click', rodytiPaveiksliukus);
document.getElementById('maisyti').addEventListener('click', maisytiPaveiksliukus);

let defaultPaveiksliukas = 'images/default.jpg'; // Nurodome numatytąjį paveikslėlį
let paveiksliukuFolderis = 'images/'; // Nurodome kelią į paveikslėlių aplanką

function rodytiPaveiksliukus() {
    let paveiksliukai = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg'];

    console.log("Rodyti nuotraukas:");
    paveiksliukai.forEach(function(paveiksliukas) {
        console.log(paveiksliukuFolderis + paveiksliukas);
    });

    let paveiksliukuHtml = '';
    paveiksliukai.forEach(function(paveiksliukas) {
        paveiksliukuHtml += '<img src="' + paveiksliukuFolderis + paveiksliukas + '" onclick="rodytiDefaultiniPaveiksliuka(this)" />';
    });

    document.getElementById('paveiksliukai').innerHTML = paveiksliukuHtml;
}

function maisytiPaveiksliukus() {
    let paveiksliukai = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg'];
    paveiksliukai.sort(function() { return 0.5 - Math.random() });

    let paveiksliukuHtml = '';
    paveiksliukai.forEach(function(paveiksliukas) {
        paveiksliukuHtml += '<img src="' + paveiksliukuFolderis + paveiksliukas + '" onclick="rodytiDefaultiniPaveiksliuka(this)" />';
    });

    document.getElementById('paveiksliukai').innerHTML = paveiksliukuHtml;
}

function rodytiDefaultiniPaveiksliuka(img) {
    img.src = defaultPaveiksliukas;
    img.onclick = function() { rodytiDefaultiniPaveiksliuka(this); }; // Sugrąžiname funkcionalumą
}