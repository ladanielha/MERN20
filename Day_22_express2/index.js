const http = require("node:http");
const {app} = require("./app")
const server = http.createServer(app);

const port = 3000;

server.listen(port, () => {
    console.log(`Server Run at port ${port}`)
})

// const dbbarang = [
//     {
//         id: "BRG-001",
//         nama: "Barang 1"
//     },
//     {
//         id: "BRG-002",
//         nama: "Barang 2"
//     },
//     {
//         id: "BRG-003",
//         nama: "Barang 3"
//     }
// ]

// app.get("/",(req,res) => {
//     return res.status(200).json("Hello World");
// });

// app.get("/barang",(req,res) => {
//     return res.status(200).json(dbbarang);
// });

// app.get("/barang",(req,res) => {
//     console.log(req.query)
//     return res.status(200).json({status:"Ini barang World"});
// });

// app.get("/barang/:id", (req, res) => {
//     try {
//         const barang = dbbarang.find((value, index) => req.params.id === value.id);
//         if (barang.length === 0) {
//             throw new Error("Item not found");
//         }
//         return res.status(200).json(barang);
//     } catch (error) {
//         return res.status(404).json({ error: error.message });
//     }
//     // let barang = null;
//     // for( let value of dbbarang){
//     //     if(value.id === req.params.id){
//     //         barang = value;
//     //     }
//     // }
// });

// app.get("/barang/:id/category/:idCategory", (req, res) => {
//     const { id, idCategory } = req.params;
//     console.log("ID Barang:", id);
//     console.log("ID Category:", idCategory);
//     return res.status(200).json({ status: `ID Barang = ${id}, ID Category = ${idCategory}` });
// });

// //klo gapenting banget bisa pake query http://localhost:3000/barang/?search=Ayam/
// app.get("/barang/", (req, res) => {

//     return res.status(200).json({ status: `ID Barang = ${id}, ID Category = ${idCategory}` });
// });



