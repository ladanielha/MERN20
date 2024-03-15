
const Size = (props:any) => {

  const sizeList = props.size.map((size:string) => <option>{size}</option>)
  return <select>{sizeList}</select>
};

export default Size;
