const CustomButton = (props:any) => {
    
    const simpan = (namaProduk:string,) => {
        //alert(event.type);
        alert(`Berhasil menyimpan data ${namaProduk}!`);
    }
  return (
    <button onClick={() => simpan(props.namaProduk,) }> Simpan</button>
  )
}

export default CustomButton