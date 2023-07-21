import React, {useEffect, useState}  from 'react'
import {useParams} from 'react-router-dom'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import './detailpage.css'

const DetailPage = () => {

  const {id} = useParams()
  const {getProductsById} = useCustomContext()
  const [productDetail, setProductDetail] = useState(null);
  
  //Tuve que agregar el useEffects porque si entraba directamente al /detail/:id no tenía
  useEffect(() => {

    const fetchProductDetails = async () => {
      const product = getProductsById(id);
      setProductDetail(product);
    };

    fetchProductDetails();
  }, [id, getProductsById])

  if (!productDetail) {
    //CAMBIAR POR GIF
    return <p>Loading...</p>
  }

  return (
    <article className='detailsProduct'>
        <header>
          <h2>{productDetail.title}</h2>
          <h3 className='category'>{productDetail.category}</h3>
        </header> 
        <div className='imgPriceContainer'>
          <img src={productDetail.image} alt="" />
          <p className='priceDetail'>${productDetail.price}</p>
        </div>
        <div className='descBtnContainer'>
          <p>{productDetail.description}</p>
          <button className='btn'>Agregar al carrito</button>
        </div>
    </article>
  )
}

export default DetailPage