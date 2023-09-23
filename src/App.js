import React,{useState} from "react";
import Nav from "./nav";
import Rout from "./rout";
import Footer from "./components/footer/footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter } from "react-router-dom";
import Productdetail from "./components/product/productdetail";

const App = () => {
  // add to cart
  const [cart, setCart] = useState([]);
  //product Detail
  const [close, setClose] = useState(false);
  const [detail, setDetail] = useState([]);
  //filter product
  const [product, setProduct] = useState(Productdetail);
  
  const searchbtn = (product) => {
    const lowercaseProduct = product.toLowerCase();
    const change = Productdetail.filter((x) => {
      return x.Title.toLowerCase() === lowercaseProduct || x.Cat.toLowerCase() === lowercaseProduct;
    });
    setProduct(change);
  };
  //product detail
  const view = (product) => {
    setDetail([{ ...product }]);
    setClose(true);
  };

  // add to cart
  const addtocart = (product) => {
    const exsit = cart.find((x) => {
      return x.id === product.id;
    });
    if (exsit) {
      toast.error("This Product is already added to cart");
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
      toast.success("Product is added to cart");
    }
  };
  console.log(cart);
  return (
    <>
      <BrowserRouter>
        <Nav searchbtn={searchbtn} />
        <Rout
          product={product}
          setProduct={setProduct}
          detail={detail}
          view={view}
          close={close}
          setClose={setClose}
          cart={cart}
          setCart={setCart}
          addtocart={addtocart}
        />
        <Footer />
        <ToastContainer />
      </BrowserRouter>
    </>
  );
};

export default App;
