import Produk from "./Produk";

const Rak = () => {
  const daftarProduk = [
    { id: "p1", namaProduk: "Wafer Coklat" },
    { id: "p2", namaProduk: "Ice Cream" },
    { id: "p3", namaProduk: "Ciki Ball" },
  ];
  return (
    <div>
      <h1>Rak Jualan</h1>
      {daftarProduk.map((produk) => (
        <Produk key={produk.id} namaProduk={produk.namaProduk} />
      ))}
      <table>
        <thead>
          <tr>
            <th>Index </th>
            <th>Produk</th>
          </tr>
        </thead>
        <tbody>
          {daftarProduk.map((produk) => (
            <tr key={produk.id}>
              <td>{produk.id}</td>
              <td>{produk.namaProduk}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Rak;
