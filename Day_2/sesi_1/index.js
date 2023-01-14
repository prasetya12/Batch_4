
//ABS
var minNum = -200;
var numPositif = Math.abs(minNum)

document.getElementsByClassName("content").innerHTML = 'HALO';

// alert(numPositif)

//POW
var pangkat = Math.pow(3, 10);
// console.log(pangkat, 'pow')

//SQRT
var akar = Math.sqrt(25);
// console.log(akar, 'sqrt')

//MAX 
// console.log(Math.max(1, 2, 3, 4, 5, 1000))

//MIN 
// console.log(Math.min(-100, -2, 1, 2, 3, 4, 5, 1000))

//Floor 
// console.log(Math.floor(19.9), 'FLOOR')

//Ceil 
// console.log(Math.ceil(100.1), 'CEIL')

//Round 
// console.log(Math.round(12.4), 'Round')
// console.log(Math.round(12.5), 'Round')

//Random 
var numRandom = Math.round(Math.random() * 100)
var numRandom1 = Math.random(20, 23)
var numRandom2 = Math.round(Math.random() * 3 + 20)
var numRandom3 = Math.floor(Math.random() * 23) + 20

// console.log(numRandom, 'Random')
// console.log(numRandom1, 'Random1')
// console.log(numRandom2, 'Random2')
// console.log(numRandom3, 'Random3')


//STRING MANIPULATION 
//index
// var place = "Bandung Raya";
// console.log(place[place.length - 1]);
// console.log(place.)

var city = "Jakarta"
var user = "Budi"
var region = "Timur"


// console.log(city.concat(user.concat(region)));
// console.log(city + " " + region);

var lokasi = `${city} ${region}`;
// console.log(lokasi, 'lokasi')



//indexOf
var negara = " Indonesia   "
// console.log(negara.indexOf('A'))

//repeat
// console.log(negara.repeat(4))

//replace
// console.log(negara.replace('n', 'f'), 'replace')
// console.log(negara.replaceAll('n', 'f'), 'replace')
// console.log(negara.slice(0, 4), 'slice')
// console.log(negara.toLocaleLowerCase(), 'toLowerCase')
// console.log(negara.toLocaleUpperCase(), 'toUpperCase')

//Trim
// console.log(negara)
// console.log(negara.length)

// console.log(negara.trim())
// console.log(negara.trim().length)










// console.log(location[0])

const mobil = {
    "merk": "honda",
    "warna": "merah",
    "tipe": "jazz"
}

var keyMobil = Object.keys(mobil)

console.log(keyMobil[0], 'mobil')
console.log(mobil.merk, 'mobil')










