// const [a,b,c] = [10_000,20_000,30_000]

// console.log(a)
// console.log(b)
// console.log(c)

//-----Deconsturction---//
// const hero = {
//     title: "Vexana",
//     type: "Mage",
//     damege:60,

// }

//Cara Lama
// const name = hero.name
// const type = hero.type
// const damege = hero.damege

//Berdasarkan nama 
// const {title, type, damege} = hero

// console.log(`name : ${title}`)
// console.log(`type : ${type}`)
// console.log(`damage : ${damege}`)


// const penjualan = {
//     faktur: "FKT001",
//     customer: {
//       name: "Andika",
//       phone: "0898162726256"
//     },
//   }

//   const posting = {
//     judul :"Lorem Ipsum ",
//     konten: "Lorem content",
//     tags: ["#coding" , "#js", "#FE"]
//   }
  
//   const {faktur, customer: {name, phone}} = penjualan;
  
//   console.log(`Faktur ${faktur}`);
//   console.log(`Customer  name :${name}`)
//   console.log(`Customer  phone :${phone}`)

//   const {tags: [tag1, tag2]} = posting

// const response = {
//     next:null,
//     prev:null,
//     count:1,
//     results:[
//         {
//             id:1,
//             name:"Barang A",
//             price: 10000
//         },
//         {
//             id:2,
//             name:"Barang B",
//             price: 20000
//         }
//     ]
// }

// const {results, ...pagination} = response
// console.table(response)
// console.table(results)
// console.log(results)
// console.log(pagination)


// const arr1 =  [1, 2, 3]
// const arr2 =  [...arr1, 4, 5]
// console.log(arr2)

// const pembelian = {
//     faktur: "FKT0001",
//     total: 40000
//   }
  
//   const customer = {
//     nama: "Budi",
//     alamat: "Jakarta"
//   }
  
//   const payload = {
//     faktur: "FKT0001",
//     total: 40000,
//     customer: {
//       nama: "Budi",
//       alamat: "Jakarta"
//     }
//   }
//   //data untuk menyatukan dua respose yang berbeda 
//   const dataPayload = {...pembelian, customer}
  
//   console.log(dataPayload)

//Asyncronous

// console.log("Log 1");

// setTimeout(() => {
//     console.log("Log 2")
// },1000)

// console.log("Log 3")

//callback

let x = 10;

function calculate (callback) {
  setTimeout(() => {
    x += 10
    callback(x);
  }, 1000)
}

const renderToH1 = (data) => document.querySelector("h1").innerHTML = data

calculate(console.log)
calculate(renderToH1)



