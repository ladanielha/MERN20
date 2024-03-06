//Konten button filter progres
const btnFilterProgres = [
    {
        progres: 60
    },
    {
        progres: 80,
    },
    {
        progres: 85,
    },
    {
        progres: 90,
    },
    {
        progres: 95,
    },
    {
        progres: 100,
    },
]
//Data Pemilu Kab Tangerang 
const kabTangerang = [
    {
        id: 1,
        wilayah: "BALARAJA",
        progres: 96.00,
        hasil: {
            paslon1: 21754,
            paslon2: 41580,
            paslon3: 5019
        }
    },
    {
        id: 2,
        wilayah: "CIKUPA",
        progres: 59.71,
        hasil: {
            paslon1: 24362,
            paslon2: 43497,
            paslon3: 5601
        }
    },
    {
        id: 3,
        wilayah: "CISAUK",
        progres: 96.97,
        hasil: {
            paslon1: 14444,
            paslon2: 26551,
            paslon3: 6009
        }
    },
    {
        id: 4,
        wilayah: "CISOKA",
        progres: 88.16,
        hasil: {
            paslon1: 13304,
            paslon2: 31734,
            paslon3: 3515
        }
    },
    {
        id: 5,
        wilayah: "CURUG",
        progres: 80.34,
        hasil: {
            paslon1: 22999,
            paslon2: 44870,
            paslon3: 8837
        }
    },
    {
        id: 6,
        wilayah: "GUNUNG KALER",
        progres: 89.22,
        hasil: {
            paslon1: 8290,
            paslon2: 19156,
            paslon3: 2372
        }
    },
    {
        id: 7,
        wilayah: "JAMBE",
        progres: 92.31,
        hasil: {
            paslon1: 8020,
            paslon2: 21916,
            paslon3: 1926
        }
    },
    {
        id: 8,
        wilayah: "JAYANTI",
        progres: 87.82,
        hasil: {
            paslon1: 9521,
            paslon2: 24588,
            paslon3: 2284
        }
    },
    {
        id: 9,
        wilayah: "KELAPA DUA",
        progres: 72.05,
        hasil: {
            paslon1: 22782,
            paslon2: 35199,
            paslon3: 13888
        }
    },
    {
        id: 10,
        wilayah: "KEMIRI",
        progres: 98.53,
        hasil: {
            paslon1: 8383,
            paslon2: 17435,
            paslon3: 1854
        }
    },
    {
        id: 11,
        wilayah: "KOSAMBI",
        progres: 86.75,
        hasil: {
            paslon1: 11746,
            paslon2: 21843,
            paslon3: 5998
        }
    },
    {
        id: 12,
        wilayah: "KRESEK",
        progres: 50.23,
        hasil: {
            paslon1: 6231,
            paslon2: 15127,
            paslon3: 1645
        }
    },
    {
        id: 13,
        wilayah: "KRONJO",
        progres: 93.22,
        hasil: {
            paslon1: 11400,
            paslon2: 21085,
            paslon3: 2163
        }
    },
    {
        id: 14,
        wilayah: "LEGOK",
        progres: 97.21,
        hasil: {
            paslon1: 19474,
            paslon2: 39384,
            paslon3: 6409
        }
    },
    {
        id: 15,
        wilayah: "MAUK",
        progres: 93.12,
        hasil: {
            paslon1: 17545,
            paslon2: 28305,
            paslon3: 3247
        }
    },
    {
        id: 16,
        wilayah: "MEKAR BARU",
        progres: 93.28,
        hasil: {
            paslon1: 10585,
            paslon2: 12039,
            paslon3: 1740
        }
    },
    {
        id: 17,
        wilayah: "PAGEDANGAN",
        progres: 98.62,
        hasil: {
            paslon1: 13084,
            paslon2: 25899,
            paslon3: 4332
        }
    },
    {
        id: 18,
        wilayah: "PAKUHAJI",
        progres: 97.72,
        hasil: {
            paslon1: 26005,
            paslon2: 39502,
            paslon3: 6406
        }
    },
    {
        id: 19,
        wilayah: "PANONGAN",
        progres: 99.10,
        hasil: {
            paslon1: 18801,
            paslon2: 41333,
            paslon3: 7190
        }
    },
    {
        id: 20,
        wilayah: "PASAR KEMIS",
        progres: 97.49,
        hasil: {
            paslon1: 41172,
            paslon2: 77188,
            paslon3: 16123
        }
    },
    {
        id: 21,
        wilayah: "RAJEG",
        progres: 89.94,
        hasil: {
            paslon1: 24.190,
            paslon2: 52.820,
            paslon3: 6.483
        }
    },
    {
        id: 22,
        wilayah: "SEPATAN",
        progres: 95.15,
        hasil: {
            paslon1: 18414,
            paslon2: 29900,
            paslon3: 3921
        }
    },
    {
        id: 23,
        wilayah: "SEPATAN TIMUR",
        progres: 95.80,
        hasil: {
            paslon1: 16590,
            paslon2: 28360,
            paslon3: 4451
        }
    },
    {
        id: 24,
        wilayah: "SINDANG JAYA",
        progres: 92.19,
        hasil: {
            paslon1: 14988,
            paslon2: 33270,
            paslon3: 2854
        }
    },
    {
        id: 25,
        wilayah: "SOLEAR",
        progres: 96.86,
        hasil: {
            paslon1: 14983,
            paslon2: 34899,
            paslon3: 5091
        }
    },
    {
        id: 26,
        wilayah: "SUKADIRI",
        progres: 98.45,
        hasil: {
            paslon1: 13582,
            paslon2: 19781,
            paslon3: 3215
        }
    },
    {
        id: 27,
        wilayah: "SUKAMULYA",
        progres: 87.31,
        hasil: {
            paslon1: 10387,
            paslon2: 26970,
            paslon3: 2236
        }
    },
    {
        id: 28,
        wilayah: "TELUKNAGA",
        progres: 95.26,
        hasil: {
            paslon1: 30874,
            paslon2: 37615,
            paslon3: 8076
        }
    },
    {
        id: 29,
        wilayah: "TIGARAKSA",
        progres: 97.74,
        hasil: {
            paslon1: 26432,
            paslon2: 56630,
            paslon3: 7416
        }
    }

]

