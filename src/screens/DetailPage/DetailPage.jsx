import React, {useEffect, useState}  from 'react'
import {useParams} from 'react-router-dom'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import { Counter } from '../../components/index'
import './detailpage.css'

const DetailPage = () => {

  const {id} = useParams()
  const {getProductById, addProductCart, isInCart, getProductCartById} = useCustomContext()
  const [productDetail, setProductDetail] = useState(isInCart(id) ? getProductCartById(id) : getProductById(id));
  
  //Tuve que agregar el useEffect porque si entraba directamente al /detail/:id no tenía
  useEffect(() => {

    const fetchProductDetails = async () => {
      const product = getProductById(id);
      setProductDetail(product);
    };

    fetchProductDetails();
  }, [id, getProductById])

  if (!productDetail) {
    //CAMBIAR POR GIF
    return <p>Cargando...</p>
  }

  return (
    <article id={productDetail.id} className='detailsProduct'>
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
        {
          isInCart(id)
          ?
          <Counter initialValue={productDetail.quantity} stock={productDetail.stock} id={productDetail.id}/>
          :
          <Counter initialValue={1} stock={productDetail.stock} id={productDetail.id} />
        }
        </div>
    </article>
  )
}

export default DetailPage