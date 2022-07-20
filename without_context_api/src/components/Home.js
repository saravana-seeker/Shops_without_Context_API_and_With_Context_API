import axios from "axios";
import { useEffect, useState } from "react";
import Cart from "./Cart";
import SingleProduct from "./SingleProduct";


const Home = ({cart,setCart}) => {
  const [data, setData] = useState();
  const [load, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://fakestoreapi.com/products/")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
        console.log(typeof data);
      })
      .catch((e) => {
        console.log(e);
      });
    setLoading(false);
  }, []);
  return (
    <div className="container m-5">
      {load && <div>Loading..!</div>}
      {data && <SingleProduct data={data} cart={cart} setCart={setCart} />}
    </div>
  );
};

export default Home;
