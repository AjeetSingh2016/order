import React, { useEffect } from "react";
import logo from "../assets/box.png";
import { useResultContext } from "../context/ContextProvider";

// Individual Customer
const Customer = ({ id, name }) => {
  const {getResult, setOrdersData,setLoading, data } = useResultContext();

  useEffect(() => {
    setLoading(true);
    const result = data.filter((value) => {
      return value.user_id === 1;
    });
    setOrdersData(result);
    setLoading(false);
  },[data]);

  const handleClick = () => {
    setLoading(true);
    const result = data.filter((value) => {
      return value.user_id === id;
    });
    setOrdersData(result);
    setLoading(false);
  };

  return (
    <div className="w-full h-20 flex justify-center items-center ">
      <button
        className=" w-full h-20 hover:bg-green-200 active:bg-green-400 focus:outline-none focus:border-green-600 border-l-4 border focus:bg-green-300 ... flex  items-center
      pl-2 text-center"
        onClick={handleClick}
      >
        <span className="mr-10">{id}</span>
        {name}
      </button>
    </div>
  );
};

// Customer List
const Customers = () => {
  const { usersData, loading } = useResultContext();


  return (
    <div className="w-1/5 h-full bg-white rounded-r-lg mr-10">
      <div className="h-1/4 border flex justify-center items-center">
        <img className="h-4/5" src={logo} alt="logo" />
      </div>

      <div className="h-3/4 bg-white">
        <h1 className="text-center font-medium" >Customers</h1>
        {usersData?.map(({ user_id, name }, index) => (
          <Customer id={user_id} name={name} key={user_id} />
        ))}
      </div>
    </div>
  );
};

export default Customers;
