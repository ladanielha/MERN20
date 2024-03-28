const express = require("express");
const app = express();
const port = 3000;

const inidata = " ";

app.get("/", (req, res) => {
  if (!inidata) {
    res.send(404, "error");
  } else {
    res.send(inidata);
  }
});
app.get("/user", (req, res) => {
  const user = [
    {
      id: 1,
      name: "Jane Doe",
      email: "jane@example.com",
    },
    {
      id: 2,
      name: "Dane John",
      email: "John@example.com",
    },
  ];
  if (user) {
    res.status(200).json(user);
    // Mengirim status kode 200 OK bersamaan dengan data JSON
  } else {
    res.status(404).json({ error: "User not found" });
    // Mengirim status kode 404 Not Found bersamaan dengan data JSON
  }
});

app.post("/api/users", (req, res) => {
  // Proses data yang diterima dari klien
  const userData = req.body;
  // Simpan data pengguna ke database atau lakukan tindakan
  lainnya;
  // ...
  res.status(201).json({ message: "User created successfully" });
});

app.put("/api/users/:id", (req, res) => {
  const userId = req.params.id;
  const updatedUserData = req.body;
  // Perbarui data pengguna dengan ID yang sesuai
  // ...
  res.json({ message: "User updated successfully" });
});

app.delete("/api/users/:id", (req, res) => {
  const userId = req.params.id;
  res.json({ message: "User deleted successfully" });
});

// app.post("/", (req, res) => {
//   res.send("Hello Worl");
// });

// app.put("/", (req, res) => {
//   res.send("Hello Worl");
// });

// app.delete("/", (req, res) => {
//   res.send("Hello Worl");
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
