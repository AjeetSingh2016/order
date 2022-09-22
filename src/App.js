import React, {useEffect} from "react";
import Home from "./screens/Home";
import { useResultContext } from "./context/ContextProvider";

function App() {
  const { data, getResult, ordersData, productsData, usersData, setOrdersData } = useResultContext();

  useEffect(() => {
    getResult("https://assessment.api.vweb.app/users");
    getResult("https://assessment.api.vweb.app/products");
    getResult("https://assessment.api.vweb.app/orders");

  }, [])

  


  
  


  return <Home />;
}

export default App;
