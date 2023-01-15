//Function

// function menampilkanHello() {
//     alert('Hello')
// }

// menampilkanHello();

// const menampilkanMinutes = function () {
//     var minutes = 7;
//     var changeMin = convertMinutes(minutes)
//     alert(changeMin, 'halo')

//     function setHours() {

//     }



// }

// const menampilkanData = () => {
//     alert('data')
// }


// function convertMinutes(min) {
//     var minutes = min < 10 ? '0' + min : min;
//     return minutes;
// }

// const convertMinutes = (min) => {
//     // var minutes = min < 10 ? '0' + min : min;
//     var minutes = min
//     if (min < 10) {
//         minutes = "0" + min
//     }
//     return minutes;
// }



// menampilkanHello();



//Switch Case

// var nilai = 100;

// switch (nilai) {
//     case 100: //nilai === 100
//     case 90:
//         alert('Nilai diatas rata rata');
//         break;
//     case 60:
//     case 50:
//         alert('Nilai dibawah rata rata');
//         break;
//     default:
//         alert('Nilai Belum Sempurna')
//         break;
// }
// var nilai = prompt("Tuliskan Nilai :");

// switch (true) {
//     case nilai > 90:
//         document.write("Mendapatkan nilai A");
//         break;
//     case nilai > 80:
//         document.write("Mendapatkan nilai B");
//         break;
//     case nilai > 70:
//         document.write('Mendapatkan nilai C');
//         break;
//     case nilai > 60:
//         document.write('Mendapatkan nilai C');
//         break;
//     default:
//         alert('Nilai yang dimasukan tidak sesuai');
//         break;
// }

// var nilai = prompt("Tuliskan Nilai:");

// switch (true) {
//     case nilai > 90:
//         document.write("Mendapatkan nilai A");
//         break;
//     case nilai > 80:
//         document.write("Mendapatkan nilai B");
//         break;
//     case nilai > 70:
//         document.write("Mendapatkan nilai C");
//         break;
//     case nilai > 60:
//         document.write("Mendapatkan nilai D");
//         break;
//     default:
//         document.write("Mendapatkan nilai E");
//         break;
// }

// for (var i = 0; i < 10; i++) {
//     if (i == 3) {
//         continue;
//     }
//     {}
// }

// console.log

// function getNum(a) {
//     if (a.length > 0) {
//         switch (a) {
//             case 10:
//                 alert('nilai 10')
//             default:
//                 alert('nilai 0')
//         }
//     } else {

//     }
// }
// const dataBuah = ["Apel", "Pisang", "Jeruk", "Melon"];
// const mobil = {
//     merk: "Honda",
//     type: "Jazz",
//     tahun: 2018
// }

// const mobils = [
//     {
//         merk: "Honda",
//         warna: "Merah",
//         seri: "Jazz",
//         tahun: [
//             2022,
//             2021,
//             2020
//         ]
//     },
//     {
//         merk: "Toyota",
//         warna: "Putih",
//         seri: "Yaris",
//         tahun: [
//             2022,
//             2021,
//             2020,
//             2019
//         ]
//     },
// ];



// mobils.map((item) => {
//     document.write(item.merk + '<br>')
//     item.tahun.map((t) => {
//         document.write(t + '<br>')

//     })
//     document.write('<br>')
// })

// for (var i = 0; i < dataBuah.length; i++) {
//     document.write(dataBuah[i])
// }

// for (let k in mobil) {
//     document.write(mobil[k] + '<br>')
// }

// for (let mobil of mobils) {
//     document.write(mobil.merk + '<br>')

//     for (let t of mobil.tahun) {
//         document.write(t + '<br>')
//     }
//     for (var i = 0; i < mobil.tahun.length; i++) {
//         document.write(mobil.tahun[i] + '<br>')
//     }
//     document.write('<br>')
// }

// var i = 0;

// while (i < 10) {
//     document.write(i + '<br>')
//     i++;

// }

// console.log('halo')









































// // var mobil = "Honda Jazz"

// // var mobile = {
// //     type: "Jazz",
// //     model: "RS",
// //     color: "white",
// //     start: function () {
// //         console.log('MOBILE')
// //     }
// // }


// // mobile.start()

// let request = new XMLHttpRequest();
// request.open("GET", 'https://jsonplaceholder.typicode.com/posts');
// request.send();
// request.onload = () => {
//     if (request.status == 200) {
//         var docContent = document.getElementById('text')

//         console.log()

//         var data = JSON.parse(request.response);
//         data.map((item) => {
//             document.write(`<div>${item.title}</div>`)
//             // docContent.insertAdjacentHTML('beforeend', `<div>${item.title}</div>`);

//             console.log(item, 'halo')
//         })
//     }
// }

//OOP

var mobil = {

    //property
    name: "Fiat",
    model: 500,
    weight: '850kg',

    //method
    start: function () {
        var name = "Fiat Lain";
        alert(this.name)
    }
}

// alert(mobil.name)
mobil.start()



class Mobil {
    constructor(type, model, color) {
        this.type = type;
        this.model = model;
        this.color = color;
    }

    get getType() {
        return this.nama
    }

    set setType(newType) {
        this.type = newType;
    }

    start() {
        console.log("Mulai " + this.model)
    }
}

let mobil = new Mobil("Fiat", "500", "white");

mobil.start()

let mobil2 = new Mobil("Toyota", "800", "Merah")
