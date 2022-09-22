import React, {useEffect, useState} from 'react'
import {useResultContext} from '../context/ContextProvider'
import Chart from './Chart';

const Information = () => {
  const {ordersData} = useResultContext();
  const [loading, setLoading] = useState(true)


  let product = [];
  let quantity = [];

  useEffect(() => {
    setLoading(true);
    ordersData?.forEach(data =>{
      product.push(data.product_id)
      quantity.push(data.quantity)
    })
    setLoading(false);
  }, [ordersData])
  

  return (
    <div className=' w-1/4 flex align-center pt-5 flex-col bg-green-100'>
      <h1 className='text-center' >Products with Quantity</h1>
        {
          loading ? <h1>Loading</h1> : <Chart product={product} quantity={quantity}/>
        }
    </div>
  )
}

export default Information