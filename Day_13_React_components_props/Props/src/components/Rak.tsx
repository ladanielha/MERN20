import CustomButton from "./CustomButton";
import Produk from "./Products";
import Size from "./Size";

const Rak = (props: any) => {
  //console.log(props)
  // let stok= 0
  // let status = stok >0? 'masih ada' : "kosong"
  // console.log(status)

  const infoProduk = {
    nama: "Wafer Coklat Merk",
    harga: 2000,
    stok: 2,
  };

  return (
    <>
      <h2>Component rak = {props.namaProduk}</h2>
      <Produk props={infoProduk} />
      <Size size={["Small", "Medium", "Large"]} />
      <CustomButton namaProduk={infoProduk.nama}/>
    </>
  );
};

export default Rak;
