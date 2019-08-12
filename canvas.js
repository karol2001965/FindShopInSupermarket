// document.addEventListener("DOMContentLoaded", function(){
// })
//colors https://color.adobe.com/search?q=blue%20grey/* Color Theme Swatches in Hex */
// .Spiers-Grey-Blue---Mono-1-hex { color: #AABFF2; }
// .Spiers-Grey-Blue---Mono-2-hex { color: #4968B5; } hover
// .Spiers-Grey-Blue---Mono-3-hex { color: #7583A6; } podloga
// .Spiers-Grey-Blue---Mono-4-hex { color: #628CF2; } sklepy
// .Spiers-Grey-Blue---Mono-5-hex { color: #515B73; }
//
// /* Color Theme Swatches in RGBA */
// .Spiers-Grey-Blue---Mono-1-rgba { color: rgba(170, 191, 242, 1); }
// .Spiers-Grey-Blue---Mono-2-rgba { color: rgba(72, 104, 180, 1); }
// .Spiers-Grey-Blue---Mono-3-rgba { color: rgba(116, 131, 165, 1); }
// .Spiers-Grey-Blue---Mono-4-rgba { color: rgba(97, 140, 242, 1); }
// .Spiers-Grey-Blue---Mono-5-rgba { color: rgba(80, 91, 114, 1); }
//
// /* Color Theme Swatches in HSLA */
// .Spiers-Grey-Blue---Mono-1-hsla { color: hsla(222, 73, 80, 1); }
// .Spiers-Grey-Blue---Mono-2-hsla { color: hsla(222, 42, 49, 1); }
// .Spiers-Grey-Blue---Mono-3-hsla { color: hsla(222, 21, 55, 1); }
// .Spiers-Grey-Blue---Mono-4-hsla { color: hsla(222, 84, 66, 1); }
// .Spiers-Grey-Blue---Mono-5-hsla { color: hsla(222, 17, 38, 1); }




var select = document.querySelector(".select_options");
var canvas = document.querySelector("canvas");
var button = document.querySelector("button");
canvas.width = window.innerWidth-14.05;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');


