// let username = "budi"

// const ip = "192.168.0.1"
let nama = "Putri"
let umur = 20
let alamat = "Bandung"

let user = {
    nama: "Putri",
    umur: 20,
    alamat: "Bandung"
}

let users = [
    {
        nama: "Putri",
        umur: 20,
        alamat: "Bandung"
    },
    {
        nama: "Bima",
        umur: 22,
        alamat: "Malang"
    }, {
        nama: "Gatot",
        umur: 21,
        alamat: "Jogja"
    },
]



let book = {
    author: {
        name: 'Putri',
        address: {
            city: "Bandung",
            region: "Jawa Barat"
        }
    },
    title: "Book1"
}

let books = [
    {
        author: {
            name: 'Putri',
            address: {
                city: "Bandung",
                region: "Jawa Barat"
            }
        },
        title: "Book1"
    }, {
        author: {
            name: 'Putri',
            address: {
                city: "Bandung",
                region: "Jawa Barat"
            }
        },
        title: "Book2"
    }
    , {
        author: {
            name: 'Putri',
            address: {
                city: "Bandung",
                region: "Jawa Barat"
            }
        },
        title: "Book3"
    }
]





function onClickButton() {
    // var username = "antasari"
    // console.log(document.innerHeight)
    // document.write(username)
    // var judul = document.getElementsByTagName('h3')

    // judul[0].style.color = "blue"
    // var namaDoc = document.getElementById('nama')
    // var umurDoc = document.getElementById('umur')
    // var alamatDoc = document.getElementById('alamat')

    //queryselector
    // var namaDoc = document.querySelector(".form-name #nama")
    // console.log(namaDoc, 'halo')

    // user.nama = "Jenika"
    user['name'] = "Jenika"

    console.log(user, 'halo')
    //Manggil dari variabel
    // namaDoc.innerHTML = nama
    // umurDoc.innerHTML = umur
    // alamatDoc.innerHTML = alamat

    //Manggil dari object
    // namaDoc.innerHTML = user.nama
    // umurDoc.innerHTML = user.umur
    // alamatDoc.innerHTML = user.alamat


    //Manggil dari array, menggunakan index
    // namaDoc.innerHTML = users[2].nama
    // umurDoc.innerHTML = users[2].umur
    // alamatDoc.innerHTML = users[2].alamat


    // console.log(books[1], 'nama')

}