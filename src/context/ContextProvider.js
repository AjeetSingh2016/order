import React, {useState, createContext, useContext} from 'react'

const ResultContext = createContext();

export const ContextProvider = ({children}) => {

    // For whole data of orders
    const [data, setData] = useState([])
    // For order data of single user
    const [ordersData, setOrdersData] = useState([])
    // For Whole products
    const [productsData, setProductsData] = useState([])
    // For users
    const [usersData, setUsersData] = useState([])
    // For loading
    const [loading, setLoading] = useState(true)
    //For information of single product
    const [productInfo, setProductInfo] = useState(null)

    const getResult = async (url) =>{

        setLoading(true);
        
        const res = await fetch(url);
        const data = await res.json();

        if(url.includes('users')){
            setUsersData(data);
        }
        else if(url.includes('orders')){
            // setOrdersData(data);
            setData(data);
        }
        else if(url.includes('products')){
            setProductsData(data);

        }
        setLoading(false);
    }

  return (

    <ResultContext.Provider
        value={{getResult, ordersData, productsData, usersData, loading, setOrdersData, setProductsData, setUsersData, setLoading, data, productInfo, setProductInfo}}
    >
        {children}
    </ResultContext.Provider>
  )

}

export const useResultContext = () => useContext(ResultContext);