//c.beginPath()



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (a) {
        a.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

var arrnames=[];
console.log("");
//od 0 do 4
var ShopsLeft = [
    {
        name: "Empik",
        position:
            {
                x: 245,
                y: 45
            },
        photo:"./loga/EMPIK.jpg"
    },
    {
        name: "H&M",
        position:
            {
                x: 245,
                y: 145
            },
        photo:"./loga/HM.jpg"
    },
    {
        name: "Reserved",
        position:
            {
                x: 245,
                y: 245
            },
        photo:"./loga/reserved.jpeg"
    },
    {
        name: "Mc Donald",
        position:
            {
                x: 245,
                y: 345
            },
        photo:"./loga/MCDONALD.jpg"
    },
    {
        name: "KFC",
        position:
            {
                x: 245,
                y: 445
            },
        photo:"./loga/KFC.jpg"
    },
];
// for (var i=0 ;i<ShopsLeft.length;i++){
//     arrnames.push(ShopsLeft[i].name)
// }
ShopsLeft.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
console.log(ShopsLeft);

//od 0 do 3
var ShopsMiddleLeft = [
    {
        name: "Subway",
        position:
            {
                x: 405,
                y: 145
            },
            photo:"./loga/SUBWAY.png"
    },
    {
        name: "Tesco",
        position:
            {
                x: 405,
                y: 245
            },
        photo:"./loga/TESCO.jpg"
    },
    {
        name: "Zara",
        position:
            {
                x: 405,
                y: 345
            },
        photo:"./loga/ZARA.jpeg"
    },
    {
        name: "Carrefour",
        position:
            {
                x: 405,
                y: 445
            },
        photo:"./loga/CARE.png"
    }
];
ShopsMiddleLeft.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
//od 0 do 4
var ShopsMiddleRight = [
    {
        name: "Kebab King",
        position:
            {
                x: 895,
                y: 145
            },
        photo:"./loga/KEBABKING.jpg"
    },
    {
        name: "Pizza Hut",
        position:
            {
                x: 895,
                y: 245
            },
        photo:"./loga/PIZZA.jpeg"
    },
    {
        name: "Pull&Bear",
        position:
            {
                x: 895,
                y: 345
            },
        photo:"./loga/PULL.png"
    },
    {
        name: "Cropp",
        position:
            {
                x: 895,
                y: 445
            },
        photo:"./loga/CROPP.png"
    }

];
ShopsMiddleRight.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
//od 0 do 4
var ShopsRight = [
    {
        name: "TK Maxx",
        position:
            {
                x: 1055,
                y: 45
            },
        photo:"./loga/TKMAXX.jpg"
    },
    {
        name: "Nike",
        position:
            {
                x: 1055,
                y: 145
            },
        photo:"./loga/NIKE.jpg"
    },
    {
        name: "Adidas",
        position:
            {
                x: 1055,
                y: 245
            },
        photo:"./loga/ADIDAS.jpg"
    },
    {
        name: "Rebook",
        position:
            {
                x: 1055,
                y: 345
            },
        photo:"./loga/REBOOK.jpg"
    },
    {
        name: "CCC",
        position:
            {
                x: 1055,
                y: 445
            },

        photo:"./loga/CCC.jpg"
    }
];
ShopsRight.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
var allarrs=[...ShopsLeft,...ShopsRight,...ShopsMiddleLeft,...ShopsMiddleRight]
allarrs.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
console.log(allarrs);
// wyciaganie elementu
// console.log(ShopsLeft[1].name);

//dodawanie optionow

for (var i = 0; i < allarrs.length; i++) {


    var newOption = document.createElement(`option`);
    newOption.innerHTML = `${allarrs[i].name}`;
    newOption.setAttribute("data-x", `${allarrs[i].position.x}`)
    newOption.setAttribute("data-y", `${allarrs[i].position.y}`)
    newOption.setAttribute("data-photo", `${allarrs[i].photo}`)
    select.appendChild(newOption)
}
// for (var i = 0; i < ShopsRight.length; i++) {
//
//
//     var newOption = document.createElement(`option`);
//     newOption.innerHTML = `${ShopsRight[i].name}`;
//     newOption.setAttribute("data-x", `${ShopsRight[i].position.x}`)
//     newOption.setAttribute("data-y", `${ShopsRight[i].position.y}`)
//     select.appendChild(newOption)
// }
// for (var i = 0; i < ShopsMiddleLeft.length; i++) {
//
//
//     var newOption = document.createElement(`option`);
//     newOption.innerHTML = `${ShopsMiddleLeft[i].name}`;
//     newOption.setAttribute("data-x", `${ShopsMiddleLeft[i].position.x}`)
//     newOption.setAttribute("data-y", `${ShopsMiddleLeft[i].position.y}`)
//     select.appendChild(newOption)
// }
// for (var i = 0; i < ShopsMiddleRight.length; i++) {
//
//
//     var newOption = document.createElement(`option`);
//     newOption.innerHTML = `${ShopsMiddleRight[i].name}`;
//     newOption.setAttribute("data-x", `${ShopsMiddleRight[i].position.x}`)
//     newOption.setAttribute("data-y", `${ShopsMiddleRight[i].position.y}`)
//     select.appendChild(newOption)
// }

//lewo
var c = canvas.getContext('2d');
for (var i = 0; i < 5; i++) {
    // c.beginPath()
    c.fillStyle = "#628CF2"
    c.rect(0, i * 100, 200, 100);
    c.fill();

//    c.beginPath();
    c.moveTo(200,0 +i * 100);
    c.lineTo(220,35+ i * 100);
    c.lineTo(220,135+ i * 100);
    c.lineTo(200,100 + i * 100);
    c.lineTo(200,0 + i * 100);
    c.fill();

    c.moveTo(0,500);
    c.lineTo(0,535);
    c.lineTo(220,535);
    c.lineTo(200,500);
    c.lineTo(0,500);
    c.fill();
}
//srodek lewo
for (var i = 0; i < 4; i++) {
    c.rect(450, 100 + i * 100, 200, 100);
    c.stroke();
}
//srodek prawo
for (var i = 0; i < 4; i++) {
    c.rect(650, 100 + i * 100, 200, 100);
    c.stroke();
}
//prawo
for (var i = 0; i < 5; i++) {
    c.fillStyle = "#628CF2"
    c.rect(1100, i * 100, 200, 100);
    c.fill();


    // //3d
    c.moveTo(1100,0 +i * 100);
    c.lineTo(1080,35+ i * 100);
    c.lineTo(1080,135+ i * 100);
    c.lineTo(1100,100 + i * 100);
    c.lineTo(1100,0 + i * 100);
    c.fill();

    c.moveTo(1300,500);
    c.lineTo(1300,535);
    c.lineTo(1080,535);
    c.lineTo(1100,500);
    c.lineTo(1300,500);
    c.stroke();


}







//lewe wejscie
c.beginPath();
c.moveTo(600, 640);
c.lineTo(600, 590);
c.stroke();




//prawe wejscie
c.beginPath();
c.moveTo(700, 640);
c.lineTo(700, 590);
c.stroke();


function make_base(possx,possy) {
    base_image = new Image();
    base_image.src = './gps.png';
    base_image.onload = function () {
        c.drawImage(base_image, possx -30, possy-60 ,60,60);
    }
}
function user() {
    base_image = new Image();
    base_image.src = './user.png';
    base_image.onload = function () {
        c.drawImage(base_image, 610, 565 ,80,80);
    }
}function logo(srcc,xxx,yyy) {
    base_imagee = new Image();
    base_imagee.src = srcc;
    base_imagee.onload = function () {
        c.globalCompositeOperation='destination-over';
        c.drawImage(base_imagee, xxx, yyy ,200,100);
    }
}
// function user() {
//     base_image = new Image();
//     base_image.src = ;
//     base_image.onload = function () {
//         c.drawImage(base_image, 610, 565 ,80,80);
//     }
//}
var Shops = document.querySelector(".select_options").options;
button.addEventListener('click', function (e) {
    e.preventDefault();
    var chosenShop = document.querySelector(".select_options").selectedIndex;
    var ex = 650;
    var o = 640;
    var p = 545;
    var photos = Shops[chosenShop].dataset.photo;
    var choseny = Number(Shops[chosenShop].dataset.y) + 30;
    var chosenx = Number(Shops[chosenShop].dataset.x);
    var speed = 5;
setTimeout(function() {
     if (Shops[chosenShop].dataset.x <410  && Shops[chosenShop].dataset.x > 200) {
         console.log(photos);

         make_base(chosenx, choseny);



         function animate() {


             myReq = requestAnimationFrame(animate);
//pierwsza linia
             c.lineWidth = 10;
             c.strokeStyle = "red";
             c.beginPath();
             c.moveTo(650, 640);
             c.lineTo(650, o);//545
             if (o > 545) {
                 o -= speed;
             }
             //druga

             if (o <= 545) {
                 c.lineTo(ex, 545);//252.5
                 if (ex > chosenx) {

                     ex -= speed;
                 }

             }
             if (ex <= chosenx) {
                 c.lineTo(chosenx, p);//252.5
                 if (p > choseny) {

                     p -= speed;
                 }

             }
             //c.globalCompositeOperation='destination-over';
             logo(photos,chosenx-100,choseny)


             c.stroke();

         }

         animate()
      }
     else {
        make_base(chosenx, choseny);

        function animate() {

            myReq = requestAnimationFrame(animate);
//pierwsza linia
            c.lineWidth = 10;
            c.strokeStyle = "red";
            c.beginPath();
            c.moveTo(650, 640);
            c.lineTo(650, o);//545
            if (o > 545) {
                o -= speed;
            }
            //druga

            if (o <= 545) {
                c.lineTo(ex, 545);//252.5
                if (ex < chosenx) {

                    ex += speed;
                }

            }
            //trzecia
            if (ex >= chosenx) {
                c.lineTo(chosenx, p);//252.5
                if (p > choseny) {

                    p -= speed;
                }

            }




            c.stroke();
        }

        animate()
    }




},500)


});


c.font = "30px Arial";
c.fillStyle = "white";
c.fillText("TU JESTEŚ", 700, 610);


// c.beginPath();
// c.globalCompositeOperation='destination-over';
// c.fillStyle = "white";
// c.arc(650, 608, 32, 0, Math.PI * 2, false);
// c.fill();
c.globalCompositeOperation='destination-over';
user()