//set variabel filter input kecamatan
let setKecamatan = document.querySelector('#setKecamatan');
let btnFilterKec = document.querySelector('#btnFilterKec');

//set variabel filter progress
let btnFilterProg = document.querySelector('#btnFilterProgres');
let content = document.querySelector('#content');

// filter kecamatan 
btnFilterKec.addEventListener("click", () => {
    let inputKecamatan = setKecamatan.value;
    let filterKecamatan = inputKecamatan.trim().toUpperCase();
    
    let filterByKecamatan = kabTangerang.filter((data) => data.wilayah === filterKecamatan);

    !filterByKecamatan.length ? viewNotFound(inputKecamatan) : viewResult(filterByKecamatan);
});
// filter progress 
let filterProgres = [...new Set(btnFilterProgres.map((btn) => { return btn }))]
btnFilterProg.innerHTML = filterProgres.map((btn) => {
    let { progres} = btn;
    return (
        "<button class='fil-kec' onclick='filterByProgres(" + (progres) + `)'> < ${progres}%</button>`
    )
}).join('');

let filterByProgres = (progres) => {
    let filterByProgres = kabTangerang.filter((data) => data.progres <= progres);
    viewResult(filterByProgres)
}

//jika filter terdapat data
let viewResult = (results) => {
    content.innerHTML = results.map((data) => {
        let { wilayah, progres,hasil } = data;
        return (
            `<div class='box'>
                <h3>${wilayah}</h3>
                    <div class='bottom'>
                    <h2>Progres : ${progres}%</h2>
                    </div>
                    <div class='bottom'>
                    <h2>Jumlah Suara Paslon</h2>
                    </div>
                    <div class='bottom'>
                    <h2>01 : ${hasil.paslon1.toLocaleString()}</h2>
                    <h2>02 : ${hasil.paslon2.toLocaleString()}</h2>
                    <h2>03 : ${hasil.paslon3.toLocaleString()}</h2>

                </div>
            </div>`)
    }).join('');
}

//jika filter kosong
let viewNotFound = (inputKecamatan) => {
    content.innerHTML = 
        `<div class='box'>
            <h3>${inputKecamatan} TIdak Ditemukan</h3>
            <div class='bottom'>
                <h2>Nama Kecamatan Tidak Ada </h2>
            </div>
        </div>`;
    return content.innerHTML;
}

//default tampil semua
viewResult(kabTangerang);

//datat mentah di console
let data= JSON.stringify(kabTangerang)
console.log("Data mentah :", data)