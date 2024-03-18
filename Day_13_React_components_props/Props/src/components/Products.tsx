const Produk = ({ props }: any) => {

  return (
    <>
      <h2>Component Produk</h2>
      <h2>Nama Produk = {props.nama}</h2>
      <h2>Harga = {props.harga}</h2>
      <h2>Stok = {props.stok > 0 ? props.stok : 0}</h2>
    </>
  );
};

// Produk.defaultProps = {
//   nama: 'anonim',
//   harga: '0'
// }

export default Produk;
