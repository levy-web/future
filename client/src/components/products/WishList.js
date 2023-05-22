import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addWish, delWish, resetWish } from "../redux/wishlist/WishListAction";
import { Link, NavLink } from "react-router-dom";
import Footer from '../Footer'

const WishList = () => {
  const state = useSelector((state) => state.wish);
  const dispatch = useDispatch();
  

  const EmptyCart = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 py-5 bg-light text-center">
            <h4 className="p-3 display-5">Your WishList is Empty</h4>
            <Link to="/" className="btn  btn-outline-dark mx-4">
              <i className="fa fa-arrow-left"></i> Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  };

  
  function handleSubmit(){
    state.map((item) => {
      fetch('/carts',{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          "quantity": item.qty,
          "price": item.price
        })
      })
      .then((r)=>r.json())
      .then((data)=>console.log(data))
    })
  }

  const addItem = (product) => {
    dispatch();
  };
  const removeItem = (product) => {
    dispatch(delWish(product));
  };

  const ShowCart = () => {
    let subtotal = 0;
    let shipping = 30.0;
    let totalItems = 0;
    state.map((item) => {
      return (subtotal += 200 * item.qty);
    });

    state.map((item) => {
      return (totalItems += item.qty);
    });
    return (
      <>
        <section className="h-100 gradient-custom">
          <div className="container py-5">
            <div className="row d-flex justify-content-center my-4">
              <div className="col-12">
                <div className="card mb-4">
                  <div className="card-header d-flex py-3">
                    <h5 className="mb-0">Product List</h5>
                    <button
                      onClick={()=>dispatch(resetWish())}
                      className="mb-0 me-5 text-danger border-0 cursor-poiter ms-auto"
                    >clear</button>
                  </div>
                  <div className="card-body">
                    {state.map((item) => {
                      return (
                        <div key={item.id}>
                          <div className="row d-flex align-items-center">
                            <div className="col-lg-3 col-md-12">
                              <div
                                className="bg-image rounded"
                                data-mdb-ripple-color="light"
                              >
                                <img
                                  src={item.image_url}
                                  alt={item.name}
                                  width={100}
                                  height={75}
                                />
                              </div>
                            </div>

                            <div className="col-lg-5 col-md-6">
                              <p>
                                <strong><NavLink to = {`/category/${item.category.protected_area}/${item.category.name}/product/${item.id}`} className = "d-block text-primary text-decoration-none py-2 product-name">{item.name}</NavLink></strong>
                              </p>
                            </div>

                            <div className="col-lg-4 col-md-6">
                              <div
                                className="d-flex mb-4"
                                style={{ maxWidth: "300px" }}
                              >
                                <button
                                  className="btn ms-auto px-3"
                                  onClick={() => {
                                    removeItem(item);
                                  }}
                                >
                                  <i className="fas fa-times"></i>
                                </button>
                              </div>
                            </div>
                          </div>

                          <hr className="my-4" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };

  return (
    <>
      <div className="container my-3 py-3">
        <h1 className="text-center">Wish List</h1>
        <hr />
        {state.length > 0 ? <ShowCart /> : <EmptyCart />}
      </div>
      <Footer/>
    </>
  );
};

export default WishList;