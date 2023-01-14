// console.log('hallo world')

// var docContent = document.getElementById('text')

// docContent.innerHTML = "Hallo World"
// console.log(docContent, 'halo')

var mobil = {
    "merk": "Honda",
    "warna": "Merah",
    "tipe": "Jazz",
    "tahun keluaran": 2010,
}

// console.log(mobil, 'mobil')
// console.log(mobil.merk, 'mobil')
// console.log(mobil['merk'], 'mobil')
// console.log(mobil["tahun keluaran"], 'keluaran')

mobil.warna = "Biru"
mobil["tahun keluaran"] = 2018


// console.log(mobil, 'keluaran')



// console.log(Object.keys(mobil), 'cek semua key pada object')



var hari1 = "Senin"
var hari2 = "Selasa"
var hari3 = "Rabu"
var hari4 = "Kamis"
var hari5 = "Jumat"

// var docContent = document.getElementById('text')
// document.write(hari1)
// document.write(hari2)
// document.write(hari3)

var hari = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat"];
var hari1 = [0, "Selasa", 2, "Kamis", 3];

var mobils = [
    {
        "merk": "Honda",
        "warna": "Merah",
        "tipe": "Jazz",
        "tahun_keluaran": 2010,
        "distributor": [
            "Semarang",
            "Jakarta",
            "Bandung"
        ]
    },
    {
        "merk": "Toyota",
        "warna": "Hitam",
        "tipe": "Avanza",
        "tahun_keluaran": 2012,
        "distributor": [
            "Palembang",
            "Medan",
            "Aceh"
        ],


    }
]

// console.log(mobils[0].tahun_keluaran)
// mobils[0].distributor[2] = "Yogyakarta"
// console.log(mobils[0].distributor[2], 'mobils')


// mobils.push({
//     "merk": "Honda",
//     "warna": "Biru",
//     "tipe": "HRV",
//     "tahun keluaran": 2011,
// })

// mobils[1]["merk"] = "Honda"
// console.log(mobils)

// console.log(hari[0])
// console.log(hari[1])
// hari[4] = "Sabtu"
// hari.push("Sabtu"); //add array
// hari.push("Minggu"); //add array

// hari.pop()




// console.log(hari1)

//Array

// const num = [1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 9, 15];

// const filter = num.filter((item) => {
//     return item > 5
// })

// const filter = num.find((item) => {
//     return item > 5
// })

// const btnLogin = (e) => {
//     console.log(this)
// }

// console.log(filter, 'filter')






































// switch (new Date().getDay()) {
//     case 0:
//       day = "Sunday";
//       break;
//     case 1:
//       day = "Monday";
//       break;
//     case 2:
//        day = "Tuesday";
//       break;
//     case 3:
//       day = "Wednesday";
//       break;
//     case 4:
//       day = "Thursday";
//       break;
//     case 5:
//       day = "Friday";
//       break;
//     case 6:
//       day = "Saturday";
//   }

// const timeStamp = new Date("August 20 2022")
// const timeStamp = new Date("12-02-2022")/


// console.log(now.getFullYear(), 'Tahun')

// console.log(now.getMonth(), 'Bulan')
// console.log(now.getDate(), 'Tanggal')

// const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// console.log(now.getDay(), 'Tanggal')
// console.log(now.getTime(), 'Tanggal')

// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getSeconds());



// setInterval(function () {
//     const now = new Date()

//     var time = now.getHours() + ":" + convertMinutes(now.getMinutes()) + ":" + convertMinutes(now.getSeconds());
//     var docContent = document.getElementById("text");
//     docContent.innerHTML = time


// }, 1000)
function convertMinutes(min) {
    var minutes = min < 10 ? '0' + min : min;

    // var minutes = { condition } ? { jika benar } : { condition } ? { jika benar } : { jika salah };
    // if (min < 10) {
    //     minutes = '0' + min
    // } else {
    //     minutes = min
    // }

    return minutes
}

// var username = "admin";
// var password = "admin123";
// var isCheck = 5;

// if (username.length > 0 && password.length > 0) {
//     if (username === "admin" && password === "admin123" && isCheck === true) {
//         alert('Berhasil Login')

//     } else if (username === "admin" && password === "admin123" && isCheck === false) {
//         alert('Belum on Check')

//     } else {
//         alert('Gagal Login')

//     }
// } else {
//     alert('Mohon Masukan Username Password')
// }


// if (username === "admin" && password === "admin123") {
//     if (isCheck) {
//         alert("Berhasil Login")
//     } else {
//         alert("Gagal Login, Belum Dicheck")
//     }
// } else {
//     alert("Gagal Login")
// }


// var day = 0;
// var name = 'Monday';
// switch (day) {
//     case 0:
//         break
//     case 1:
//         break
//     default:
//         break
// };

// var day = ""
// switch (new Date().getDay()) {
//     // new Date().getDay() === 0
//     case 0:
//         day = "Sunday";
//         break;
//     case 1:
//         day = "Monday";
//         break;
//     case 2:
//         day = "Tuesday";
//         break;
//     case 3:
//         day = "Wednesday";
//         break;
//     case 4:
//         day = "Thursday";
//         break;
//     case 5:
//         day = "Friday";
//         break;
//     case 6:
//         day = "Saturday";
//         break;
//     default:
//         day = "Sunday";
//         break;
// }
// console.log(day, 'day')


var nilai = 50;

if (nilai > 90) {
    document.write("Mendapatkan Nilai A");
} else if (nilai > 80 && nilai <= 90) {
    document.write("Mendapatkan Nilai B");
} else if (nilai > 70 && nilai <= 80) {
    document.write("Mendapatkan Nilai C");
} else if (nilai > 60 && nilai <= 70) {
    document.write("Mendapatkan Nilai D");
} else {
    document.write("Mendapatkan Nilai E");
}






















