import React, { useState } from 'react'

const AddProduct = () => {
  
  const [productName,  setProductName] = useState('')
  const handleProductNameChange = (e) => {
    setProductName(e.target.value)
  }
  const handleAddProduct = (e) => {    
    console.log(e.type)
    console.log('Nama Produk: ', productName)
    e.preventDefault()
  }
  return (
    <div>AddProduct
        <h2>Tambah Produk</h2>
        <form onSubmit={handleAddProduct}>
          <label> Nama Produk </label>
          <input 
            type='text'
            value={productName}
            onChange={handleProductNameChange}/>
          <button type='submit'> Simpan </button>
        </form>
    </div>
  )
}

export default AddProduct